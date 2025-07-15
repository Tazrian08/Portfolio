import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Tazrian08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/tazrian08" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:tazrian.hossain08@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://www.facebook.com/DevilCrow08" target="_blank" rel="noreferrer"><FacebookIcon/></a>
        <a href="https://www.instagram.com/__taz.rian__/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>
      <p>Email: tazrian.hossain08@gmail.com</p>
    </footer>
  );
}

export default Footer;