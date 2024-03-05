import React from "react";
import { VStack } from "@chakra-ui/react";
import Advertisement from "./Advertisement";

import { Box } from "@chakra-ui/react";

const adMessages = ["Try your luck with our latest gambling games and win big!", "Join the thrill and excitement, place your bets now!", "Feeling lucky? Spin the wheel and get a chance to hit the jackpot!", "Step right up to the ultimate gambling experience and win!", "Play the odds, enjoy the game, and walk away a winner!"];

const colors = ["#F56565", "#ED8936", "#ECC94B", "#48BB78", "#38B2AC", "#4299E1", "#667EEA", "#9F7AEA", "#ED64A6", "#718096"];

const getUniqueColorIndices = (count) => {
  const indices = new Set();
  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    indices.add(randomIndex);
  }
  return Array.from(indices);
};

const GamblingAds = () => {
  const colorIndices = getUniqueColorIndices(adMessages.length);
  return (
    <VStack>
      {adMessages.map((message, index) => (
        <Box key={index} w="100%">
          <Advertisement adMessage={message} bgColor={colors[colorIndices[index]]} />
        </Box>
      ))}
    </VStack>
  );
};

export default GamblingAds;
