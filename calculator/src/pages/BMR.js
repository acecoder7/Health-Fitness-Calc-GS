import React, { useState } from 'react';
import { Box, Button, Heading, FormControl, FormLabel, Input, Select, VStack, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react';

const BMRCalculator = () => {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    let weightInKg = parseFloat(weight);
    let heightInCm = parseFloat(height);

    if (weightUnit === 'lbs') {
      weightInKg = weightInKg * 0.453592; // Convert lbs to kg
    }

    if (heightUnit === 'inches') {
      heightInCm = heightInCm * 2.54; // Convert inches to cm
    } else if (heightUnit === 'feet') {
      heightInCm = heightInCm * 30.48; // Convert feet to cm
    }

    let bmrValue;
    if (gender === 'male') {
      bmrValue = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * age);
    } else {
      bmrValue = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * age);
    }
    setBmr(bmrValue.toFixed(2));
  };

  return (
    <Box bg="background.100" p={8} minHeight="100vh">
      <Heading mb={4}>BMR Calculator</Heading>
      <Text mb={6}>Calculate your Basal Metabolic Rate (BMR) to understand your daily calorie needs.</Text>
      <Box bg="white" p={8} borderRadius="md" boxShadow="lg" maxWidth="700px" mx="auto">
        <VStack spacing={4}>
          <FormControl id="gender">
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
              <Stack direction="row">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl id="weight">
            <FormLabel>Weight</FormLabel>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
            <Select mt={2} value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
              <option value="kg">Kilograms (kg)</option>
              <option value="lbs">Pounds (lbs)</option>
            </Select>
          </FormControl>

          <FormControl id="height">
            <FormLabel>Height</FormLabel>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
            <Select mt={2} value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
              <option value="cm">Centimeters (cm)</option>
              <option value="inches">Inches (in)</option>
              <option value="feet">Feet (ft)</option>
            </Select>
          </FormControl>

          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />
          </FormControl>

          <Button colorScheme="green" onClick={calculateBMR}>
            Calculate BMR
          </Button>

          {bmr && (
            <Text mt={4} fontSize="lg" fontWeight="bold">
              Your BMR is: {bmr} kcal/day
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default BMRCalculator;
