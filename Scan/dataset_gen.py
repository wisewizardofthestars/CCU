import cv2
import numpy as np
import os
import random

# CONFIGURATION
STICKERS = {
    "banana": "banana.png",
    "apple": "apple.png",
    "blueberry": "blueberry.png"
}
BACKGROUNDS_DIR = "backgrounds"
OUTPUT_DIR = "output"
IMAGES_PER_CLASS = 20

def rotate_image(image, angle):
    image_center = tuple(np.array(image.shape[1::-1]) / 2)
    rot_mat = cv2.getRotationMatrix2D(image_center, angle, 1.0)
    result = cv2.warpAffine(image, rot_mat, image.shape[1::-1], flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=(0,0,0,0))
    return result

def overlay_image_alpha(img, img_overlay, x, y, alpha_mask):
    """Overlay img_overlay on top of img at (x, y) and blend using alpha_mask."""
    # Image ranges
    y1, y2 = max(0, y), min(img.shape[0], y + img_overlay.shape[0])
    x1, x2 = max(0, x), min(img.shape[1], x + img_overlay.shape[1])

    # Overlay ranges
    y1o, y2o = max(0, -y), min(img_overlay.shape[0], img.shape[0] - y)
    x1o, x2o = max(0, -x), min(img_overlay.shape[1], img.shape[1] - x)

    # Exit if nothing to do
    if y1 >= y2 or x1 >= x2 or y1o >= y2o or x1o >= x2o:
        return

    img_crop = img[y1:y2, x1:x2]
    img_overlay_crop = img_overlay[y1o:y2o, x1o:x2o]
    alpha = alpha_mask[y1o:y2o, x1o:x2o, 3] / 255.0
    alpha_inv = 1.0 - alpha

    for c in range(0, 3):
        img_crop[:, :, c] = (alpha * img_overlay_crop[:, :, c] +
                             alpha_inv * img_crop[:, :, c])

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

background_files = [f for f in os.listdir(BACKGROUNDS_DIR) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

if not background_files:
    print("Error: Please add some images to the 'backgrounds' folder first.")
    exit()

print(f"Generating {IMAGES_PER_CLASS} images per class...")

for name, filename in STICKERS.items():
    sticker = cv2.imread(filename, cv2.IMREAD_UNCHANGED)
    if sticker is None:
        print(f"Could not load {filename}. Make sure it is in the same folder.")
        continue

    # Create subfolder for YOLO classification format
    class_dir = os.path.join(OUTPUT_DIR, name)
    if not os.path.exists(class_dir):
        os.makedirs(class_dir)

    for i in range(IMAGES_PER_CLASS):
        # 1. Load a random background
        bg_name = random.choice(background_files)
        bg = cv2.imread(os.path.join(BACKGROUNDS_DIR, bg_name))
        
        # Resize background to standard training size (e.g., 640x640)
        bg = cv2.resize(bg, (640, 640))

        # 2. Randomly transform sticker
        # Scale: Random size between 20% and 60% of background
        scale = random.uniform(0.2, 0.6)
        new_width = int(bg.shape[1] * scale)
        new_height = int(sticker.shape[0] * (new_width / sticker.shape[1]))
        sticker_resized = cv2.resize(sticker, (new_width, new_height))

        # Rotate: Random angle
        angle = random.randint(-45, 45)
        sticker_rotated = rotate_image(sticker_resized, angle)

        # Position: Random x, y
        max_x = bg.shape[1] - sticker_rotated.shape[1]
        max_y = bg.shape[0] - sticker_rotated.shape[0]
        
        # Safety check if sticker is bigger than background after rotation
        if max_x < 0 or max_y < 0:
            continue
            
        x_pos = random.randint(0, max_x)
        y_pos = random.randint(0, max_y)

        # 3. Paste sticker onto background
        overlay_image_alpha(bg, sticker_rotated, x_pos, y_pos, sticker_rotated)

        # 4. Save
        save_path = os.path.join(class_dir, f"{name}_{i}.jpg")
        cv2.imwrite(save_path, bg)

print("Done! Check the 'output' folder.")