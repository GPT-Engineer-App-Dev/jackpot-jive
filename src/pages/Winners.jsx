import React from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const Winners = () => {
  const winnersList = [
    { name: "Alice", amount: 5000 },
    { name: "Bob", amount: 3000 },
    { name: "Charlie", amount: 6000 },
    { name: "Diana", amount: 1500 },
    { name: "Edward", amount: 2400 },
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
