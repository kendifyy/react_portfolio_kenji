import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <footer>
      <div>
      
            <a href="https://github.com/kendifyy" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kenji-izon-cruses-90a341298/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.facebook.com/kenji.cruses.31" target="_blank" rel="noreferrer"><FacebookIcon/></a>
          </div>
      
    </footer>
  );
}

export default Footer;