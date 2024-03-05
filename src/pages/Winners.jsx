import React from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const Winners = () => {
  const winnersList = ["Alice", "Bob", "Charlie"];

  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Winners
      </Heading>
      <List spacing={3}>
        {winnersList.map((winner, index) => (
          <ListItem key={index}>{winner}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Winners;
