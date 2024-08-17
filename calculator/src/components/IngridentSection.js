import React from 'react';
import { Box, Text, HStack, Image } from '@chakra-ui/react';

const IngredientSection = ({ items, getItemDetails }) => {
  return (
    <Box mt={4}>
      <Text fontWeight="bold" mb={2} fontSize="lg">Ingredients:</Text>
      <HStack
        spacing={4}
        overflowX="auto"
        pb={2}
        css={{
          '::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none',    
        }}
        position="relative"
      >
        {items.map((item, index) => {
          const itemDetails = getItemDetails(item.ingredientId);
          return (
            <Box
              key={index}
              borderRadius="lg"
              bg="white"
              p={4}
              minW="300px"
              maxW="400px"
              boxShadow="base"
              transition="all 0.3s ease-in-out"
              _hover={{
                width: "400px",
                boxShadow: "xl",
              }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src={itemDetails?.imageUrl}
                alt={itemDetails?.name}
                boxSize="120px"
                objectFit="cover"
                borderRadius="full"
                mb={3}
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
              />
              <Text
                fontWeight="bold"
                color="orange.500"
                textAlign="center"
              >
                {itemDetails?.name || item.name}
              </Text>
              <Text
                fontSize="sm"
                color="gray.600"
                mt={1}
                textAlign="center"
                transition="all 0.3s ease-in-out"
                _hover={{ color: "orange.500" }} 
              >
                {itemDetails?.details || 'Additional details about this ingredient.'}
              </Text>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

export default IngredientSection;
