import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import "./profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div>
        <NavBar />
        <div className="profile">
            <div className="field">
                <div className="icon">
                    <FontAwesomeIcon icon={faBookOpen} /> &nbsp;
                    Education
                </div>
                <div className="text">
                    <table>
                        <tr>
                            <th><strong>Master of Data Science</strong></th>
                            <th><em>Swinburne University of Technology</em></th>
                        </tr>
                        <tr>
                            <td>Relevant coursework: Machine Learning, Data Visualisation, Big Data, Data Science, etc.</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th><strong>Bachelor of Finance and Banking</strong></th>
                            <td><em>Foreign Trade University</em></td>
                        </tr>
                    </table>
                    
                </div>
            </div>

            <div className="field">
                <div className="icon">
                    <FontAwesomeIcon icon={faClipboard} /> &nbsp;
                    Experience
                </div>
                <div className="text">
                <table>
                        <tr>
                            <th><strong>Data Scientist Intern</strong></th>
                            <th>Jul/2023 - present</th>
                        </tr>
                        <tr>
                            <td><em>ITConnexion</em></td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th><strong>Business Analyst</strong></th>
                            <td>Oct/2021 - Feb/2022</td>
                        </tr>
                        <tr>
                            <th><em>Premium Technology Inc.</em></th>
                            <td></td>
                        </tr>
                    </table>

                </div>
            </div>

            <div className="field">
                <div className="icon">
                    <FontAwesomeIcon icon={faPhone} /> &nbsp;
                    Contact me
                </div>
                <div className="text">
                    <a href="leslie.th.nguyen@gmail.com" style={{ textDecoration: 'none' }}>Email: leslie.th.nguyen@gmail.com</a>
                </div>
            </div>
        </div>
        
        <Footer />
    </div>
  );
};
export default Home;