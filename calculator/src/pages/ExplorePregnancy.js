import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import pregData1 from "../data/pregData1";
import pregData2 from "../data/pregData2";
import pregData3 from "../data/pregData3";
import CardP from "../components/CardsP";

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

  return (
    <Box p="6">
      <Heading as="h2" size="xl" mb="6">
        Explore Your Custom Bowls
      </Heading>
      {trimester && (
        <Text mb={6} fontSize="lg" fontWeight="bold">
          You are in the {trimester} trimester. Here are your custom bowls ready!
        </Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="6">
        {dataToRender.length > 0 ? (
          dataToRender.map((data) => (
            <CardP key={data.id} data={data} nutrient="Protein" />
          ))
        ) : (
          <Text>No data available for the selected trimester.</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ExplorePregnancy;

