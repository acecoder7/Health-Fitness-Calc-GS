import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import greenSizz from '../images/logo.jpg'; 

const Navbar = () => (
  <Box bg="primary.500" px={4} py={2} color="white">
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <img src={greenSizz} alt="greenSizz" style={{ width: '65px', height: 'auto', marginRight: '30px' }} />
        <span style={{ fontWeight: 'bold' }}>Health & Fitness Calculators</span>
      </Box>
      <Flex alignItems="center">
        <Link px={2} href="/">Home</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
