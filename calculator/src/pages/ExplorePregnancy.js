import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import proteinData from "../data/proteinData";
import Card from "../components/Cards";

const ExplorePregnancy = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const trimester = searchParams.get("trimester");

  return (
    <Box p="6">
      <Heading as="h2" size="xl" mb="6">
        Explore Your Custom Bowls
      </Heading>
      {trimester && (
        <Text mb={6} fontSize="lg" fontWeight="bold">
          You are in the {trimester} trimester. Here are your custom bowls
          ready!
        </Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="6">
        {proteinData.map((data) => (
          <Card key={data.id} data={data} nutrient="Protein" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ExplorePregnancy;
