import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <NavBar />
        <div>
          <h1 className="welcome">Welcome!</h1>
          <p className="content">
          I created this website to introduce myself and the projects that I have been working on in Data Science. 
          Please feel free to explore :)
          </p>
          <div className="buttons">
          <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div className="button">
                  <div className="icon">
                    <FontAwesomeIcon icon={faBarsProgress} />
                  </div>
                  <h2 className="text">PROJECTS</h2>
              </div>
          </Link>
          <Link to='/profile' style={{ textDecoration: 'none' }}>
            <div className="button">
                <div className="icon">
                  <FontAwesomeIcon icon={faIdCard} />
                </div>
                <h2 className="text">PROFILE</h2>
              </div>
          </Link>
          </div>
        </div>
        <Footer />
    </div>
  );
};
export default Home;