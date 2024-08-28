import React, { useState } from "react";
import {
  Box,
  Text,
  Checkbox,
  Button,
  VStack,
  Divider,
  IconButton,
  Grid,
  GridItem,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const FilterSidebar = ({ isOpen, onClose }) => {
  const [calorieRange, setCalorieRange] = useState([500, 1500]);
  const [priceRange, setPriceRange] = useState([5, 25]);
  return (
    <Box
      position="fixed"
      top={0}
      right={0}
      width={{ base: "100%", md: "310px" }}
      height="100vh"
      bg="green.50"
      color="gray.800"
      transform={isOpen ? "translateX(0)" : "translateX(100%)"}
      transition="transform 0.4s ease"
      boxShadow="2xl"
      p={6}
      zIndex={1000}
      overflowY="auto"
      display="flex"
      flexDirection="column"
    >
      {/* Close Button */}
      <IconButton
        icon={<CloseIcon />}
        aria-label="Close filter"
        onClick={onClose}
        position="absolute"
        top={4}
        right={4}
        variant="ghost"
        colorScheme="gray"
        size="sm"
        _hover={{ bg: "green.100" }}
      />
      {/* Sidebar Title */}
      <Text fontSize="2xl" mb={4} fontWeight="bold" color="green.600">
        Filters
      </Text>
      
      <Divider mb={6} />

      {/* Filters Section */}
      <VStack align="start" spacing={6} flex="1" overflowY="auto">

        {/* Price Range Slider */}
      <Box width="full">
          <Text fontSize="lg" fontWeight="semibold" mb={2} color="gray.700">
            Price (Rs)
          </Text>
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={priceRange}
            min={0}
            max={50}
            step={0.5}
            onChange={(val) => setPriceRange(val)}
            colorScheme="green"
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text mt={2} color="gray.600">
            Rs {priceRange[0]} - Rs {priceRange[1]}
          </Text>
        </Box>
        

        {/* Nutrient Filters */}
        <Box width="full">
          <Text fontSize="lg" fontWeight="semibold" mb={2} color="gray.700">
            Nutrients
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Vitamin C</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Vitamin A</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Protein</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Potassium</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Vitamin B6</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Folate</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Calcium</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Iron</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Fiber</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Magnesium</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Sodium</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Zinc</Checkbox>
            </GridItem>
            <GridItem>
              <Checkbox size="sm" colorScheme="green">Selenium</Checkbox>
            </GridItem>
          </Grid>
        </Box>

        {/* Caloric Content Range Slider */}
        <Box width="full">
          <Text fontSize="lg" fontWeight="semibold" mb={2} color="gray.700">
            Caloric Content (kcal)
          </Text>
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={calorieRange}
            min={0}
            max={3000}
            step={10}
            onChange={(val) => setCalorieRange(val)}
            colorScheme="green"
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text mt={2} color="gray.600">
            {calorieRange[0]} kcal - {calorieRange[1]} kcal
          </Text>
        </Box>

      </VStack>

      <Button
        mt={10}
        colorScheme="green"
        width="full"
        borderRadius="md"
        size="lg"
        _hover={{ bg: "green.500", transform: "scale(1.02)" }}
        _active={{ bg: "green.600" }}
        onClick={onClose}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterSidebar;
