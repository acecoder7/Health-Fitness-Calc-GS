import React from 'react';
import { Box, Image, Text, Link } from '@chakra-ui/react';

const MainCard = ({ name, icon, link }) => (
  <Link href={link} _hover={{ textDecoration: 'none' }}>
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      textAlign="center"
      bg="white"
      _hover={{ bg: 'primary.500', color: 'white', transform: 'scale(1.05)' }}
      transition="all 0.2s"
    >
      <Image src={icon} alt={`${name} icon`} boxSize="50px" mx="auto" />
      <Text mt={4} fontWeight="bold">{name}</Text>
    </Box>
  </Link>
);

export default MainCard;
