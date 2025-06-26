import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrainersData from "../data/TrainerData";
import "./TrainerDetails.css"; 
const TrainerDetails = () => {
  const { id } = useParams();
  const trainerId = parseInt(id);

  const [trainerDetails, setTrainerDetails] = useState(null);
  const [ratingNumber, setRatingNumber] = useState(0);
  useEffect(() => {
    console.log(`Fetching details for trainer with ID: ${trainerId}`);
    getTrainerDetails(trainerId);
    getRatingNumber();
  });

  const getTrainerDetails = (id) => {
    var trainer = TrainersData.find((e) => e.id === trainerId);
    console.log(`Trainer Details: ${JSON.stringify(trainer)}`);
    setTrainerDetails(trainer);
  };
  const totalStars = 5;
  const getRatingNumber = () => {
    var rating = parseInt(trainerDetails?.rating ?? 0);
    setRatingNumber(rating);
    console.log(`Rating: ${rating}`);
  };
  return (
   <div className="trainer-details">
    <div className="trainer-details-container">
  <h2 className="trainer-title">Trainer Details</h2>

  <div className="trainer-details-card">
    <img src={trainerDetails?.image} alt={trainerDetails?.name} className="trainer-image" />
    <div className="trainer-info">
      <h3>{trainerDetails?.name}</h3>
      <p><strong>Specialty:</strong> {trainerDetails?.specialty}</p>
      <p><strong>Experience:</strong> {trainerDetails?.experience} years</p>
      <p className="trainer-description">{trainerDetails?.des}</p>
      <div className="trainer-rating">
        {Array.from({ length: totalStars }, (_, index) => (
          <span key={index}>{index < ratingNumber ? "★" : "☆"}</span>
        ))}
        <span className="reviews-text">({trainerDetails?.reviews} reviews)</span>
      </div>
    </div>
  </div>
</div>
   </div>

  );
};

export default TrainerDetails;
