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
  Divider,
  useBreakpointValue,
  Flex,
  Img,
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

    if (lowerLimit === upperLimit) {
      setProteinRequirement(`${lowerLimit.toFixed(2)}`);
    } else {
      setProteinRequirement(
        `${lowerLimit.toFixed(2)} - ${upperLimit.toFixed(2)}`
      );
    }
  };

  return (
    <Box p={8} minHeight="100vh" bg="background.100">
      {/* Protein Calculator Section */}
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
            <Flex align="center">
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                mr={2}
              />
              <Select
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
                width="auto"
              >
                <option value="kg">Kilograms (kg)</option>
                <option value="lbs">Pounds (lbs)</option>
              </Select>
            </Flex>
          </FormControl>

          <FormControl id="height">
            <FormLabel>Height</FormLabel>
            <Flex align="center">
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                mr={2}
              />
              <Select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
                width="auto"
              >
                <option value="cm">Centimeters (cm)</option>
                <option value="inches">Inches (in)</option>
                <option value="feet">Feet (ft)</option>
              </Select>
            </Flex>
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
            <Box mt={4} p={4} bg="green.50" borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold">
                Your daily protein requirement is {proteinRequirement} grams.
              </Text>
              <Button
                mt={4}
                colorScheme="blue"
                as="a"
                href="/explore-protein"
                target="_self"
              >
                Explore Protein
              </Button>
            </Box>
          )}
        </VStack>
      </Box>

      <Divider my={8} borderColor="gray.400" />

      {/* Blog-Like Content Section with Image */}
      <Box mt={8} maxWidth="1200px" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <Box flex="1" mr={{ base: 0, md: 4 }}>
            <Text mb={4}>
              Ensuring your body develops properly requires consuming the right
              amount of protein. Intake of protein less or excess than the
              required amount can lead to issues. So how do you know how much
              protein your body requires? That's where the protein calculator
              can help! It's especially useful in achieving fitness goals and
              addressing health problems related to the kidneys and muscles,
              where keeping an eye on protein intake becomes critical.
            </Text>
          </Box>
          <Box flex="1" display="flex" justifyContent="center">
            <Img
              src="path/to/protein-illustration.svg" // Replace with your image path
              alt="Protein Intake"
              maxWidth="100%"
              height="auto"
            />
          </Box>
        </Flex>
        <Text mt={6}>
          A Protein calculator takes into account various factors such as
          weight, height, age, your activity level, and your fitness goals to
          determine your daily protein need. The goal here is to give you a
          personalized recommendation, usually in grams, to help you align your
          diet with your specific health or fitness goals.
        </Text>
        <Text mt={4}>
          <strong>HOW TO USE PROTEIN CALCULATOR?</strong>
          <br />
          Before using the protein calculator, it’s important to understand how
          much protein is needed daily. The recommended dietary allowance (RDA)
          suggests consuming 0.8 grams of protein per kilogram of body weight or
          0.36 grams per pound. Here are the steps to follow:
        </Text>
        <Text mt={2}>
          <strong>1. Input the Details</strong>
          <br />
          Enter your weight (in kg or lbs), height (in cm or feet), and age in
          the calculator.
        </Text>
        <Text mt={2}>
          <strong>2. Determine Your Activity Level</strong>
          <br />
          Select any of the following activity levels:
          <br />
          - Sedentary (little or no exercise)
          <br />
          - Active (light exercise 1-3 days/week)
          <br />- Athlete (moderate to intense exercise 4-6 days/week)
        </Text>
        <Text mt={2}>
          <strong>3. Specify Your Goal</strong>
          <br />
          There are three kinds of goals:
          <br />
          - Maintain Weight: Focuses on meeting nutritional requirements without
          surplus or deficit of calories.
          <br />
          - Lose Weight: Involves a calorie deficit diet.
          <br />- Gain Weight: Involves increasing protein intake for muscle
          growth and overall weight increase.
        </Text>
        <Text mt={2}>
          <strong>4. Calculate Your Protein Need</strong>
          <br />
          Once all the information is entered, the calculator will provide you
          with your daily protein requirement.
        </Text>
        <Text mt={4} fontWeight="bold" color="green.500">
          NOW YOU CAN EXPLORE OUR PROTEIN BOWLS!!
        </Text>
        <Stack spacing={4} mt={6} direction="row" justify="center">
          <Button
            colorScheme="teal"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "xl",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            transition="all 0.2s ease-in-out"
          >
            Calculate Your Protein Requirement
          </Button>

          <Button
            colorScheme="teal"
            as="a"
            href="/explore-protein"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "xl",
              backgroundColor: "teal.600",
            }}
            _active={{
              transform: "scale(0.98)",
            }}
            transition="all 0.2s ease-in-out"
          >
            Explore The Protein Bowls
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProteinCalc;
