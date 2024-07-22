import React from "react";
import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Divider,
  Tag,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";

import img1 from "../images/proteinbasket/salad1.jpg";
import img2 from "../images/proteinbasket/salad2.jpg";
import img3 from "../images/proteinbasket/salad3.jpg";
import img4 from "../images/proteinbasket/salad4.jpg";
import img5 from "../images/proteinbasket/salad5.jpg";
import img6 from "../images/proteinbasket/salad6.jpg";
import img7 from "../images/proteinbasket/salad7.jpg";
import img8 from "../images/proteinbasket/salad8.jpg";
import img9 from "../images/proteinbasket/salad8.jpg"; // Corrected image name

const proteinData = [
  {
    id: 1,
    imageUrl: img1,
    name: "Garden Fresh Delight Salad",
    items: ["Spinach", "Cherry tomatoes", "Cucumber", "Red onion", "Corn"],
    totalProtein: "56.69g",
    totalCalories: "1211",
    totalPrice: "$12.50",
    totalWeight: "3000g",
  },
  {
    id: 2,
    imageUrl: img2,
    name: "Fresh Harvest Crunch",
    items: [
      "Avocado",
      "Green Zucchini",
      "Cherry tomatoes",
      "Red bell pepper",
      "Red onion",
      "Fresh parsley",
    ],
    totalProtein: "60.38g",
    totalCalories: "1828",
    totalPrice: "$11.00",
    totalWeight: "3000g",
  },
  {
    id: 3,
    imageUrl: img3,
    name: "Rainbow Beet Salad",
    items: ["Beetroot", "Spinach", "Carrot", "Red cabbage", "Green onion"],
    totalProtein: "49.32g",
    totalCalories: "1623",
    totalPrice: "$12.50",
    totalWeight: "3000g",
  },
  {
    id: 4,
    imageUrl: img4,
    name: "Golden Corn Fiesta",
    items: [
      "Corn kernels",
      "Romaine lettuce",
      "Cherry tomatoes",
      "Red bell pepper",
      "Avocado",
    ],
    totalProtein: "49.62g",
    totalCalories: "1546",
    totalPrice: "$11.00",
    totalWeight: "3000g",
  },
  {
    id: 5,
    imageUrl: img5,
    name: "Tropical Fruit Harmony",
    items: ["Pomegranate", "Apple", "Orange", "Kiwi", "Grapes", "Blueberries"],
    totalProtein: "36.25g",
    totalCalories: "2173",
    totalPrice: "$12.50",
    totalWeight: "4000g",
  },
  {
    id: 6,
    imageUrl: img6,
    name: "Exotic Mango Bliss",
    items: [
      "Mango, Kesar",
      "Avocado",
      "Baby Corn",
      "Red Bell Pepper",
      "Cucumber",
      "Lettuce",
    ],
    totalProtein: "40.6g",
    totalCalories: "1532",
    totalPrice: "$11.00",
    totalWeight: "3000g",
  },
  {
    id: 7,
    imageUrl: img7,
    name: "Sweet and Sunny Salad",
    items: [
      "Sweet potato",
      "Carrot",
      "Spinach",
      "Yellow bell pepper",
      "Red bell pepper",
    ],
    totalProtein: "42.84g",
    totalCalories: "1677",
    totalPrice: "$11.00",
    totalWeight: "3000g",
  },
  {
    id: 8,
    imageUrl: img8,
    name: "Crunchy Veggie Delight",
    items: ["Broccoli", "Carrot", "Red Cabbage", "Corn", "Lettuce"],
    totalProtein: "47.8g",
    totalCalories: "925",
    totalPrice: "$11.00",
    totalWeight: "3000g",
  },
  {
    id: 9,
    imageUrl: img9,
    name: "Garden Fresh Mushroom Salad",
    items: ["Mushroom, button", "Spinach", "Potato", "Onions", "Cucumber"],
    totalProtein: "58.58g",
    totalCalories: "1226",
    totalPrice: "$11.00",
    totalWeight: "3000g",
  },
];

const ExploreProtein = () => {
  return (
    <Box bg="background.100" p={8} minHeight="100vh">
      <Heading mb={6}>Explore Protein-Rich Bowls</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {proteinData.map((bowl) => (
          <Box
            key={bowl.id}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            overflow="hidden"
            maxWidth="100%"
          >
            <Image src={bowl.imageUrl} alt={bowl.name} borderTopRadius="md" />
            <Box p={4}>
              <Stack spacing={3}>
                <Text fontSize="xl" fontWeight="bold">
                  {bowl.name}
                </Text>
                <Text color="gray.600">Items:</Text>
                <Wrap spacing={2} shouldWrap>
                  {bowl.items.map((item, index) => (
                    <WrapItem key={index}>
                      <Tag
                        borderRadius="full"
                        variant="solid"
                        colorScheme="teal"
                        p={1} // Reduced padding
                        fontSize="sm" // Smaller font size
                        minWidth="120px"
                        textAlign="center"
                      >
                        {item}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>

                <Divider />
                <Stack spacing={1}>
                  <Text color="green.600">
                    Total Protein: {bowl.totalProtein}
                  </Text>
                  <Text color="orange.600">
                    Total Calories: {bowl.totalCalories}
                  </Text>
                  <Text color="blue.600">Total Price: {bowl.totalPrice}</Text>
                  <Text color="purple.600">
                    Total Weight: {bowl.totalWeight}
                  </Text>
                </Stack>

                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="lg"
                  width="full"
                >
                  Buy Now
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ExploreProtein;
