import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const colors = ["yellow.300", "red.300", "green.300", "blue.300", "purple.300"];

const adMessages = ["Try your luck with our latest gambling games and win big!", "Join the thrill and excitement, place your bets now!", "Feeling lucky? Spin the wheel and get a chance to hit the jackpot!", "Step right up to the ultimate gambling experience and win!", "Play the odds, enjoy the game, and walk away a winner!"];

const Advertisement = ({ adMessage }) => {
  const [bgColor, setBgColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

  useEffect(() => {
    const changeColor = () => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    };

    const randomInterval = Math.floor(Math.random() * 500) + 250;
    const timeoutId = setTimeout(changeColor, randomInterval);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Box p={4} bg={bgColor} borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold" textAlign="center">
        {adMessage}
      </Text>
    </Box>
  );
};

export default Advertisement;
