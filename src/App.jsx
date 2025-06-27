
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar';
import Header from './components/Header';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Review from './components/Review';
import Footer from './components/Footer';
import Trainers from './components/Trainers';
import Program from './components/Program';
import JoinOurProgram from './pages/JoinOurProgram';
import About from './pages/About';
import TrainerDetails from './pages/TrainerDetails';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Program />
              <Classes />   
              <Trainers />
              <Pricing />
              <Review />
            </>
          }
        />

        

        <Route path="/about" element={<About />} />
        <Route path="/trainer-details/:id/:name" element={<TrainerDetails />} />
        <Route path="/join-program" element={<JoinOurProgram />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
