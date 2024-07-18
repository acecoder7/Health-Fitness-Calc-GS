import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  HStack,
  Heading,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

const NutrientCalculator = () => {
  const [food, setFood] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [foodItem, setFoodItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (query) => {
    const appId = "7247c6f1";
    const appKey = "75d5eeac2a4626bde64643e91f862842";
    const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}&common=true`;

    const config = {
      method: "GET",
      headers: {
        "x-app-id": appId,
        "x-app-key": appKey,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      console.log("Suggestions fetched:", data.common);
      setSuggestions(data.common || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const fetchNutrition = async (foodName) => {
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
      body: JSON.stringify({ query: foodName }),
    };

    try {
      setLoading(true);
      const response = await fetch(url, config);
      setLoading(false);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Nutrition data fetched:", data.foods[0]);

      if (data.foods.length > 0) {
        const foodData = data.foods[0];
        setFoodItem(foodData);
        setFood("");
        setSuggestions([]);
        setError(null);
      } else {
        setError("Food not found. Please try another search.");
      }
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
      setError("Error fetching nutrition data. Please try again later.");
      setLoading(false);
    }
  };

  const handleSearchFood = () => {
    if (food) {
      fetchNutrition(food);
    }
  };

  useEffect(() => {
    if (food.length > 1) {
      fetchSuggestions(food);
    } else {
      setSuggestions([]);
    }
  }, [food]);

  const handleSuggestionClick = (suggestion) => {
    setFood(suggestion.food_name);
    setSuggestions([]);
  };

  return (
    <Box p={8} bg="gray.100" minHeight="100vh">
      <Heading mb={4}>Nutrient Calculator</Heading>
      <Text mb={6}>
        Search for a food item to view detailed nutritional information.
      </Text>

      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxWidth="700px"
        mx="auto"
        position="relative"
      >
        <VStack spacing={4} align="stretch">
          <HStack width="100%" position="relative">
            <Input
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="Enter a food item"
              width="100%"
              zIndex="1"
            />
            <Button colorScheme="blue" onClick={handleSearchFood}>
              Search
            </Button>
            {loading && <Spinner size="sm" ml={4} />}
          </HStack>
          {suggestions.length > 0 && (
            <List
              position="absolute"
              top="calc(100% + 4px)"
              left="0"
              width="100%"
              bg="white"
              border="1px solid #ddd"
              borderRadius="md"
              boxShadow="md"
              zIndex="2"
              maxHeight="200px"
              overflowY="auto"
            >
              {suggestions.map((suggestion, index) => (
                <ListItem
                  key={index}
                  p={2}
                  borderBottom="1px solid #ddd"
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.food_name}
                </ListItem>
              ))}
            </List>
          )}
          {error && <Text color="red.500">{error}</Text>}
          {foodItem && (
            <Box w="100%" p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading size="md" mb={2}>{foodItem.food_name}</Heading>
              <Text>Serving: {foodItem.serving_qty} {foodItem.serving_unit}</Text>
              <Text>Calories: {foodItem.nf_calories.toFixed(2)} kcal</Text>
              <Text>Protein: {foodItem.nf_protein.toFixed(2)} g</Text>
              <Text>Carbohydrates: {foodItem.nf_total_carbohydrate.toFixed(2)} g</Text>
              <Text>Fats: {foodItem.nf_total_fat.toFixed(2)} g</Text>
              <Text>Sugars: {foodItem.nf_sugars.toFixed(2)} g</Text>
              <Text>Fiber: {foodItem.nf_dietary_fiber.toFixed(2)} g</Text>
              <Text>Sodium: {foodItem.nf_sodium.toFixed(2)} mg</Text>
              <Text>Potassium: {foodItem.nf_potassium.toFixed(2)} mg</Text>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default NutrientCalculator;
