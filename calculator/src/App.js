import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BMI from './pages/BMI';
import BMR from './pages/BMR';
import Pregnancy from './pages/Pregnancy';
import Foodcalorie from './pages/Foodcalorie';
import Nutrient from './pages/Nutrient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/bmr" element={<BMR />} />
        <Route path="/pregnancy" element={<Pregnancy />} />
        <Route path="/food-calorie" element={<Foodcalorie />} />
        <Route path="/nutrient" element={<Nutrient />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
