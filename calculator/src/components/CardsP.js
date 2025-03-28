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
  AspectRatio
} from "@chakra-ui/react";
import BowlModal from "../components/BowlModal";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CardP = ({ data, hideIngredients }) => {
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

  const textSize = useBreakpointValue({ base: "xs", md: "sm", lg: "sm" });
  const priceButtonSize = useBreakpointValue({
    base: "xs",
    md: "sm",
    lg: "md",
  });

  return (
    <Box
      key={data.id}
      w="100%"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      height="100%"
      m={1}
      borderColor="gray.600"
    >
      <AspectRatio
        ratio={1}
        w="100%"
        borderTopRadius="md"
        overflow="hidden"
        _hover={{ boxShadow: "lg", cursor: "pointer" }}
      >
        <Image
          src={data.imageUrl}
          alt={data.name}
          objectFit="contain"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.07)" }}
        />
      </AspectRatio>

      <Box p={3} flex="1">
        <Stack spacing={2}>
          {data.name && (
            <Text fontWeight="bold" fontSize="lg">
              {data.name}
            </Text>
          )}

          <Divider />

          {/* Conditionally render ingredients if hideIngredients is not true */}
          {!hideIngredients && data.items && data.items.length > 0 && (
            <>
              <Text color="gray.600" fontWeight="bold" mb={2}>
                Ingredients:
              </Text>
              <Wrap spacing={1} shouldWrap>
                {data.items.map((item, index) => (
                  <WrapItem key={index}>
                    <Tag colorScheme="blue">{item.name}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
              <Divider />
            </>
          )}

          <Grid templateColumns={gridTemplateColumns} gap={4}>
            <Stack spacing={1}>
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
            </Stack>

            <Box textAlign="right">
              {data.totalPrice && (
                <Button
                  size={priceButtonSize}
                  colorScheme="orange"
                  variant="outline"
                  mb={2}
                >
                  Price: {data.totalPrice}
                </Button>
              )}
            </Box>
          </Grid>

          {data.richIn && data.richIn.length > 0 && (
            <>
              <Divider />
              <Text color="gray.600" fontWeight="bold" mb={2} mt={2}>
                Essential Micronutrients:
              </Text>
              <Wrap spacing={1} shouldWrap>
                {data.richIn.map((item, index) => (
                  <WrapItem key={index}>
                    <Tag size="sm" colorScheme="purple">
                      {item}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </>
          )}

          <Divider />

          {data.nutrientText && (
            <Box display="flex" alignItems="center">
              <ArrowForwardIcon
                boxSize={6}
                color="green.500"
                mr={2}
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "translateX(5px)" }}
              />
              <Text color="gray.600" fontWeight="medium" textAlign="left">
                {data.nutrientText}
              </Text>
            </Box>
          )}

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

export default CardP;


