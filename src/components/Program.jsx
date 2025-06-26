import React from "react";
import { FaDumbbell, FaHeart, FaRunning, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";


const programs = [
  {
    icon: <FaDumbbell />,
    title: "Strength",
    description:
      "Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.",
  },
  {
    icon: <FaHeart />,
    title: "Physical Fitness",
    description:
      "It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.",
  },
  {
    icon: <FaRunning />,
    title: "Fat Lose",
    description:
      "Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.",
  },
  {
    icon: <FaShoppingBag />,
    title: "Weight Gain",
    description:
      "Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.",
  },
];

const Program = () => {
  return (
    <section id="program" className="program-section">
      <div className="program-header">
        <h2>EXPLORE OUR <span>PROGRAM</span></h2>
       
      </div>
      <div className="program-grid">
        {programs.map((item, index) => (
          <div className="program-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link className="program-link" to="/join-program">Join Now →</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
