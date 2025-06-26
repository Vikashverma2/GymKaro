import React, { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Nitish Kumar",
    review: "This gym transformed my life! Trainers are super supportive and the equipment is top-notch.",
  },
  {
    id: 2,
    name: "Sneha Mehra",
    review: "I love the energy here — intense group classes make workouts fun, challenging, and super effective!",
  },
  {
    id: 3,
    name: "Vikash Verma",
    review: "Clean, professional, and highly motivating environment — truly the best and most inspiring gym in town!",
  },
  {
    id: 4,
    name: "Nisha Gupta",
    review: "Nutrition tips and personalized workouts helped me get fit quickly with visible and lasting results.",
  },
  {
    id: 5,
    name: "Vikram Kumar",
    review: "Excellent trainers and personalized workout routines. I'm seeing results already!",
  },
  {
    id: 6,
    name: "Priya Sharma",
    review: "Love the flexible workout schedules, modern equipment, and overall convenience this gym provides every day.",
  },
  {
    id: 7,
    name: "Karan Malhotra",
    review: "Friendly staff, great crowd, and clean space make this gym totally worth every visit.",
  },
  {
    id: 8,
    name: "Anjali Mehta",
    review: "Great atmosphere and very motivating trainers. Highly recommend this gym to all!",
  }
];

const GymReview = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="gym-review-container">
      <h2>What Our Members Say</h2>
      <div className="gym-review-card">
        <p className="gym-review-text">"{reviews[index].review}"</p>
        <p className="gym-review-author">— {reviews[index].name}</p>
        <div className="gym-review-buttons">
          <button onClick={handlePrev}><FaChevronLeft /></button>
          <button onClick={handleNext}><FaChevronRight /></button>
        </div>
      </div>
    </div>
  );
};

export default GymReview;
