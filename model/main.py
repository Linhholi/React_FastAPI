from fastapi import FastAPI, UploadFile, File
from typing import List
from predict import predict
from PIL import Image
from io import BytesIO
import base64
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
# Allow CORS for all origins, methods, headers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://linh-website.onrender.com"],  # Change this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

@app.post("/upload_image/")
async def upload_image(file_upload: UploadFile):
    contents = await file_upload.read()
    # Process the received file using Ultralytics YOLO
    img = Image.open(BytesIO(contents))  # Convert bytes to PIL Image

    result_img, text = predict(img)

    # Convert the processed image to a Base64 string
    buffered = BytesIO()
    result_img.save(buffered, format="JPEG")  # Save the processed image to BytesIO
    img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')  # Encode to Base64

    # Return your YOLO model's results or any other processing result
    return {"result": text, "image": f"data:image/jpeg;base64,{img_str}"}

# Run the FastAPI app using Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)