import React from "react";
import playstore from "../../../images/playstore.png";
import Appstore from "../../../images/Appstore.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4><br/>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={Appstore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; SONI</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4><br></br>
        <a href="https://github.com/soni0611"> <GitHubIcon  /> &nbsp;Github</a>
        <a href="https://www.linkedin.com/in/shivam--soni/"> <LinkedInIcon  /> &nbsp;Linkedin</a>
        <a href="https://www.instagram.com/soni_007_/">  <InstagramIcon  /> &nbsp;Instagram</a>
   
       
      </div>
    </footer>
  );
};

export default Footer;
