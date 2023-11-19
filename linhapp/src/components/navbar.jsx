import "./navbar.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className="desktop">
      <div className="header-line">
        <div className="text-wrapper">LINH NGUYEN</div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faHouse} className="icon" />
        </Link>
      </div> 
      <div className="overlap-group">
          <Link to='/' style={{ textDecoration: 'none' }}><div className="menu-button">HOME</div></Link>
          <Link to='/projects' style={{ textDecoration: 'none' }}> <div className="menu-button">PROJECTS</div></Link>
          <Link to='/profile' style={{ textDecoration: 'none' }}> <div className="menu-button">PROFILE</div> </Link>
      </div>
    </div>
  )
};

export default NavBar;