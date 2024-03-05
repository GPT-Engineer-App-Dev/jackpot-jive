import React from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const generateRandomWinners = (numWinners) => {
  const names = ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Skyler", "Quinn", "Avery", "Riley", "Jamie"];
  const randomWinners = [];
  for (let i = 0; i < numWinners; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)] + (i + 1);
    const randomAmount = Math.floor(Math.random() * 10000000) + 1000000;
    randomWinners.push({ name: randomName, amount: randomAmount });
  }
  return randomWinners;
};

const Winners = () => {
  const initialWinnersList = [
    { name: "Alice", amount: 5000000 },
    { name: "Bob", amount: 3000000 },
    { name: "Charlie", amount: 6000000 },
    { name: "Diana", amount: 1500000 },
    { name: "Edward", amount: 2400000 },
  ];
  const newWinnersList = generateRandomWinners(100);
  const winnersList = [...initialWinnersList, ...newWinnersList];

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
