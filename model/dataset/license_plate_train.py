from ultralytics import YOLO

model = YOLO('yolov8n.yaml')

model.train(data='/Users/linhnguyen/Desktop/React_FastAPI/model/dataset/data.yaml', epochs=100)