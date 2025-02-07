import React from "react";
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
  GridItem,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useBreakpointValue,
} from "@chakra-ui/react";

import IngredientSection from "./IngridentSection";
import itemData from "../data/itemData";

const BowlModal = ({ isOpen, onClose, bowl }) => {

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, 1fr)",
  });

  const getItemDetails = (ingredientId) => {
    return itemData.find(item => item.id === ingredientId);
  }

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
            <Box
              position="relative"
              borderRadius="md"
              overflow="hidden"
              _hover={{ boxShadow: "lg", cursor: "pointer" }}
            >
              <Image
                src={bowl?.imageUrl}
                alt={bowl?.name}
                borderRadius="md"
                objectFit="cover"
                width="100%"
                height="270px"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.5)" }}
              />
            </Box>
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
                ].filter(item => item.value)
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
          {/* <Stack spacing={3}>
            <Text fontSize="lg" fontWeight="bold">
              Buy Now 
            </Text>
            <SimpleGrid columns={1} spacing={4}>
              {(bowl?.items || []).map((item, index) => {
                const itemdetails = getItemDetails(item.ingredientId);
                return (
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
                        src={itemdetails?.imageUrl}
                        alt={itemdetails?.name}
                        boxSize="100px"
                        objectFit="cover"
                      />
                    </GridItem>
                    <GridItem>
                      <Text color="orange.500" fontWeight="bold">
                        {itemdetails?.name || item.name}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text>Quantity: {item.quantity}</Text>
                    </GridItem>
                    <GridItem justifySelf="end">
                      <Button
                        colorScheme="green"
                        as="a"
                        href={itemdetails?.link || "#"}
                        target="_blank"
                      >
                        Buy
                      </Button>
                    </GridItem>
                  </Grid>
                );
              })}
            </SimpleGrid>
          </Stack> */}
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
