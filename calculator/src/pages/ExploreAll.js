import React, { useState } from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Tag,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import proteinData from "../data/proteinData";
import vitaminAData from "../data/vitaminAData";
import vitaminCData from "../data/vitaminCData";
import potassiumData from "../data/potassiumData";
import calciumData from "../data/calciumData";
import magnesiumData from "../data/magnesiumData";
import ironData from "../data/ironData";
import Card from "../components/Cards";

const ExploreAll = () => {
  const [selectedNutrient, setSelectedNutrient] = useState(null);

  const handleNutrientSelect = (nutrient) => {
    setSelectedNutrient(nutrient);
  };

  const renderBowls = () => {
    switch (selectedNutrient) {
      case "Protein":
        return proteinData.map((bowl) => <Card key={bowl.id} data={bowl} />);
      case "Vitamin A":
        return vitaminAData.map((bowl) => <Card key={bowl.id} data={bowl} />);
      case "Vitamin C":
        return vitaminCData.map((bowl) => <Card key={bowl.id} data={bowl} />);
      case "Potassium":
        return potassiumData.map((bowl) => <Card key={bowl.id} data={bowl} />);
      case "Calcium":
        return calciumData.map((bowl) => <Card key={bowl.id} data={bowl} />);
        case "Magnesium":
          return magnesiumData.map((bowl) => <Card key={bowl.id} data={bowl} />);
        case "Iron":
          return ironData.map((bowl) => <Card key={bowl.id} data={bowl} />);
      default:
        return <Text>Select a nutrient to see the bowls</Text>;
    }
  };

  return (
    <Box p="6">
      <Heading as="h2" size="xl" mb="6">
        Explore Nutrient-Rich Baskets
      </Heading>

      <Wrap spacing={6} mb={8}>
        <WrapItem>
          <Tag
            size="lg"
            variant={selectedNutrient === "Protein" ? "solid" : "outline"}
            colorScheme="blue"
            onClick={() => handleNutrientSelect("Protein")}
            p={4}
            fontSize="lg"
            cursor="pointer"
          >
            Protein
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag
            size="lg"
            variant={selectedNutrient === "Vitamin A" ? "solid" : "outline"}
            colorScheme="orange"
            onClick={() => handleNutrientSelect("Vitamin A")}
            p={4}
            fontSize="lg"
            cursor="pointer"
          >
            Vitamin A
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag
            size="lg"
            variant={selectedNutrient === "Vitamin C" ? "solid" : "outline"}
            colorScheme="green"
            cursor="pointer"
            onClick={() => handleNutrientSelect("Vitamin C")}
            p={4}
            fontSize="lg"
          >
            Vitamin C
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag
            size="lg"
            variant={selectedNutrient === "Potassium" ? "solid" : "outline"}
            colorScheme="pink"
            onClick={() => handleNutrientSelect("Potassium")}
            p={4}
            fontSize="lg"
            cursor="pointer"
          >
            Potassium
          </Tag>
        </WrapItem>

        <WrapItem>
          <Tag
            size="lg"
            variant={selectedNutrient === "Calcium" ? "solid" : "outline"}
            colorScheme="yellow"
            onClick={() => handleNutrientSelect("Calcium")}
            p={4}
            fontSize="lg"
            cursor="pointer"
          >
            Calcium
          </Tag>
        </WrapItem>

        <WrapItem>
          <Tag
            size="lg"
            variant={selectedNutrient === "Magnesium" ? "solid" : "outline"}
            colorScheme="gray"
            onClick={() => handleNutrientSelect("Magnesium")}
            p={4}
            fontSize="lg"
            cursor="pointer"
          >
            Magnesium
          </Tag>
        </WrapItem>

        <WrapItem>
          <Tag
            size="lg"
            variant={selectedNutrient === "Iron" ? "solid" : "outline"}
            colorScheme="teal"
            onClick={() => handleNutrientSelect("Iron")}
            p={4}
            fontSize="lg"
            cursor="pointer"
          >
            Iron
          </Tag>
        </WrapItem>
      </Wrap>

      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {renderBowls()}
      </SimpleGrid>
    </Box>
  );
};

export default ExploreAll;
