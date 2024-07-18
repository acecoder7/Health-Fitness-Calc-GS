import React, { useState } from 'react';
import { Box, Button, Heading, FormControl, FormLabel, Input, Select, VStack, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react';

const DailyCalorieCalc = () => {
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [goal, setGoal] = useState('maintain');
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [calorieIntake, setCalorieIntake] = useState(null);

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

    calculateTDEEAndCalories(bmrValue);
  };

  const calculateTDEEAndCalories = (bmrValue) => {
    let activityMultiplier;
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'lightly active':
        activityMultiplier = 1.375;
        break;
      case 'moderately active':
        activityMultiplier = 1.55;
        break;
      case 'very active':
        activityMultiplier = 1.725;
        break;
      case 'super active':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }

    const tdeeValue = bmrValue * activityMultiplier;
    setTdee(tdeeValue.toFixed(2));

    let calorieValue;
    if (goal === 'lose') {
      calorieValue = tdeeValue - 500;
    } else if (goal === 'gain') {
      calorieValue = tdeeValue + 500;
    } else {
      calorieValue = tdeeValue;
    }
    setCalorieIntake(calorieValue.toFixed(2));
  };

  return (
    <Box bg="background.100" p={8} minHeight="100vh">
      <Heading mb={4}>Daily Calorie Calculator</Heading>
      <Text mb={6}>Calculate your Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), and daily calorie needs based on your goals.</Text>
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

          <FormControl id="activity-level">
            <FormLabel>Activity Level</FormLabel>
            <Select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="lightly active">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option value="moderately active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option value="very active">Very active (hard exercise/sports 6-7 days a week)</option>
              <option value="super active">Super active (very hard exercise/physical job & exercise 2x/day)</option>
            </Select>
          </FormControl>

          <FormControl id="goal">
            <FormLabel>Goal</FormLabel>
            <Select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="maintain">Maintain weight</option>
              <option value="lose">Lose weight</option>
              <option value="gain">Gain weight</option>
            </Select>
          </FormControl>

          <Button colorScheme="green" onClick={calculateBMR}>
            Calculate BMR, TDEE, and Daily Calorie Intake
          </Button>

          {bmr && (
            <>
              <Text mt={4} fontSize="lg" fontWeight="bold">
                Your BMR is: {bmr} kcal/day
              </Text>
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Your TDEE is: {tdee} kcal/day
              </Text>
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Your daily calorie intake to {goal === 'lose' ? 'lose weight' : goal === 'gain' ? 'gain weight' : 'maintain weight'} is: {calorieIntake} kcal/day
              </Text>
            </>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default DailyCalorieCalc;
