import React, { useState } from "react";
import {
  Box,
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

const Card = ({ data }) => {
  const [selectedBowl, setSelectedBowl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedBowl(null);
  };

  const handleBuyNowClick = (bowl) => {
    setSelectedBowl(bowl);
    setIsOpen(true);
  };

  return (
    <Box
      key={data.id}
      maxWidth="100%"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={data.imageUrl} alt={data.name} borderTopRadius="md" />

      <Box p={4}>
        <Stack spacing={2}>
          <Text fontWeight="bold" fontSize="xl">
            {data.name}
          </Text>

          <Divider />

          <Text color="gray.600" fontWeight="bold" mb={2}>
            Ingredients:
          </Text>
          <Wrap spacing={2} shouldWrap>
            {data.items.map((item, index) => (
              <WrapItem key={index}>
                <Tag colorScheme="blue">{item.name}</Tag>
              </WrapItem>
            ))}
          </Wrap>

          <Divider />

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Stack spacing={1}>
              <Text>Total Protein: {data.totalProtein}</Text>
              <Text>Total Calories: {data.totalCalories}</Text>
              <Text>Total Weight: {data.totalWeight}</Text>
              <Text>Total Price: {data.totalPrice}</Text>
            </Stack>

            <Box>
              <Text color="gray.600" fontWeight="bold" mb={2}>
                Also rich in :
              </Text>
              <Wrap spacing={2} shouldWrap>
                {data.richIn.map((item, index) => (
                  <WrapItem key={index}>
                    <Tag colorScheme="purple">{item}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Grid>

          <Divider />

          <Button
            variant="solid"
            size="lg"
            width="full"
            colorScheme="green"
            onClick={() => handleBuyNowClick(data)}
          >
            Buy Ingredients
          </Button>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="3xl">
        <ModalOverlay />
        <ModalContent bg="orange.100">
          <ModalHeader color="orange.500" fontWeight="bold">{selectedBowl?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Total Fiber: {data.totalFiber}</Text>
            <Text>Total Vitamin C: {data.totalVitaminC}</Text>
            <Text>Total Vitamin A: {data.totalVitaminA}</Text>
            <Text>Total Calcium: {data.totalCalcium}</Text>
            <Text>Total Potassium: {data.totalPotassium}</Text>
            <Text>Total Magnesium: {data.totalMagnesium}</Text>
            <Text>Total Iron: {data.totalIron}</Text>
            <Text>No. of Servings: {data.noOfServing}</Text>
            <Text>Serving Size: {data.servingSize}</Text>

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
                        <Text color="orange.500" fontWeight="bold">
                          {item.name}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text> Quantity: {item.quantity}</Text>
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

export default Card;
