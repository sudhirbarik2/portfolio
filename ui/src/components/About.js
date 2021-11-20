import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import SocialLinks from "./SocialLinks";
import { Card, Col, Row, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
class About extends Component {
  render() {

    var profilepic = "images/myProfile.jpg" ;
    var sectionName = ""
      var hello = "Hi";
      var about = "👋 I'm Sudhir Barik. A passionate Full Stack Web Developer having an experience of building scalable Web applications with JavaScript / Reactjs / Angular / Nodejs / Express JS / MongoDB and some other cool libraries and frameworks and Cross Platform Web applications "
    

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="420px"
                    src={profilepic}
                    alt="dp"
                    border-radius= '50%'
                  />
                  
                  
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header buttons-align">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "172%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <SocialLinks/>
                    <div class="btn-wrapper my-4"><a href="https://drive.google.com/file/d/1jX8zAfGH16GWE3MGUBY22tOqPj3-CpVt/view?usp=sharing" class="btn-white btn-icon mb-3 mb-sm-0 ml-1 btn btn-default"><span class="btn-inner--icon mr-1"><i class="fa fa-file"></i></span><span class="btn-inner--text">See My Resume</span></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
