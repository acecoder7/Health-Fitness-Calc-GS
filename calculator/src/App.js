import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BMIndIW from "./pages/BMIndIW";
import DailyCalorie from "./pages/DailyCalorie";
import Pregnancy from "./pages/Pregnancy";
import Foodcalorie from "./pages/Foodcalorie";
import Nutrient from "./pages/Nutrient";
import TDEE from "./pages/TDEE";
import Period from "./pages/Period";
import Protein from "./pages/Protein";
import ExploreProtein from "./pages/ExploreProtein";
import ExplorePregnancy from "./pages/ExplorePregnancy";
import ExploreAll from "./pages/ExploreAll";
import ExplorePCOS from "./pages/ExplorePCOS";
import ExploreTestt from "./pages/ExploreTestt";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <Box bg="background.100" className="app-container">
        <Navbar />
        <Box bg="background.100" as="main" flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bmindiw" element={<BMIndIW />} />
            <Route path="/dailycalorie" element={<DailyCalorie />} />
            <Route path="/pregnancy" element={<Pregnancy />} />
            <Route path="/food-calorie" element={<Foodcalorie />} />
            <Route path="/nutrient" element={<Nutrient />} />
            <Route path="/tdee" element={<TDEE />} />
            <Route path="/period" element={<Period />} />
            <Route path="/protein" element={<Protein />} />
            <Route path="/explore-protein" element={<ExploreProtein />} />
            <Route path="/explore-all" element={<ExploreAll />} />
            <Route path="/explore-pcos" element={<ExplorePCOS />} />
            <Route path="/explore-testt" element={<ExploreTestt />} />
            <Route path="/exp-pregnancy" element={<ExplorePregnancy />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </SidebarProvider>
  );
}

export default App;
