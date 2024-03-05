import React from "react";
import { VStack } from "@chakra-ui/react";
import Advertisement from "./Advertisement";

import { Box } from "@chakra-ui/react";

const adMessages = ["Try your luck with our latest gambling games and win big!", "Join the thrill and excitement, place your bets now!", "Feeling lucky? Spin the wheel and get a chance to hit the jackpot!", "Step right up to the ultimate gambling experience and win!", "Play the odds, enjoy the game, and walk away a winner!"];

const GamblingAds = () => {
  return (
    <VStack>
      {adMessages.map((message, index) => (
        <Box key={index} w="100%">
          <Advertisement adMessage={message} />
        </Box>
      ))}
    </VStack>
  );
};

export default GamblingAds;
