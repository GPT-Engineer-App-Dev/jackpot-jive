import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Advertisement = () => {
  return (
    <Box p={4} bg="yellow.300" borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold" textAlign="center">
        Try your luck with our latest gambling games and win big!
      </Text>
    </Box>
  );
};

export default Advertisement;
