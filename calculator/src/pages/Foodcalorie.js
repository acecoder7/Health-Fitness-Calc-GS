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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const FoodCalorie = () => {
  const [food, setFood] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

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
      setSuggestions(data.common || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

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
      setLoading(true);
      const response = await fetch(url, config);
      setLoading(false);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.foods.length > 0) {
        const foodData = data.foods[0];
        setFoodItems([...foodItems, foodData]);
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

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  const handleCalculateTotalCalories = () => {
    let totalCalories = 0;
    foodItems.forEach((item) => {
      totalCalories += parseFloat(item.nf_calories);
    });
    setResult(totalCalories.toFixed(2));
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
        position="relative"
      >
        <VStack spacing={4} align="stretch">
          <HStack width="100%" position="relative">
            <Input
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="Enter a food item"
              width="100%"
            />
            <Button colorScheme="green" onClick={handleAddFood}>
              Add
            </Button>
            {suggestions.length > 0 && (
              <List
                position="absolute"
                width="100%"
                top="100%"
                left="0"
                bg="white"
                border="1px solid #ddd"
                borderRadius="md"
                boxShadow="md"
                zIndex="1"
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
          </HStack>
          {error && <Text color="red.500">{error}</Text>}
          {Array.isArray(foodItems) && foodItems.length > 0 && (
            <VStack align="stretch">
              {foodItems.map((item, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={4}
                  borderRadius="md"
                  boxShadow="sm"
                  mb={2}
                  position="relative"
                >
                  <HStack justifyContent="space-between" width="100%">
                    <VStack align="start" width="calc(100% - 80px)">
                      <Text fontSize="xl" fontWeight="bold">
                        {item.food_name}
                      </Text>
                      <Text>
                        Serving: {item.serving_qty} {item.serving_unit}
                      </Text>
                      <Text>Calories: {item.nf_calories.toFixed(2)} kcal</Text>
                    </VStack>
                    <HStack spacing={4}>
                      <Button
                        size="sm"
                        colorScheme="blue"
                        onClick={() => handleViewDetails(item)}
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleDeleteFood(index)}
                      >
                        Delete
                      </Button>
                    </HStack>
                  </HStack>
                </Box>
              ))}
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
            </VStack>
          )}
        </VStack>
      </Box>

      {selectedItem && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedItem.food_name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack align="start" spacing={4}>
                <Box>
                  <Text fontSize="lg">
                    <strong>Serving Size:</strong>{" "}
                    {selectedItem.serving_qty} {selectedItem.serving_unit}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Calories:</strong>{" "}
                    {selectedItem.nf_calories.toFixed(2)} kcal
                  </Text>
                </Box>
                <Box>
                  <Heading size="md">Nutritional Information per Serving:</Heading>
                  <Text>
                    <strong>Protein:</strong> {selectedItem.nf_protein.toFixed(2)} g
                  </Text>
                  <Text>
                    <strong>Fat:</strong> {selectedItem.nf_total_fat.toFixed(2)} g
                  </Text>
                  <Text>
                    <strong>Carbohydrates:</strong>{" "}
                    {selectedItem.nf_total_carbohydrate.toFixed(2)} g
                  </Text>
                  <Text>
                    <strong>Sugar:</strong> {selectedItem.nf_sugars.toFixed(2)} g
                  </Text>
                  <Text>
                    <strong>Fiber:</strong> {selectedItem.nf_dietary_fiber.toFixed(2)} g
                  </Text>
                  <Text>
                    <strong>Sodium:</strong> {selectedItem.nf_sodium.toFixed(2)} mg
                  </Text>
                  <Text>
                    <strong>Potassium:</strong> {selectedItem.nf_potassium.toFixed(2)} mg
                  </Text>
                </Box>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default FoodCalorie;




