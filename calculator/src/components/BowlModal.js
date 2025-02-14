import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

import IngredientSection from "./IngridentSection";
import itemData from "../data/itemData";

const BowlModal = ({ isOpen, onClose, bowl }) => {
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "1.5fr 1fr",
  });

  // State to track the currently selected main image
  const [selectedImage, setSelectedImage] = useState(bowl?.imageUrl);

  // Update the selected image when the bowl prop changes
  useEffect(() => {
    if (bowl) {
      setSelectedImage(bowl.imageUrl);
    }
  }, [bowl]);

  // Create an array of images (filtering out any undefined values)
  const images = [bowl?.imageUrl, bowl?.imageUrl1, bowl?.imageUrl2].filter(
    (img) => img
  );

  const getItemDetails = (ingredientId) => {
    return itemData.find((item) => item.id === ingredientId);
  };

  const onBuyClick = () => {
    if (bowl?.link) {
      window.open(bowl.link, "_blank");
    } else {
      console.error("No link available for this bowl");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent bg="orange.100">
        <ModalHeader color="orange.500" fontWeight="bold" fontSize="2xl">
          {bowl?.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns={gridTemplateColumns} gap={4}>
            {/* Left Column: Main image + Thumbnails */}
            <Box>
              <Box
                position="relative"
                borderRadius="md"
                overflow="hidden"
                _hover={{ boxShadow: "lg", cursor: "pointer" }}
              >
                <Image
                  src={selectedImage}
                  alt={bowl?.name}
                  borderRadius="md"
                  objectFit="fit"
                  width="100%"
                  height="270px"
                  transition="transform 0.3s"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>
              {/* Thumbnails Row */}
              <HStack spacing={2} mt={2} justify="center">
                {images.map((img, index) => (
                  <Box
                    key={index}
                    border={
                      selectedImage === img
                        ? "2px solid orange"
                        : "1px solid gray"
                    }
                    borderRadius="md"
                    overflow="hidden"
                    cursor="pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      boxSize="60px"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </HStack>
            </Box>

            {/* Right Column: Bowl Details */}
            <Box>
              <Stack spacing={2}>
                <Text fontSize="sm">{bowl?.description}</Text>
                <Divider />
                <Text>No. of Servings: {bowl?.noOfServing}</Text>
                <Text>Serving Size: {bowl?.servingSize}</Text>
                <Text>Total Weight: {bowl?.totalWeight}</Text>
                <Button
                  variant="outline"
                  colorScheme="green"
                  size="lg"
                  width="full"
                >
                  Price: {bowl?.totalPrice}
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Divider mt={4} mb={4} />
          <Text fontWeight="bold" mb={2}>
            Nutrient Values:
          </Text>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Table
              size="sm"
              borderWidth="1px"
              borderRadius="md"
              borderColor="orange.300"
              borderCollapse="collapse"
              width="100%"
              maxW="400px"
            >
              <Thead bg="orange.200">
                <Tr>
                  <Th
                    color="orange.700"
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="2px solid"
                    borderColor="orange.300"
                    width="60%"
                    padding="8px"
                  >
                    Nutrient
                  </Th>
                  <Th
                    color="orange.700"
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="2px solid"
                    borderColor="orange.300"
                    width="40%"
                    padding="8px"
                    textAlign="right"
                  >
                    Value
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                  { name: "Total Calories", value: bowl?.totalCalories },
                  { name: "Total Fiber", value: bowl?.totalFiber },
                  { name: "Total Protein", value: bowl?.totalProtein },
                  { name: "Total Vitamin C", value: bowl?.totalVitaminC },
                  { name: "Total Vitamin A", value: bowl?.totalVitaminA },
                  { name: "Total Calcium", value: bowl?.totalCalcium },
                  { name: "Total Potassium", value: bowl?.totalPotassium },
                  { name: "Total Magnesium", value: bowl?.totalMagnesium },
                  { name: "Total Iron", value: bowl?.totalIron },
                  { name: "Total Vitamin B6", value: bowl?.totalVitaminB6 },
                  { name: "Total Folate", value: bowl?.totalFolate },
                  { name: "Total Sodium", value: bowl?.totalSodium },
                  { name: "Total Zinc", value: bowl?.totalZinc },
                  { name: "Total Selenium", value: bowl?.totalSelenium },
                ]
                  .filter((item) => item.value)
                  .map((item, index) => (
                    <Tr key={index}>
                      <Td
                        borderBottom="1px solid"
                        borderColor="orange.300"
                        padding="8px"
                        fontSize="sm"
                      >
                        {item.name}
                      </Td>
                      <Td
                        borderBottom="1px solid"
                        borderColor="orange.300"
                        padding="8px"
                        fontSize="sm"
                        textAlign="right"
                      >
                        {item.value}
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </Box>

          <Divider mt={4} mb={4} />

          <IngredientSection
            items={bowl?.items || []}
            getItemDetails={getItemDetails}
          />

          <Divider mt={4} mb={4} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="orange" onClick={onBuyClick}>
            Buy
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BowlModal;
