import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Edution from "./components/Education";
class App extends Component {

  constructor(props) {
    super();
    this.state = {
      paths:`res_primaryLanguage.json`,
      foo: "bar",
      resumeData: {},
      sharedData: {},
      educationData:{},
      status:false
    };
  }
 

  componentDidMount() {
    this.loadSharedData();
    this.loadResumeFromPath();
    this.loadEducation();
 
  }

  loadResumeFromPath() {
    
    $.ajax({
      url: `res_primaryLanguage.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }
  loadEducation() {
    $.ajax({
      url: `education.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        // console.log("test");
        // console.log(data.education);
        this.setState({ educationData: data.education.educationInfo });
        this.setState({status:true})
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }
  render() {
      return (
        this.state.status?
        <div>
          
          <Header/>
          
          <About/>
          <Projects
            resumeProjects={this.state.resumeData.projects}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Skills
            sharedSkills={this.state.sharedData.skills}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Edution educationData={this.state.educationData}/>
          <Experience
            resumeExperience={this.state.resumeData.experience}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>:""
      );
    
  }
}

export default App;
