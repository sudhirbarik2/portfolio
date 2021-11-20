import React from "react";

import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from 'react-social-icons';
const SocialLinks = () => {
	return (
		<div className="social-links">
            <SocialIcon url="https://github.com/sudhirbarik2?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="github social">
              
            </SocialIcon>{"       "}
            <SocialIcon url="https://www.facebook.com/vicky.barik2" target="_blank" rel="noopener noreferrer"
              className="facebook social">
              
            </SocialIcon>{"       "}
            <SocialIcon url="https://twitter.com/VickyBarik" target="_blank" rel="noopener noreferrer" className="twitter social">
              
            </SocialIcon>{"       "}
            <SocialIcon url="https://www.instagram.com/iamvickybarik/?hl=en" target="_blank" rel="noopener noreferrer"
              className="instagram social">
              
            </SocialIcon>{"       "}
            <SocialIcon url="https://www.linkedin.com/in/sudhir-barik-258862171/" target="_blank" rel="noopener noreferrer"
              className="linkedin social">
              
            </SocialIcon>{"       "}

          </div>
	);
};

export default SocialLinks;