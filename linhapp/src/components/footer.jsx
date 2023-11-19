import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
  return (
    <div className="text-footer">
        <div className="text-wrapper-1">THE PLACE</div><div className="text-wrapper-2"> I CALL MINE</div>
        <a href="https://www.linkedin.com/in/nguyenthihoailinh/">
            <FontAwesomeIcon icon= {faLinkedin} className="icon-linkedin"/>
        </a>
        <a href="https://github.com/Linhholi">
            <FontAwesomeIcon icon= {faGithub} className="icon-github"/>
        </a>
    </div>
  )
};

export default NavBar;