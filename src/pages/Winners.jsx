import React from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const generateRandomWinners = (numWinners, existingNames) => {
  const names = ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Skyler", "Quinn", "Avery", "Riley", "Jamie"];
  const usedNames = new Set(existingNames);
  const randomWinners = [];
  while (randomWinners.length < numWinners) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    if (!usedNames.has(randomName)) {
      usedNames.add(randomName);
      const randomAmount = Math.floor(Math.random() * 10000000) + 1000000;
      randomWinners.push({ name: randomName, amount: randomAmount });
    }
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
  const existingNames = initialWinnersList.map((winner) => winner.name);
  const newWinnersList = generateRandomWinners(100, existingNames);
  const winnersList = [...initialWinnersList, ...newWinnersList];

  // This duplicate Winners component declaration is removed to fix the error.

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
