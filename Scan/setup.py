from ultralytics import YOLO

# Load a pre-trained model (nano version is fastest for mobile)
# 'yolov8n-cls.pt' tells it we want CLASSIFICATION, not detection.
model = YOLO('yolov8n-cls.pt') 

# Train it on your data
# epochs=20 means it will study the images 20 times.
results = model.train(data='./output', epochs=20, imgsz=224)

# It will save your custom brain to: runs/classify/train/weights/best.pt