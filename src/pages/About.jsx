import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Center h="100vh" bg="gray.100">
      <Box p={5}>
        <Heading as="h1" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">Welcome to our website! Here you can find information about our services and company.</Text>
      </Box>
    </Center>
  );
};

export default About;
