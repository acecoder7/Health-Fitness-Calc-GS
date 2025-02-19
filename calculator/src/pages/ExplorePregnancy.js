import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

import pregData1 from "../data/pregData1";
import pregData2 from "../data/pregData2";
import pregData3 from "../data/pregData3";
import CardP from "../components/CardsP";
import FilterSidebar from "../components/FilterSidebar";

import { useSidebar } from "../context/SidebarContext";

const ExplorePregnancy = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const trimester = searchParams.get("trimester");

  let dataToRender = [];

  if (trimester === "1st") {
    dataToRender = pregData1;
  } else if (trimester === "2nd") {
    dataToRender = pregData2;
  } else if (trimester === "3rd") {
    dataToRender = pregData3;
  }

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
          Explore Your Custom Bowls
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
      {trimester && (
        <Text mb={6} fontSize="lg" fontWeight="bold">
          You are in the {trimester} trimester. Here are your custom bowls
          ready!
        </Text>
      )}
      <Box padding={{ base: "0", md: "0 6" }} mt={{ base: "0", md: "0" }}>
        <SimpleGrid minChildWidth="300px" spacing="7">
          {dataToRender.length > 0 ? (
            dataToRender.map((data) => (
              <CardP key={data.id} data={data} nutrient="Protein" />
            ))
          ) : (
            <Text>No data available for the selected trimester.</Text>
          )}
        </SimpleGrid>
      </Box>
      <FilterSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </Box>
  );
};

export default ExplorePregnancy;
