import React from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const Winners = () => {
  const winnersList = [
    { name: "Alice", amount: 2500 },
    { name: "Bob", amount: 1500 },
    { name: "Charlie", amount: 3000 },
    { name: "Diana", amount: 750 },
    { name: "Edward", amount: 1200 },
  ];

  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Winners
      </Heading>
      <List spacing={3}>
        {winnersList.map((winner, index) => (
          <ListItem key={index}>
            {winner.name} - ${winner.amount.toLocaleString()}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Winners;
