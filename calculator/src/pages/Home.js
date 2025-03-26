import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MainCard from "../components/MainCard";
import healthicon from "../images/cardicon.png";
import bmi from "../images/cicon/bmi.png";
import boll from "../images/cicon/boll.png";
import daily from "../images/cicon/daily.png";
import food from "../images/cicon/food.png";
import menstr from "../images/cicon/menstr.png";
import nutri from "../images/cicon/nutri.png";
import pcos from "../images/cicon/pcos.png";
import preg from "../images/cicon/preg.png";
import prot from "../images/cicon/prot.png";


const calculators = [
  { name: "BMI and Ideal Weight Calculator", icon: bmi, link: "/bmindiw" },
  { name: "Daily Calorie Calculator", icon: daily, link: "/dailycalorie" },
  { name: "Protein Calculator", icon: prot, link: "/protein" },
  {
    name: "Food Calorie Calculator",
    icon: food,
    link: "/food-calorie",
  },
  { name: "Nutrient Calculator", icon: nutri, link: "/nutrient" },
  { name: "Period Calculator", icon: menstr, link: "/period" },
  {
    name: "Pregnancy Calculator",
    icon: preg,
    link: "/pregnancy",
  },
  {
    name: "Explore Nutrients Bowls",
    icon: boll,
    link: "/explore-all",
  },
  {
    name: "Explore Ovaboost Care Bowls",
    icon: pcos,
    link: "/explore-pcos",
  },
  {
    name: "Explore Testosterone Booster Bowls",
    icon: pcos,
    link: "/explore-testt",
  },
  {
    name: "Explore Menopause Bowls",
    icon: pcos,
    link: "/explore-menop",
  },
  {
    name: "Explore Detoxifying Bowls",
    icon: pcos,
    link: "/explore-detox",
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
