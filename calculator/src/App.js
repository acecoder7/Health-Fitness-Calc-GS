import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BMIndIW from './pages/BMIndIW';
import DailyCalorie from './pages/DailyCalorie';
import Pregnancy from './pages/Pregnancy';
import Foodcalorie from './pages/Foodcalorie';
import Nutrient from './pages/Nutrient';
import TDEE from './pages/TDEE';
import Period from './pages/Period';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmindiw" element={<BMIndIW />} />
        <Route path="/dailycalorie" element={<DailyCalorie />} />
        <Route path="/pregnancy" element={<Pregnancy />} />
        <Route path="/food-calorie" element={<Foodcalorie />} />
        <Route path="/nutrient" element={<Nutrient />} />
        <Route path="/tdee" element={<TDEE />} />
        <Route path="/period" element={<Period />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
