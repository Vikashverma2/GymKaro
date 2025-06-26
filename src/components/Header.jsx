import React from 'react';
import { Link } from 'react-router-dom';

import gym1 from '../assets/gym1.svg'



const Header = () => {
  return (
    <header className="section_container header_container">
      <div className="header_content">
        <span className="bg_blur"></span>
        <span className="bg_blur header_blur"></span>
        <h4>BEST FITNESS IN THE TOWN</h4>
        <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
        <p>
          Unleash your potential and embark on a journey towards a stronger,
          fitter, and more confident you. Sign up for 'Make Your Body Shape' now
          and witness the incredible transformation your body is capable of!
        </p>
        <Link to="/join-program" className="btn">
        Get Started
      </Link>
      </div>
      <div className="header_image">
        <img src={gym1} alt="header" />
      </div>
    </header>
  );
};

export default Header;