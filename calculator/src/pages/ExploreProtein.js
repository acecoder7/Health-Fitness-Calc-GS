import React, {useState} from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Divider,
  Tag,
  Wrap,
  WrapItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Grid,
  GridItem,
} from "@chakra-ui/react";


import img1 from "../images/proteinbasket/salad1.jpg";
import img2 from "../images/proteinbasket/salad2.jpg";
import img3 from "../images/proteinbasket/salad3.jpg";
import img4 from "../images/proteinbasket/salad4.jpg";
import img5 from "../images/proteinbasket/salad5.jpg";
import img6 from "../images/proteinbasket/salad6.jpg";
import img7 from "../images/proteinbasket/salad7.jpg";
import img8 from "../images/proteinbasket/salad8.jpg";
import img9 from "../images/proteinbasket/salad9.jpg"; 

const proteinData = [
  {
    id: 1,
    imageUrl: img1,
    name: "Garden Fresh Delight Salad",
    items: [
      { name: "Asparagus", quantity: "600g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Baby Corn", quantity: "600g", imageUrl: "tomatoes.jpg", link: "http://example.com/tomatoes" },
      { name: "Cherry tomatoes", quantity: "600g", imageUrl: "cucumber.jpg", link: "http://example.com/cucumber" },
      { name: "English Cucumber", quantity: "600g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
      { name: "Beetroot", quantity: "600g", imageUrl: "corn.jpg", link: "http://example.com/corn" },
    ],
    totalProtein: "53 g",
    totalCalories: "1074 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "79 g",
    totalVitaminC: "176 mg",
    totalVitaminA: "1660 μg",
    totalCalcium: " 891 mg",
    totalPotassium: "3654 mg",
    totalMagnesium: "303 mg",
    totalIron: "18 mg",
    richIn: ["Vitamin C", "Vitamin A"],
    noOfServing: 6,
    servingSize: "500 g"
  },
  {
    id: 2,
    imageUrl: img2,
    name: "Fresh Harvest Crunch",
    items: [
      { name: "Avocado", quantity: "840g", imageUrl: "avocado.jpg", link: "http://example.com/avocado" },
      { name: "Green Zucchini", quantity: "750g", imageUrl: "zucchini.jpg", link: "http://example.com/zucchini" },
      { name: "Leeks", quantity: "600g", imageUrl: "tomatoes.jpg", link: "http://example.com/tomatoes" },
      { name: "Cherry tomatoes", quantity: "450g", imageUrl: "bellpepper.jpg", link: "http://example.com/bellpepper" },
      { name: "Yellow bell pepper", quantity: "360g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "44 g",
    totalCalories: "2082 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "86 g",
    totalVitaminC: "750 mg",
    totalVitaminA: "1397 μg",
    totalCalcium: " 786 mg",
    totalPotassium: "7528 mg",
    totalMagnesium: "570 mg",
    totalIron: "27 mg",
    richIn: ["Vitamin C", "Potassium"],
    noOfServing: 6,
    servingSize: "500 g"
  },
  {
    id: 3,
    imageUrl: img3,
    name: "Rainbow Beet Salad",
    items: [
      { name: "Beetroot", quantity: "660g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Kale", quantity: "720g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Carrot", quantity: "600g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Red cabbage", quantity: "720g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Green onion", quantity: "300g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "53 g",
    totalCalories: "1101 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "71 g",
    totalVitaminC: "564 mg",
    totalVitaminA: "7312 μg",
    totalCalcium: " 2672 mg",
    totalPotassium: "10188 mg",
    totalMagnesium: "634 mg",
    totalIron: "29 mg",
    richIn: ["Calcium", "Magnesium"],
    noOfServing: 6,
    servingSize: "500 g"
  },
  {
    id: 4,
    imageUrl: img4,
    name: "Golden Corn Fiesta",
    items: [
      { name: "Baby Corn", quantity: "600g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Romaine lettuce", quantity: "900g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Cherry tomatoes", quantity: "600g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Red bell pepper", quantity: "300g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Avocado", quantity: "600g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "53 g",
    totalCalories: "1770 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "102 g",
    totalVitaminC: "665 mg",
    totalVitaminA: "4721 μg",
    totalCalcium: " 1071 mg",
    totalPotassium: "8019 mg",
    totalMagnesium: "555 mg",
    totalIron: "28 mg",
    richIn: ["Vitamin C", "Potassium"],
    noOfServing: 6,
    servingSize: "500 g"
  },
  {
    id: 5,
    imageUrl: img5,
    name: "Sweet and Sunny Salad",
    items: [
      { name: "Sweet potato", quantity: "900g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Orange Carrot", quantity: "600g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Celery", quantity: "600g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Yellow bell pepper", quantity: "450g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Red bell pepper", quantity: "450g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "42 g",
    totalCalories: "1608 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "76 g",
    totalVitaminC: "1434 mg",
    totalVitaminA: "12550 μg",
    totalCalcium: " 839 mg",
    totalPotassium: "10659 mg",
    totalMagnesium: "173 mg",
    totalIron: "14 mg",
    richIn: ["Vitamin A", "Potassium"],
    noOfServing: 6,
    servingSize: "500 g"
  },
  {
    id: 6,
    imageUrl: img6,
    name: "Crunchy Veggie Delight",
    items: [
      { name: "Broccoli", quantity: "750g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Orange Carrot", quantity: "500g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Red Cabbage", quantity: "500g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Baby Corn", quantity: "500g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Lettuce", quantity: "750g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "57 g",
    totalCalories: "1093 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "84 g",
    totalVitaminC: "1094 mg",
    totalVitaminA: "7310 μg",
    totalCalcium: " 1398 mg",
    totalPotassium: "7843 mg",
    totalMagnesium: "522 mg",
    totalIron: "25 mg",
    richIn: ["Vitamin C", "Calcium"],
    noOfServing: 5,
    servingSize: "600 g"
  },
  {
    id: 7,
    imageUrl: img7,
    name: "Garden Fresh Mushroom Salad",
    items: [
      { name: "Mushroom, button", quantity: "500g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Bok Choy", quantity: "750g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Potato", quantity: "750g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Beetroot", quantity: "500g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "English Cucumber", quantity: "500g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "57 g",
    totalCalories: "1125 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "64 g",
    totalVitaminC: "534 mg",
    totalVitaminA: "1698 μg",
    totalCalcium: " 1053 mg",
    totalPotassium: "9028 mg",
    totalMagnesium: "540 mg",
    totalIron: "20 mg",
    richIn: ["Calcium", "Potassium"],
    noOfServing: 5,
    servingSize: "600 g"
  },
  {
    id: 8,
    imageUrl: img8,
    name: "Green and Gold Salad Bliss",
    items: [
      { name: "Cucumber", quantity: "900g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Baby corn", quantity: "600g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Yellow bell pepper", quantity: "450g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Avocado", quantity: "600g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Beetroot", quantity: "450g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "47 g",
    totalCalories: "1913 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "105 g",
    totalVitaminC: "782 mg",
    totalVitaminA: "110 μg",
    totalCalcium: "803 mg",
    totalPotassium: "8630 mg",
    totalMagnesium: "628 mg",
    totalIron: "21 mg",
    richIn: ["Vitamin C", "Potassium"],
    noOfServing: 6,
    servingSize: "500 g"
  },
  {
    id: 9,
    imageUrl: img9,
    name: "Harvest Glow Salad",
    items: [
      { name: "Lettuce", quantity: "900g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Orange Carrot", quantity: "600g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Yellow Zucchini", quantity: "600g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Broccoli", quantity: "600g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Broccoli", quantity: "300g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "47 g",
    totalCalories: "924 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "64 g",
    totalVitaminC: "731 mg",
    totalVitaminA: "7514 μg",
    totalCalcium: " 918 mg",
    totalPotassium: "8262 mg",
    totalMagnesium: "479 mg",
    totalIron: "19 mg",
    richIn: ["Potassium", "Vitamin A"],
    noOfServing: 6,
    servingSize: "500 g"
  },
  {
    id: 10,
    imageUrl: img8,
    name: "Potato Delight Salad",
    items: [
      { name: "Potato", quantity: "1440g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Cherry tomatoes", quantity: "480g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Olives, green", quantity: "480g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Red cabbage", quantity: "800g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Bok Choy", quantity: "800g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "66 g",
    totalCalories: "2282 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "4000 g",
    totalFiber: "72 g",
    totalVitaminC: "1144 mg",
    totalVitaminA: "3391 μg",
    totalCalcium: "1781 mg",
    totalPotassium: "10282 mg",
    totalMagnesium: "664 mg",
    totalIron: "32 mg",
    richIn: ["Calcium", "Potassium"],
    noOfServing: 8,
    servingSize: "500 g"
  },
  {
    id: 11,
    imageUrl: img8,
    name: "Berry Banana Bliss",
    items: [
      { name: "Banana", quantity: "1200g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Pomegranate", quantity: "800g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Strawberries", quantity: "800g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Blueberries", quantity: "600g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Blackberries", quantity: "600g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "55 g",
    totalCalories: "2588 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "4000 g",
    totalFiber: "169 g",
    totalVitaminC: "800 mg",
    totalVitaminA: "128 μg",
    totalCalcium: "640 mg",
    totalPotassium: "10300 mg",
    totalMagnesium: "716 mg",
    totalIron: "14 mg",
    richIn: ["Vitamin C", "Magnesium"],
    noOfServing: 8,
    servingSize: "500 g"
  },
  {
    id: 12,
    imageUrl: img8,
    name: "Rainbow Crunch Salad",
    items: [
      { name: "Sugar Snap Peas", quantity: "1200g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "English Cucumber", quantity: "720g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Red cabbage", quantity: "180g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Red Bell pepper", quantity: "450g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Yellow Bell pepper", quantity: "4500g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
    ],
    totalProtein: "49 g",
    totalCalories: "1029 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "3000 g",
    totalFiber: "55 g",
    totalVitaminC: "1438 mg",
    totalVitaminA: "681 μg",
    totalCalcium: "965 mg",
    totalPotassium: "6761 mg",
    totalMagnesium: "285 mg",
    totalIron: "38 mg",
    richIn: ["Vitamin C", "Potassium"],
    noOfServing: 6,
    servingSize: "500 g"
  },
];

const ExploreProtein = () => {
  const [selectedBowl, setSelectedBowl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNowClick = (bowl) => {
    setSelectedBowl(bowl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBowl(null);
  };

  return (
    <Box bg="background.100" p={8} minHeight="100vh">
      <Heading mb={6}>Explore Protein-Rich Baskets</Heading>
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
                <Text color="gray.600" fontWeight="bold" mb={2}>Ingredients:</Text>
                <Wrap spacing={2} shouldWrap>
                  {bowl.items.map((item, index) => (
                    <WrapItem key={index}>
                      <Tag
                        borderRadius="full"
                        variant="solid"
                        bg="blue.100"
                        color="blue.700"
                        p={2}
                        fontSize="sm"
                        fontWeight="bold"
                        boxShadow="sm"
                      >
                        {item.name}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>

                <Divider />
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  {/* Left Section */}
                  <Stack spacing={1}>
                    <Text color="green.600">
                      Total Protein: {bowl.totalProtein}
                    </Text>
                    <Text color="orange.600">
                      Total Calories: {bowl.totalCalories}
                    </Text>
                    <Text color="purple.600">
                      Total Weight: {bowl.totalWeight}
                    </Text>
                    <Text color="blue.600">
                      Total Price: {bowl.totalPrice}
                    </Text>
                  </Stack>

                  {/* Right Section */}
                  <Box>
                    <Text color="gray.600" fontWeight="bold" mb={2}>
                      Rich in :
                    </Text>
                    <Wrap spacing={2} shouldWrap>
                      {bowl.richIn.map((item, index) => (
                        <WrapItem key={index}>
                          <Tag
                            borderRadius="full"
                            variant="solid"
                            bg="pink.100"
                            color="pink.700"
                            p={2}
                            fontSize="sm"
                            fontWeight="bold"
                            boxShadow="sm"
                          >
                            {item}
                          </Tag>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Box>
                </Grid>

                <Button
                  colorScheme="green"
                  variant="solid"
                  size="lg"
                  width="full"
                  onClick={() => handleBuyNowClick(bowl)}
                >
                  Buy Ingredients
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="3xl">
        <ModalOverlay />
        <ModalContent bg="orange.100">
          <ModalHeader color="orange.500">{selectedBowl?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedBowl && (
              <Stack spacing={3}>
                <Text fontSize="lg" fontWeight="bold">
                  Ingredients:
                </Text>
                <SimpleGrid columns={1} spacing={4}>
                  {selectedBowl.items.map((item, index) => (
                    <Grid
                      key={index}
                      templateColumns="repeat(4, 1fr)"
                      gap={4}
                      alignItems="center"
                      p={2}
                      borderRadius="md"
                      bg="white"
                    >
                      <GridItem>
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          boxSize="100px"
                          objectFit="cover"
                        />
                      </GridItem>
                      <GridItem>
                        <Text color="orange.500" fontWeight="bold">{item.name}</Text>
                      </GridItem>
                      <GridItem>
                        <Text>Serving Quantity: {item.quantity}</Text>
                      </GridItem>
                      <GridItem justifySelf="end">
                        <Button
                          colorScheme="green"
                          as="a"
                          href={item.link}
                          target="_blank"
                        >
                          Buy
                        </Button>
                      </GridItem>
                    </Grid>
                  ))}
                </SimpleGrid>
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ExploreProtein;