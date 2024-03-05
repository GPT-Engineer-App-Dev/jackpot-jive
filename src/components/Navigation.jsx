import React from "react";
import { Flex, Link, Box, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white" position="fixed" top="0" left="0" right="0" zIndex="banner">
      <Box>
        <Button as={RouterLink} to="/about" px={2} colorScheme="teal" variant="outline" mr={2}>
          About
        </Button>
        <Button as={RouterLink} to="/winners" px={2} colorScheme="teal" variant="outline" mr={2}>
          Winners
        </Button>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
