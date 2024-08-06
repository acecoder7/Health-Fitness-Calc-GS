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
    richIn: [ "Vitamin C", "Vitamin A"]
  },
  {
    id: 2,
    imageUrl: img2,
    name: "Fresh Harvest Crunch",
    items: [
      { name: "Avocado", quantity: "140g", imageUrl: "avocado.jpg", link: "http://example.com/avocado" },
      { name: "Green Zucchini", quantity: "120g", imageUrl: "zucchini.jpg", link: "http://example.com/zucchini" },
      { name: "Cherry tomatoes", quantity: "100g", imageUrl: "tomatoes.jpg", link: "http://example.com/tomatoes" },
      { name: "Red bell pepper", quantity: "80g", imageUrl: "bellpepper.jpg", link: "http://example.com/bellpepper" },
      { name: "Red onion", quantity: "40g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
      { name: "Fresh parsley", quantity: "20g", imageUrl: "parsley.jpg", link: "http://example.com/parsley" },
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
    richIn: [ "Vitamin C", "Calcium"]
  },
  {
    id: 3,
    imageUrl: img3,
    name: "Rainbow Beet Salad",
    items: [
      { name: "Beetroot", quantity: "110g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Spinach", quantity: "120g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Carrot", quantity: "100g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Red cabbage", quantity: "120g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Green onion", quantity: "50g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
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
    richIn: [ "Vitamin C", "Calcium"]
  },
  {
    id: 4,
    imageUrl: img4,
    name: "Golden Corn Fiesta",
    items: [
      { name: "Corn kernels", quantity: "100g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Romaine lettuce", quantity: "150g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Cherry tomatoes", quantity: "100g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Red bell pepper", quantity: "50g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Avocado", quantity: "100g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
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
    richIn: [ "Vitamin C", "Calcium"]
  },
  {
    id: 5,
    imageUrl: img5,
    name: "Tropical Fruit Harmony",
    items: [
      { name: "Pomegranate", quantity: "150g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Apple", quantity: "150g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Orange", quantity: "150g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Kiwi", quantity: "150g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Grapes", quantity: "100g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
      { name: "Blueberries", quantity: "100g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
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
    richIn: [ "Vitamin C", "Calcium"]
  },
  {
    id: 6,
    imageUrl: img6,
    name: "Exotic Mango Bliss",
    items: [
      { name: "Mango, Kesar", quantity: "100g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Avocado", quantity: "100g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Baby Corn", quantity: "100g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Red Bell Pepper", quantity: "75g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Cucumber", quantity: "75g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
      { name: "Lettuce", quantity: "150g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
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
    richIn: [ "Vitamin C", "Calcium"]
  },
  {
    id: 7,
    imageUrl: img7,
    name: "Sweet and Sunny Salad",
    items: [
      { name: "Sweet potato", quantity: "150g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Carrot", quantity: "100g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Spinach", quantity: "100g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Yellow bell pepper", quantity: "75g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Red bell pepper", quantity: "75g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
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
    richIn: [ "Vitamin C", "Calcium"]
  },
  {
    id: 8,
    imageUrl: img8,
    name: "Crunchy Veggie Delight",
    items: [
      { name: "Broccoli", quantity: "150g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Carrot", quantity: "100g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Red Cabbage", quantity: "100g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Corn", quantity: "100g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Lettuce", quantity: "150g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
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
    richIn: [ "Vitamin C", "Calcium"]
  },
  {
    id: 9,
    imageUrl: img9,
    name: "Garden Fresh Mushroom Salad",
    items: [
      { name: "Mushroom, button", quantity: "100g", imageUrl: "beetroot.jpg", link: "http://example.com/beetroot" },
      { name: "Spinach", quantity: "150g", imageUrl: "spinach.jpg", link: "http://example.com/spinach" },
      { name: "Potato", quantity: "150g", imageUrl: "carrot.jpg", link: "http://example.com/carrot" },
      { name: "Onions", quantity: "100g", imageUrl: "cabbage.jpg", link: "http://example.com/cabbage" },
      { name: "Cucumber", quantity: "100g", imageUrl: "onion.jpg", link: "http://example.com/onion" },
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
    richIn: [ "Vitamin C", "Calcium"]
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