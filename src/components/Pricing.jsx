import React from "react";
import { Link } from 'react-router-dom';


import { FaCheckCircle } from "react-icons/fa";

const pricingData = [
  {
    title: "Basic Plan",
    price: "₹999",
    duration: "/month",
    features: ["Smart workout plan", "At home workouts"],
    popular: false,
  },
  {
    title: "Weekly Plan",
    price: "₹1499",
    duration: "/month",
    features: ["PRO Gyms", "Smart workout plan", "At home workouts"],
    popular: true,
  },
  {
    title: "Monthly Plan",
    price: "₹1999",
    duration: "/month",
    features: [
      "ELITE Gyms & Classes",
      "PRO Gyms",
      "Smart workout plan",
      "At home workouts",
      "Personal Training",
    ],
    popular: false,
  },
];

const PricingPlans = () => {
  return (
    <div id="pricing" className="pricing-container">
      <h2 className="pricing-heading">Our Pricing Plan</h2>
      <p className="pricing-desc">
        Choose a plan that fits your fitness goals and level of commitment.
      </p>

      <div className="pricing-grid">
  {pricingData.map((plan, index) => (
    <div
      className={`pricing-card ${plan.popular ? "popular-card" : ""}`}
      key={index}
    >
      {plan.popular && <div className="badge">Most Popular</div>}

    
      <div className="card-body">
        <h3>{plan.title}</h3>
        <p className="price">
          {plan.price}
          <span className="duration">{plan.duration}</span>
        </p>
        <hr />
        <ul className="features">
          {plan.features.map((feature, i) => (
            <li key={i}>
              <FaCheckCircle className="check-icon" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer">
        <Link to="/join-program" className="join-button">Join Now</Link>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default PricingPlans;
