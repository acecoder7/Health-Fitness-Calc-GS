import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

import pcosdata from "../data/pcosData";

import CardP from "../components/CardsP";
import FilterSidebar from "../components/FilterSidebar";

import { useSidebar } from "../context/SidebarContext";

const ExplorePCOS = () => {;

  const { isSidebarOpen, setSidebarOpen } = useSidebar();

  const handleFilterButtonClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box
      p="6"
      mb="4"
      position="relative"
      marginRight={{ base: 0, md: isSidebarOpen ? "300px" : 0 }}
      transition="margin-right 0.4s ease"
    >
      <Flex alignItems="center" justifyContent="space-between" mb="6">
        <Heading as="h2" size="xl">
          Explore PCOS Bowls
        </Heading>
        <Flex alignItems="center" mr="6">
          <Text
            fontSize="lg"
            mr="3"
            _hover={{ color: "orange.500", textDecoration: "underline" }}
            onClick={handleFilterButtonClick}
            cursor="pointer"
          >
            Filter
          </Text>
          <IconButton
            icon={<FaFilter />}
            aria-label="Open filters"
            onClick={handleFilterButtonClick}
            colorScheme="orange"
            size="sm"
            zIndex={1000}
          />
        </Flex>
          </Flex>
          
      <Box padding={{ base: "0", md: "0 6" }} mt={{ base: "0", md: "0" }}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="6">
          {pcosdata.length > 0 ? (
            pcosdata.map((data) => (
              <CardP key={data.id} data={data} nutrient="Protein" />
            ))
          ) : (
            <Text>No data available.</Text>
          )}
        </SimpleGrid>
      </Box>
      <FilterSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </Box>
  );
};

export default ExplorePCOS;