import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Divider,
  Tag,
  Wrap,
  WrapItem,
  Button,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import BowlModal from "../components/BowlModal";

const Card = ({ data, nutrient }) => {
  const [selectedBowl, setSelectedBowl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedBowl(null);
  };

  const handleMoreDetails = (bowl) => {
    setSelectedBowl(bowl);
    setIsOpen(true);
  };

  const handleBuyNow = () => {
    if (data?.link) {
      window.open(data.link, "_blank");
    } else {
      console.error("No link available for this bowl");
    }
  };

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, 1fr)",
  });
  const textSize = useBreakpointValue({ base: "sm", md: "sm", lg: "sm" });

  const nutrientValue = (() => {
    switch (nutrient) {
      case "Protein":
        return `Total Protein: ${data.totalProtein}`;
      case "Vitamin A":
        return `Total Vitamin A: ${data.totalVitaminA}`;
      case "Vitamin C":
        return `Total Vitamin C: ${data.totalVitaminC}`;
      case "Potassium":
        return `Total Potassium: ${data.totalPotassium}`;
      case "Calcium":
        return `Total Calcium: ${data.totalCalcium}`;
      case "Magnesium":
        return `Total Magnesium: ${data.totalMagnesium}`;
      case "Iron":
        return `Total Iron: ${data.totalIron}`;
      default:
        return null;
    }
  })();

  return (
    <Box
      key={data.id}
      maxWidth="100%"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      height="100%"
      borderColor="gray.600"
      m={1}
    >
      <Box
        position="relative"
        borderRadius="md"
        overflow="hidden"
        _hover={{ boxShadow: "lg", cursor: "pointer" }}
      >
        <Image
          src={data.imageUrl}
          alt={data.name}
          borderTopRadius="md"
          objectFit="contain"
          width="100%"
          height="auto"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.07)" }}
        />
      </Box>

      <Box p={4} flex="1">
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
              {nutrientValue && (
                <Text fontSize={textSize}>{nutrientValue}</Text>
              )}
              {data.totalCalories && (
                <Text fontSize={textSize}>
                  Total Calories: {data.totalCalories}
                </Text>
              )}
              {data.totalWeight && (
                <Text fontSize={textSize}>
                  Total Weight: {data.totalWeight}
                </Text>
              )}
              {data.totalPrice && (
                <Text fontSize={textSize}>Total Price: {data.totalPrice}</Text>
              )}
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

          <Stack direction="row" spacing={4} mt={3}>
            <Button
              variant="solid"
              size="md"
              colorScheme="green"
              flex="1"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
            <Button
              variant="outline"
              size="md"
              colorScheme="blue"
              flex="1"
              onClick={() => handleMoreDetails(data)}
            >
              View More Details
            </Button>
          </Stack>
        </Stack>
      </Box>

      {selectedBowl && (
        <BowlModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          bowl={selectedBowl}
        />
      )}
    </Box>
  );
};

export default Card;
