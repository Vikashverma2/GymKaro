import React from "react";

import TrainerData from "../data/TrainerData";
import { useNavigate } from "react-router-dom";


const Trainers = () => {
  const navigate = useNavigate();
  return (
    <div id="trainers" className="trainer-section">
      <h2 className="trainer-title">Meet Our Expert Trainers</h2>
      <div className="trainer-grid">
        {TrainerData.map((trainer) => (
          <div
            key={trainer.id}
            className="trainer-card"
            onClick={() => {
              navigate(`/trainer-details/${trainer.id}/${trainer.name}`);
            }}
          >
            <div className="card-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>
            <div className="card-content">
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
