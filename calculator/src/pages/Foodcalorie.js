import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  HStack,
  Heading,
} from "@chakra-ui/react";

const FoodCalorie = () => {
  const [food, setFood] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const fetchNutrition = async () => {
    const appId = "7247c6f1";
    const appKey = "75d5eeac2a4626bde64643e91f862842";
    const url = "https://trackapi.nutritionix.com/v2/natural/nutrients";

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": appId,
        "x-app-key": appKey,
      },
      body: JSON.stringify({ query: food }),
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.foods.length > 0) {
        const foodData = {
          name: data.foods[0].food_name,
          serving_qty: data.foods[0].serving_qty,
          serving_unit: data.foods[0].serving_unit,
          calories: data.foods[0].nf_calories.toFixed(2)
        };
        setFoodItems([...foodItems, foodData]);
        setFood("");
        setError(null);
      } else {
        setError("Food not found. Please try another search.");
      }
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
      setError("Error fetching nutrition data. Please try again later.");
    }
  };

  const handleAddFood = () => {
    if (food) {
      fetchNutrition();
    }
  };

  const handleDeleteFood = (index) => {
    const updatedItems = [...foodItems];
    updatedItems.splice(index, 1);
    setFoodItems(updatedItems);
  };

  const handleCalculateTotalCalories = () => {
    let totalCalories = 0;
    foodItems.forEach((item) => {
      totalCalories += parseFloat(item.calories);
    });
    setResult(totalCalories.toFixed(2));
  };

  return (
    <Box p={8} bg="background.100" minHeight="100vh">
      <Heading mb={4}>Food Calorie Calculator</Heading>
      <Text mb={6}>
        Track your daily calorie intake with our Food Calorie Calculator. Enter
        food items to view nutritional details and manage your diet effectively.
      </Text>

      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxWidth="700px"
        mx="auto"
      >
        <VStack spacing={4}>
          <HStack>
            <Input
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="Enter a food item"
            />
            <Button colorScheme="green" onClick={handleAddFood}>
              Add
            </Button>
          </HStack>
          {error && <Text color="red.500">{error}</Text>}
          <Box w="100%">
            {foodItems.map((item, index) => (
              <Box
                key={index} // Added key prop for each dynamically rendered component
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="sm"
                mb={2}
                position="relative"
              >
                <Button
                  position="absolute"
                  top="4px"
                  right="4px"
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleDeleteFood(index)}
                >
                  Delete
                </Button>
                <Text fontSize="xl" fontWeight="bold">
                  {item.name}
                </Text>
                <Text>
                  Serving: {item.serving_qty} {item.serving_unit}
                </Text>
                <Text>Calories: {item.calories} kcal</Text>
              </Box>
            ))}
          </Box>
          {foodItems.length > 0 && (
            <>
              <Button
                colorScheme="green"
                onClick={handleCalculateTotalCalories}
              >
                Calculate Total Calories
              </Button>
              {result && (
                <Text mt={4} fontSize="lg" fontWeight="bold">
                  Total Calories: {result} kcal
                </Text>
              )}
            </>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default FoodCalorie;
