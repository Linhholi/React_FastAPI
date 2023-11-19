import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import "./projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import axios from 'axios';

const Projects = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0])
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('file_upload', file);
    
    setLoading(true); // Set loading state when the request starts

    try {
      // const endpoint = "http://localhost:8000/upload_image/"
      const endpoint = "https://linh-website-backend.onrender.com/upload_image/"
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Uploaded successfully!");
        const responseData = await response.json();
        setText(responseData.result); // Set the received text
        // Fetch the image separately using axios
        const imageResponse = await axios.get(responseData.image, { responseType: 'blob' });
        setResultImage(URL.createObjectURL(imageResponse.data)); // Set the received image
        setLoading(false); // Set loading state to false when request is finished

      } else {
        console.log("Failed")
      }
    } catch(error) {
      console.log(error);
      setLoading(false); // Set loading state to false in case of an error
    }
  }

  return (
    <div>
        <NavBar />
        <div className="projects">
          <div className="icon-text">
            <div className="icon">
              <FontAwesomeIcon icon={faImages} />
            </div>
            <div className="caption">
              The License Plate Detector Project
            </div>
          </div>
          <div className="photoUpload">
            <h2>Upload your image</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input type="file" onChange={handleFileInputChange} />
                <button type="submit"> Upload</button>
              </div>
            </form>
          </div>
          <div className="processingBlock">
            <div class="processingText">
              {loading && <p>Processing...</p>}
            </div>
            {!loading && text && resultImage && (
            <div>
              <h3>License plate numbers:</h3>
              <div class="plate">
                <p>{text}</p>
              </div>
              <h3>Processed Image:</h3>
              <div class="imageContainer">
                <img src={resultImage} alt="Processed Image" />
              </div>
            </div>
            )}
          </div>
          
          <div className="icon">
            <FontAwesomeIcon icon={faComments} />
          </div>
        </div>
        <Footer />
    </div>
  )
};

export default Projects;