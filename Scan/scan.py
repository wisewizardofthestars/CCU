import cv2
import sqlite3
import os
import platform
import subprocess
import time
from ultralytics import YOLO


# --- FILE OPENER HELPER ---
class SmartOpener:
    def __init__(self):
        self.last_opened_file = None
        self.last_open_time = 0
        self.cooldown = 5.0 # Seconds to wait before opening the SAME file again

    def open_file(self, filename):
        # 1. Check if file exists
        if not os.path.exists(filename):
            print(f"Error: File '{filename}' not found on disk.")
            return False

        # 2. Check cooldown (prevent opening 100 windows)
        current_time = time.time()
        if filename == self.last_opened_file:
            if current_time - self.last_open_time < self.cooldown:
                return False # Too soon, ignore

        # 3. Open the file based on OS
        print(f"Opening {filename}...")
        try:
            if platform.system() == 'Darwin':       # macOS
                subprocess.call(('open', filename))
            elif platform.system() == 'Windows':    # Windows
                os.startfile(filename)
            else:                                   # Linux
                subprocess.call(('xdg-open', filename))
            
            # Update state
            self.last_opened_file = filename
            self.last_open_time = current_time
            return True
            
        except Exception as e:
            print(f"Failed to open file: {e}")
            return False

# --- DATABASE FUNCTION ---
def get_product_info(detected_class):
    try:
        conn = sqlite3.connect('store.db')
        cursor = conn.cursor()
        
        # Query the DB for the detected class name
        cursor.execute("SELECT key_name, page_name FROM products WHERE key_name=?", (detected_class,))
        result = cursor.fetchone()
        conn.close()
        
        if result:
            return {
                "name": result[0],
                "desc": result[1]
            }
        else:
            return None
    except Exception as e:
        print(f"DB Error: {e}")
        return None

# --- MAIN APP ---
def run_scanner():
    # Load your trained model
    # Ensure this points to your actual trained model file
    model = YOLO('runs/classify/train/weights/best.pt') 

    cap = cv2.VideoCapture(0)
    opener = SmartOpener() # Initialize our helper

    print("Scanner started. Press 'q' to quit.")

    while True:
        ret, frame = cap.read()
        if not ret: break

        # 1. AI DETECTION
        results = model(frame, verbose=False)
        top_idx = results[0].probs.top1
        confidence = results[0].probs.top1conf.item()
        detected_key = results[0].names[top_idx] # e.g., "banana"

        # Draw UI
        label = f"Looking... ({detected_key} {confidence:.2f})"
        color = (0, 255, 255) # Yellow

        # 2. DATABASE LOOKUP
        # Only query if we are confident (e.g., > 70% sure)
        if confidence > 0.7:
            info = get_product_info(detected_key)
            
            if info['desc']:
                # Try to open the file
                did_open = opener.open_file(info['desc'])
                
                if did_open:
                    label = f"OPENING: {info['desc']}"
                    color = (0, 255, 0) # Green
                else:
                    label = f"Detected: {info['desc']}"
                    color = (255, 0, 0) # Blue (Already open/cooldown)

            if info:
                # 3. DISPLAY INFO ON SCREEN
                # Draw a background box for text readability
                cv2.rectangle(frame, (20, 20), (500, 150), (0, 0, 0), -1)
                
                # Product Name
                cv2.putText(frame, f"{info['name']} - {info['desc']}", (30, 60), 
                           cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
                
            else:
                # Product detected by AI, but not in Database
                cv2.putText(frame, f"Unknown Item: {detected_key}", (30, 50), 
                           cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        else:
            # Low confidence - asking user to get closer
            cv2.putText(frame, f"Confidence: {confidence:.2f}", (30, 50), 
                       cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 255), 2)

        cv2.imshow("Smart Product Scanner", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    run_scanner()