import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/portifolio face.jpg')} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Tazrian08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tazrian08" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Tazrian Hossain</h1>
          <p>Full Stack Engineer | Research Enthusiat | Python and Java Instructor</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Tazrian08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tazrian08" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;