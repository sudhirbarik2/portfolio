import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
  render() {
    

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">

            <a href="https://github.com/sudhirbarik2?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>{"       "}
            <a href="https://www.facebook.com/vicky.barik2" target="_blank" rel="noopener noreferrer"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>{"       "}
            <a href="https://twitter.com/VickyBarik" target="_blank" rel="noopener noreferrer" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>{"       "}
            <a href="https://www.instagram.com/iamvickybarik/?hl=en" target="_blank" rel="noopener noreferrer"
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>{"       "}
            <a href="https://www.linkedin.com/in/sudhir-barik-258862171/" target="_blank" rel="noopener noreferrer"
              className="linkedin social">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>{"       "}

          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}Sudhir Barik {" "}2021
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
