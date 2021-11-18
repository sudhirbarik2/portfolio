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
        <div>
            <header>
                <div class="container">

                    <div class="nav">
                        <div/>
                        <div class="nav1">
                            <a href="../index.html">
                                
                                <h2 class="text-white" id="nav-title"><img src="SB_LOGO_Header.ico"></img>Sudhir Barik</h2>
                            </a>
                        </div>
                        <div class="nav2 navbar-main navbar-transparent navbar-light headroom navbar navbar-expand-lg headroom--not-bottom headroom--pinned headroom--top">
                            <a href="https://github.com/sudhirbarik2?tab=repositories" target="_blank"
                                className="github social">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/vicky.barik2" target="_blank"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://twitter.com/VickyBarik"  target="_blank" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/iamvickybarik/?hl=en" target="_blank"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/sudhir-barik-258862171/" target="_blank"
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
