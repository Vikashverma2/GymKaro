


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join.css';
import joinImage from '../assets/gym3.svg'; // Ensure image is in the correct path

const JoinOurProgram = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    plan: 'basic',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.goal) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', goal: '', plan: 'basic' });

    setTimeout(() => {
      setSubmitted(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="join-container">
      <div className="join-form-wrapper">
         <div className="join-image-wrapper">
        <img src={joinImage} alt="Join Gym" />
      </div>
        <form className="join-form" onSubmit={handleSubmit}>
          <h2>Welcome 👋</h2>
          <p>Please enter your details and start your fitness journey!</p>

          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <textarea name="goal" rows="3" placeholder="Your Fitness Goal" value={formData.goal} onChange={handleChange}></textarea>

          <select name="plan" value={formData.plan} onChange={handleChange}>
            <option value="basic">Basic - ₹999/month</option>
            <option value="premium">Premium - ₹1499/month</option>
            <option value="pro">Pro - ₹1999/month</option>
          </select>

          <button type="submit" className="join-btn">Join Now</button>
          {submitted && <p className="success">🎉 You’ve successfully joined!</p>}
        </form>
    

      
      </div>

      
    </div>
  );
};

export default JoinOurProgram;
