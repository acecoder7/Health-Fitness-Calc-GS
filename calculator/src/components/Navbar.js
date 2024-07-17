import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

const Navbar = () => (
  <Box bg="primary.500" px={4} color="white">
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>Health & Fitness Calculators</Box>
      <Flex alignItems="center">
        <Link px={2} href="/">Home</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
