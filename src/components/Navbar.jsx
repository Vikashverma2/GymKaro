import React, { useState } from "react";
import logo from "../assets/gymkaro.png";
import { Link } from "react-router-dom"; // ✅ Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav_logo">
       <Link to="/"> <img src={logo} alt="logo" /></Link>
         
        
      </div>

      {/* Toggle icon */}
      <div className="nav_toggle" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

    
      {/* Navigation Links */}
      <ul className={`nav_links ${isOpen ? "show_nav" : ""}`}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <a href="#program">Program</a>
        </li>
        <li className="link">
         <a href="#trainers">Our Trainers</a>
        </li>
        
        <li className="link">
          <a href="#pricing">Our Plan</a>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* ✅ Link styled as button */}
      <Link to="/join-program" className="btn nav_btn">
        Join Now
      </Link>
    </nav>
  );
};

export default Navbar;
