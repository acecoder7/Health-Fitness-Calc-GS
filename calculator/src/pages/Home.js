import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import MainCard from '../components/MainCard';

const calculators = [
  { name: 'BMI Calculator', icon: '/icons/bmi.png', link: '/bmi' },
  { name: 'BMR Calculator', icon: '/icons/bmr.png', link: '/bmr' },
  { name: 'Pregnancy Calculator', icon: '/icons/pregnancy.png', link: '/pregnancy' },
  { name: 'Food Calorie Calculator', icon: '/icons/food-calorie.png', link: '/food-calorie' },
  { name: 'Food Intake Calculator', icon: '/icons/food-intake.png', link: '/food-intake' },
];

const Home = () => (
  <Box p={8} bg="background.100">
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {calculators.map((calc) => (
        <MainCard key={calc.name} name={calc.name} icon={calc.icon} link={calc.link} />
      ))}
    </SimpleGrid>
  </Box>
);

export default Home;
