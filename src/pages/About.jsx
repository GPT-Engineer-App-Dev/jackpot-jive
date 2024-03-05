import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <Box as="main" pt="100px" pb={10} px={4} bg="gray.100">
        <Navigation />
        <Center>
          <Box p={5} maxW="xl" mx="auto">
            <Heading as="h1" size="xl" mb={4}>
              About Us
            </Heading>
            <Text fontSize="lg" mb={4}>
              Welcome to our website! Here you can find information about our services and company.
            </Text>
            <Heading as="h2" size="lg" mb={3}>
              Our History
            </Heading>
            <Text fontSize="md" mb={4}>
              Since our inception in 2000, we've been dedicated to providing the best experience for our customers.
            </Text>
            <Heading as="h2" size="lg" mb={3}>
              Our Values
            </Heading>
            <Text fontSize="md" mb={4}>
              We believe in integrity, innovation, and customer satisfaction as the pillars of our business.
            </Text>
            <Heading as="h2" size="lg" mb={3}>
              Contact Us
            </Heading>
            <Text fontSize="md">Have questions? Reach out to us at contact@example.com or call us at (123) 456-7890.</Text>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default About;
