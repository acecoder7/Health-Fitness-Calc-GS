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

const BMIandIWCalc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [bmi, setBmi] = useState(null);
  const [gender, setGender] = useState("male");
  const [idealWeight, setIdealWeight] = useState(null);


  const calculateBMI = () => {
    let weightInKg = parseFloat(weight);
    let heightInM = parseFloat(height);

    if (weightUnit === "lbs") {
      weightInKg = weightInKg * 0.453592;
    }

    if (heightUnit === "inches") {
      heightInM = heightInM * 0.0254;
    } else if (heightUnit === "feet") {
      heightInM = heightInM * 0.3048;
    } else {
      heightInM = heightInM / 100;
    }

    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue.toFixed(2));
  };

  const calculateIdealWeight = () => {
    let heightInInches = parseFloat(height);

    if (heightUnit === "cm") {
      heightInInches = heightInInches / 2.54;
    } else if (heightUnit === "feet") {
      heightInInches = heightInInches * 12;
    }

    let idealWeightValue;
    if (gender === "male") {
      idealWeightValue = 52 + 1.9 * (heightInInches - 60);
    } else {
      idealWeightValue = 49 + 1.7 * (heightInInches - 60);
    }

    setIdealWeight(idealWeightValue.toFixed(2));
  };



  const handleCalculate = () => {
    calculateBMI();
    calculateIdealWeight();
  };

  return (
    <Box bg="background.100" p={8}>
      <Heading mb={6}>BMI and Ideal Weight Calculator</Heading>
      <Text mb={6}>
        Welcome to the BMI and Ideal Weight Calculator. Please enter your details below to
        calculate your Body Mass Index (BMI) and Ideal Weight to better understand your health
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

          <Button colorScheme="green" onClick={handleCalculate}>
            Calculate
          </Button>

          {bmi && (
            <Text mt={4} fontSize="lg" fontWeight="bold">
              Your BMI is: {bmi}
            </Text>
          )}

          {idealWeight && (
            <Text mt={4} fontSize="lg" fontWeight="bold">
              Your Ideal Weight is: {idealWeight} kg
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default BMIandIWCalc;
