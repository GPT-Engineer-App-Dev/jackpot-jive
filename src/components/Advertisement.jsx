import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const colors = ["yellow.300", "red.300", "green.300", "blue.300", "purple.300"];

const adMessages = ["Try your luck with our latest gambling games and win big!", "Join the thrill and excitement, place your bets now!", "Feeling lucky? Spin the wheel and get a chance to hit the jackpot!", "Step right up to the ultimate gambling experience and win!", "Play the odds, enjoy the game, and walk away a winner!"];

const Advertisement = ({ adMessage }) => {
  const [bgColor, setBgColor] = useState(colors[0]);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setBgColor(colors[colorIndex]);
  }, [colorIndex]);

  return (
    <Box p={4} bg={bgColor} borderRadius="md" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold" textAlign="center">
        {adMessage}
      </Text>
    </Box>
  );
};

export default Advertisement;
