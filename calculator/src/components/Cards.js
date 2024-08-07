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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useBreakpointValue,
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

  const gridTemplateColumns = useBreakpointValue({ base: "1fr", md: "repeat(2, 1fr)" });

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
        {data.name && (
            <Text fontWeight="bold" fontSize="xl">
              {data.name}
            </Text>
          )}

          <Divider />

          {data.items && data.items.length > 0 && (
            <>
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
            </>
          )}

          <Grid templateColumns={gridTemplateColumns} gap={6}>
            <Stack spacing={1}>
            {data.totalProtein && <Text>Total Protein: {data.totalProtein}</Text>}
              {data.totalCalories && <Text>Total Calories: {data.totalCalories}</Text>}
              {data.totalWeight && <Text>Total Weight: {data.totalWeight}</Text>}
              {data.totalPrice && <Text>Total Price: {data.totalPrice}</Text>}
            </Stack>

            {data.richIn && data.richIn.length > 0 && (
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
            )}
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

      {selectedBowl && (
        <Modal isOpen={isOpen} onClose={handleCloseModal} size="3xl">
          <ModalOverlay />
          <ModalContent bg="orange.100">
            <ModalHeader color="orange.500" fontWeight="bold">{selectedBowl?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Grid templateColumns={gridTemplateColumns} gap={4}>
                <Box>
                  <Image
                    src={selectedBowl?.imageUrl}
                    alt={selectedBowl?.name}
                    borderRadius="md"
                    objectFit="cover"
                    width="100%"
                  />
                </Box>
                <Box>
                  <Stack spacing={2}>
                    <Text fontSize="sm">
                      {selectedBowl?.description}
                    </Text>
                    <Divider />
                    <Text>No. of Servings: {selectedBowl?.noOfServing}</Text>
                    <Text>Serving Size: {selectedBowl?.servingSize}</Text>
                    <Text>Total Weight: {selectedBowl?.totalWeight}</Text>
                    <Button
                      variant="outline"
                      colorScheme="green"
                      size="lg"
                      width="full"
                    >
                      Price: {selectedBowl?.totalPrice}
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Divider mt={4} mb={4} />
              <Text fontWeight="bold" mb={2}>
                Nutrient Values:
              </Text>
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th>Nutrient</Th>
                    <Th>Value</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Total Fiber</Td>
                    <Td>{selectedBowl?.totalFiber}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Vitamin C</Td>
                    <Td>{selectedBowl?.totalVitaminC}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Vitamin A</Td>
                    <Td>{selectedBowl?.totalVitaminA}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Calcium</Td>
                    <Td>{selectedBowl?.totalCalcium}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Potassium</Td>
                    <Td>{selectedBowl?.totalPotassium}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Magnesium</Td>
                    <Td>{selectedBowl?.totalMagnesium}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Iron</Td>
                    <Td>{selectedBowl?.totalIron}</Td>
                  </Tr>
                </Tbody>
              </Table>

              <Divider />

              {/* Ingredients List */}
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
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="orange" onClick={handleCloseModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Card;
