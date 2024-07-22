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
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const ProteinCalc = () => {
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("maintain");
  const [proteinRequirement, setProteinRequirement] = useState("");

  const calculateProtein = () => {
    let weightNum = parseFloat(weight);

    if (weightUnit === "lbs") {
      weightNum = weightNum * 0.453592; // Convert lbs to kg
    }

    let lowerLimit = 0;
    let upperLimit = 0;
    if (goal === "maintain") {
      if (activityLevel === "sedentary") {
        lowerLimit = weightNum * 0.8;
        upperLimit = weightNum * 1.0;
      } else if (activityLevel === "active") {
        lowerLimit = weightNum * 1.0;
        upperLimit = weightNum * 1.2;
      } else if (activityLevel === "athlete") {
        lowerLimit = weightNum * 1.2;
        upperLimit = weightNum * 1.4;
      }
    } else if (goal === "lose") {
      if (activityLevel === "sedentary") {
        lowerLimit = weightNum * 1.2;
        upperLimit = weightNum * 1.2;
      } else if (activityLevel === "active") {
        lowerLimit = weightNum * 1.2;
        upperLimit = weightNum * 1.5;
      } else if (activityLevel === "athlete") {
        lowerLimit = weightNum * 1.5;
        upperLimit = weightNum * 1.7;
      }
    } else if (goal === "gain") {
      if (activityLevel === "sedentary") {
        lowerLimit = weightNum * 1.2;
        upperLimit = weightNum * 1.2;
      } else if (activityLevel === "active") {
        lowerLimit = weightNum * 1.5;
        upperLimit = weightNum * 1.5;
      } else if (activityLevel === "athlete") {
        lowerLimit = weightNum * 1.7;
        upperLimit = weightNum * 1.7;
      }
    }

    setProteinRequirement(
      `${lowerLimit.toFixed(2)} - ${upperLimit.toFixed(2)}`
    );
  };

  return (
    <Box bg="background.100" p={8} minHeight="100vh">
      <Heading mb={4}>Protein Calculator</Heading>
      <Text mb={6}>Calculate your Protein Intake based on your goals.</Text>
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxWidth="700px"
        mx="auto"
      >
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

          <FormControl id="activity-level">
            <FormLabel>Activity Level</FormLabel>
            <Select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="active">
                Active (light exercise 1-3 days/week)
              </option>
              <option value="athlete">
                Athlete (moderate to intense exercise 4-6 days/week)
              </option>
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

          <Button colorScheme="green" onClick={calculateProtein}>
            Calculate
          </Button>

          {proteinRequirement && (
            <Text mt={4} fontSize="lg" fontWeight="bold">
              Your daily protein requirement is {proteinRequirement} grams.
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default ProteinCalc;
