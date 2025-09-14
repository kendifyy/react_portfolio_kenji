import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import KenjiPic from '../assets/images/kenn.jpg'; 


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={KenjiPic} alt="Avatar" />  {/* ✅ use imported image */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kendifyy" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/kenji-izon-cruses-90a341298/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://www.facebook.com/kenji.cruses.31" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
          </div>

          <h1>Kenji Izon Cruses</h1>
          <p>Junior Web & Software Developer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/kendifyy" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kenji-izon-cruses-90a341298/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.facebook.com/kenji.cruses.31" target="_blank" rel="noreferrer"><FacebookIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;