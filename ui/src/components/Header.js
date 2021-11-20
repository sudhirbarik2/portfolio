import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
function Header() {
    return (
        <div id='header'>
            <header>
                <div class="container">

                    <div class="nav">
                       
                        
                        <div class="nav2 navbar-main navbar-transparent navbar-light headroom navbar navbar-expand-lg headroom--not-bottom headroom--pinned headroom--top">
                            <a href="https://github.com/sudhirbarik2?tab=repositories" target="_blank" rel="noopener noreferrer"
                                className="github social">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/vicky.barik2" target="_blank" rel="noopener noreferrer"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://twitter.com/VickyBarik"  target="_blank" rel="noopener noreferrer" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/iamvickybarik/?hl=en" target="_blank" rel="noopener noreferrer"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/sudhir-barik-258862171/" target="_blank" rel="noopener noreferrer"
                                className="linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <div/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
