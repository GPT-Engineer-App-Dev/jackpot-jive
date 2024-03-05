import React from "react";
import { Flex, Link, Box, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Box>
        <Button as={RouterLink} to="/about" px={2} colorScheme="teal" variant="outline" mr={2}>
          About
        </Button>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
