import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSidebar } from "../context/SidebarContext";

const Footer = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <Box
      bg="primary.500"
      color="white"
      py={4}
      textAlign="center"
      mt={8}
      zIndex="1000"
      marginRight={{ base: 0, md: isSidebarOpen ? "300px" : 0 }} 
      transition="margin-right 0.3s ease"
    >
      <Text>&copy; 2024 GreenSizz Private Limited. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
