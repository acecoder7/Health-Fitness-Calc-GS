import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MainCard from "../components/MainCard";
import healthicon from "../images/cardicon.png";

const calculators = [
  { name: "BMI Calculator", icon: healthicon, link: "/bmi" },
  { name: "BMR Calculator", icon: healthicon, link: "/bmr" },
  {
    name: "Pregnancy Calculator",
    icon: healthicon,
    link: "/pregnancy",
  },
  {
    name: "Food Calorie Calculator",
    icon: healthicon,
    link: "/food-calorie",
  },
  {
    name: "Calorie Intake Calculator",
    icon: healthicon,
    link: "/calorie-intake",
  },
  { name: "Nutrient Calculator", icon: healthicon, link: "/nutrient" },
  { name: "Period Calculator", icon: healthicon, link: "/period" },
  {
    name: "Ideal Weight Calculator",
    icon: healthicon,
    link: "/ideal-weight",
  },
  {
    name: "Body Fat Calculator",
    icon: healthicon,
    link: "/body-fat",
  },
  { name: "GFR Calculator", icon: healthicon, link: "/gfr" },
  { name: "TDEE Calculator", icon: healthicon, link: "/tdee" },
];

const Home = () => (
  <Box p={8} bg="background.100">
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {calculators.map((calc) => (
        <MainCard
          key={calc.name}
          name={calc.name}
          icon={calc.icon}
          link={calc.link}
        />
      ))}
    </SimpleGrid>
  </Box>
);

export default Home;
