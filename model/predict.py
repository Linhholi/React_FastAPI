def predict(image):
    from ultralytics import YOLO
    from PIL import Image
    import easyocr
    import numpy as np
    # Initialise the OCR reader
    reader = easyocr.Reader(['en'], gpu=False)

    # Path to the directory containing your custom YOLO model files (cfg, weights, data)
    model_dir = '/Users/linhnguyen/Desktop/React_FastAPI/model/dataset/license_plate_detector.pt'

    # Load the YOLO model
    model = YOLO(model_dir)

    # results = model.predict(source=image_path, show=True, save=False, conf=0.5, save_txt=False, save_crop=False, line_width=2, box=True)
    results = model(source=image)

    for r in results:
        im_array = r.plot()  # plot a BGR numpy array of predictions
        im = Image.fromarray(im_array[..., ::-1])  # RGB PIL image
        im.save('results.jpg')  # save image

    for r in results:
        x_min, y_min, x_max, y_max = r.boxes.xyxy[0][0].item(),r.boxes.xyxy[0][1].item(),r.boxes.xyxy[0][2].item(),r.boxes.xyxy[0][3].item()
        
        # Crop the region of interest (license plate) from the image
        plate_image = image.crop((x_min, y_min, x_max, y_max))
        # Convert the image to a NumPy array
        plate_np = np.array(plate_image)

        # Convert the image to RGB format
        plate_rgb = plate_np[:, :, ::-1]
        # Perform OCR on the converted image
        result = reader.readtext(plate_rgb)
        text = ""
        for i in range(0,len(result)):
            text = text + str(result[i][1])
    return im, text


import sys
# if __name__ == '__main__':
#     predict(sys.argv[1])
if __name__ == '__main__':
    globals()[sys.argv[1]](sys.argv[2])