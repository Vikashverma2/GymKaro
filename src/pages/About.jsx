



import React from "react";
import gym2 from "../assets/gym2.svg";
import "./About.css"; // Assuming you have a CSS file for styling

import { FaDumbbell, FaUsers, FaClock, FaHeartbeat } from "react-icons/fa";

const features = [
  {
    icon: <FaDumbbell />,
    title: "Top Equipment",
    desc: "Train with the latest machines and premium equipment.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Trainers",
    desc: "Certified trainers dedicated to your personal goals.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Timings",
    desc: "Open 7 days a week, early morning to late night.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Personalized Plans",
    desc: "Customized workout & diet plans tailored for you.",
  },
];

const About = () => {
  return (
    <> <hr />
    <div className="why-section">
     
       <h2 className="section-header">WHY JOIN US ?</h2>
      <p className="section-subtext">
        Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.
      </p>

      <div className="why-image-container">
        <img src={gym2} alt="Workout" />
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default About;








