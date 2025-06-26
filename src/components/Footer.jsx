import React from "react";
import logo from "../assets/gymkaro.png"; // Assuming the logo is in the assets folder
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="logo">
            <img src={logo} alt="" />
          </h2>
          <p>
            Car Street 1st Cross, Halasuru <br />
            Bengaluru, Karnataka, 560008
          </p>
          <div className="footer-socials">
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
            <span><FaTwitter /></span>
          </div>
        </div>

       <div className="footer-links">
  <div>
    <h4>Company</h4>
    <ul>
      <li><a href="#">Business</a></li>
      <li><a href="#">Franchise</a></li>
      <li><a href="#">Partnership</a></li>
      <li><a href="#">Network</a></li>
    </ul>
  </div>

  <div>
    <h4>About Us</h4>
    <ul>
      <li><a href="#">Blogs</a></li>
      <li><a href="#">Security</a></li>
      <li><a href="#">Careers</a></li>
    </ul>
  </div>

  <div>
    <h4>Contact</h4>
    <ul>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Fitclub Swags</a></li>
    </ul>
  </div>
</div>
</div>


      <div className="footer-bottom">
        <p>Copyright © 2025 <a href="https://github.com/Vikashverma2" target="_blank" rel="noopener noreferrer"> Vikash Verma</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
