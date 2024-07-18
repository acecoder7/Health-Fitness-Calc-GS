import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Text,
} from "@chakra-ui/react";

const TDEECalc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
    const [tdee, setTdee] = useState(null);
    

  const calculateTDEE = () => {
    let weightInKg = parseFloat(weight);
    let heightInCm = parseFloat(height);
    let ageInYears = parseInt(age);

    if (weightUnit === "lbs") {
      weightInKg = weightInKg * 0.453592;
    }

    if (heightUnit === "inches") {
      heightInCm = heightInCm * 2.54;
    } else if (heightUnit === "feet") {
      heightInCm = heightInCm * 30.48;
    }

    let bmr;
    if (gender === "male") {
      bmr =
        88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * ageInYears;
    } else {
      bmr =
        447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.33 * ageInYears;
    }

    const activityMultipliers = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9,
    };

    const tdeeValue = bmr * activityMultipliers[activityLevel];
    setTdee(tdeeValue.toFixed(2));
  };

  const handleCalculate = () => {
    calculateTDEE();
  };

  return (
    <Box bg="background.100" p={8}>
      <Heading mb={6}>TDEE Calculator</Heading>
      <Text mb={6}>
        Welcome to the TDEE Calculator. Please enter your details below to
        calculate your Body Mass Index (BMI) and better understand your health
        status.
      </Text>
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxWidth="700px"
        mx="auto"
        mb={8}
      >
        <VStack spacing={4}>
          <FormControl id="gender">
            <FormLabel>Gender</FormLabel>
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>

          <FormControl id="weight">
            <FormLabel>Weight</FormLabel>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
            <Select
              mt={2}
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
            >
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
            <Select
              mt={2}
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
            >
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

          <FormControl id="activityLevel">
            <FormLabel>Activity Level</FormLabel>
            <Select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="lightlyActive">
                Lightly active (light exercise/sports 1-3 days/week)
              </option>
              <option value="moderatelyActive">
                Moderately active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="veryActive">
                Very active (hard exercise/sports 6-7 days/week)
              </option>
              <option value="extraActive">
                Extra active (very hard exercise/sports and physical job)
              </option>
            </Select>
          </FormControl>

          <Button colorScheme="green" onClick={handleCalculate}>
            Calculate
          </Button>

          {tdee && (
            <Text mt={4} fontSize="lg" fontWeight="bold">
              Your TDEE is: {tdee} calories/day
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default TDEECalc;
