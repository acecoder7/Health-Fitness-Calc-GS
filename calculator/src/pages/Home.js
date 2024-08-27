import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MainCard from "../components/MainCard";
import healthicon from "../images/cardicon.png";

const calculators = [
  { name: "BMI and Ideal Weight Calculator", icon: healthicon, link: "/bmindiw" },
  { name: "Daily Calorie Calculator", icon: healthicon, link: "/dailycalorie" },
  { name: "Protein Calculator", icon: healthicon, link: "/protein" },
  {
    name: "Food Calorie Calculator",
    icon: healthicon,
    link: "/food-calorie",
  },
  { name: "Nutrient Calculator", icon: healthicon, link: "/nutrient" },
  { name: "Period Calculator", icon: healthicon, link: "/period" },
  {
    name: "Pregnancy Calculator",
    icon: healthicon,
    link: "/pregnancy",
  },
  {
    name: "Explore Nutrients Bowls",
    icon: healthicon,
    link: "/explore-all",
  },
  {
    name: "Explore PCOS Bowls",
    icon: healthicon,
    link: "/explore-pcos",
  },
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
