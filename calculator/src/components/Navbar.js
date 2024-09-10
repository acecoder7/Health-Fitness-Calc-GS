import React from "react";
import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import greenSizz from "../images/Logo_n.jpg";
import { useSidebar } from "../context/SidebarContext";

const Navbar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <Box
      bg="primary.500"
      px={4}
      py={2}
      color="white"
      zIndex="1000"
      marginRight={{ base: 0, md: isSidebarOpen ? "300px" : 0 }}
      transition="margin-right 0.3s ease"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Left Side - Logo */}
        <Box display="flex" alignItems="center">
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src={greenSizz}
              alt="greenSizz"
              style={{ width: "65px", height: "auto", marginRight: "30px" }}
            />
          </a>
        </Box>

        {/* Right Side - Menu Items */}
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              as={Link}
              fontWeight="bold"
              _hover={{ textDecoration: "none", color: "green.200" }}
              cursor="pointer"
              display="flex"
              alignItems="center"
              mr={8}
            >
              Health & Fitness Calculators <ChevronDownIcon ml={2} />
            </MenuButton>
            <MenuList bg="primary.600" borderColor="teal.200" color="green.800">
              <MenuItem
                _hover={{ bg: "green.500", color: "white" }}
                onClick={() => (window.location.href = "/bmindiw")}
              >
                BMI & Ideal Weight Calculator
              </MenuItem>
              <MenuItem
                _hover={{ bg: "green.500", color: "white" }}
                onClick={() => (window.location.href = "/dailycalorie")}
              >
                Daily Calorie Calculator
              </MenuItem>
              <MenuItem
                _hover={{ bg: "green.500", color: "white" }}
                onClick={() => (window.location.href = "/protein")}
              >
                Protein Calculator
              </MenuItem>
              <MenuItem
                _hover={{ bg: "green.500", color: "white" }}
                onClick={() => (window.location.href = "/food-calorie")}
              >
                Food Calorie Calculator
              </MenuItem>
              <MenuItem
                _hover={{ bg: "green.500", color: "white" }}
                onClick={() => (window.location.href = "/nutrient")}
              >
                Nutrient Calculator
              </MenuItem>
              <MenuItem
                _hover={{ bg: "green.500", color: "white" }}
                onClick={() => (window.location.href = "/period")}
              >
                Period Calculator
              </MenuItem>
              <MenuItem
                _hover={{ bg: "green.500", color: "white" }}
                onClick={() => (window.location.href = "/pregnancy")}
              >
                Pregnancy Calculator
              </MenuItem>
            </MenuList>
          </Menu>

          <Link
            px={2}
            href="https://www.greensizz.com/"
            _hover={{ color: "green.200" }}
            ml={4}
            fontWeight="bold"
          >
            Home
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
