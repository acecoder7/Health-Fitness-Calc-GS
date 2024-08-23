import React from "react";
import {
  Box,
  Text,
  Checkbox,
  Button,
  VStack,
  Divider,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const FilterSidebar = ({ isOpen, onClose }) => {
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
      transition="transform 0.4s ease-in-out"
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
        {/* Categories */}
        <Box width="full">
          <Text fontSize="lg" fontWeight="semibold" mb={2} color="gray.700">
            Categories
          </Text>
          <Stack spacing={3}>
            <Checkbox colorScheme="green">Category 1</Checkbox>
            <Checkbox colorScheme="green">Category 2</Checkbox>
            <Checkbox colorScheme="green">Category 3</Checkbox>
          </Stack>
        </Box>

        {/* Price Range */}
        <Box width="full">
          <Text fontSize="lg" fontWeight="semibold" mb={2} color="gray.700">
            Price Range
          </Text>
          <Stack spacing={3}>
            <Checkbox colorScheme="green">Under ₹500</Checkbox>
            <Checkbox colorScheme="green">₹500 - ₹1000</Checkbox>
            <Checkbox colorScheme="green">Above ₹1000</Checkbox>
          </Stack>
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
        alignSelf="center"
        mb={4}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterSidebar;
