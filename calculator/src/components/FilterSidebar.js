import React from 'react';
import { Box, Text, Checkbox, Button, VStack, Divider, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const FilterSidebar = ({ isOpen, onClose }) => {
  return (
    <Box
      position="fixed"
      top={0}
      right={0}
      width={{ base: "100%", md: "300px" }} // Full width on mobile, fixed width on desktop
      height="100vh"
      bg="gray.800"
      color="white"
      transform={isOpen ? "translateX(0)" : "translateX(100%)"}
      transition="transform 0.3s ease"
      boxShadow="md"
      p={4}
      zIndex={1000}
      overflowY="auto" // Allows scrolling if content overflows
    >
      <IconButton
        icon={<CloseIcon />}
        aria-label="Close filter"
        onClick={onClose}
        position="absolute"
        top={4}
        right={4}
        variant="outline"
        colorScheme="whiteAlpha"
      />
      <Text fontSize="xl" mb={4} fontWeight="bold">
        Filters
      </Text>
      <Divider mb={4} />
      <VStack align="start" spacing={4}>
        <Text fontSize="lg" fontWeight="semibold">Categories</Text>
        <Checkbox colorScheme="teal">Category 1</Checkbox>
        <Checkbox colorScheme="teal">Category 2</Checkbox>
        <Checkbox colorScheme="teal">Category 3</Checkbox>
        <Text fontSize="lg" fontWeight="semibold">Price Range</Text>
        <Checkbox colorScheme="teal">Under ₹500</Checkbox>
        <Checkbox colorScheme="teal">₹500 - ₹1000</Checkbox>
        <Checkbox colorScheme="teal">Above ₹1000</Checkbox>
        {/* Add more filters as needed */}
      </VStack>
      <Button
        mt={6}
        colorScheme="teal"
        width="full"
        onClick={onClose}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterSidebar;


