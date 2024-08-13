import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';
const Bottombar = () => {
    return (
        <div className="bottombar">
            <nav>
                <NavLink exact="true" activeclassName="active" className="page-link" to='/scripts'>
                    <FontAwesomeIcon icon={faCode} color="#ffffff" />
                </NavLink>
            </nav>
            <div className="outside-link">
                <ul>
                    <li>
                        <a target="_blank"
                        rel="nonreferrer" 
                        href='https://www.youtube.com/channel/UCfID4XQQm6mIZaYaYbdJDrw'>
                            <FontAwesomeIcon icon={faYoutube} color="#FF0000" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" 
                        rel="nonreferrer" 
                        href='https://github.com/me50/ubbarrah'>
                            <FontAwesomeIcon icon={faGithub} color="#fff" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" 
                        rel="nonreferrer" 
                        href='https://www.linkedin.com/in/ugorji-barrah-38b599266/'>
                            <FontAwesomeIcon icon={faLinkedin} color="#0e76a8" />
                        </a>

                    </li>
                    <li>
                        <a target="_blank" 
                        rel="nonreferrer" 
                        href='skype:live:.cid.808b1cd39eaefc4'>
                            <FontAwesomeIcon icon={faSkype} color="#00aff0" />
                        </a>
                    </li>

                </ul>
            </div>
        </div>

    );

}

export default Bottombar;