import React, { useState } from "react";
import { Box, Button, Center, Container, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Advertisement from "../components/Advertisement";
import { FaRedo } from "react-icons/fa";

const emojis = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🍌", "🍍", "🥝"];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

import { useEffect } from "react";

const SlotMachine = () => {
  const [slots, setSlots] = useState([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    let spinsLeft = 10;
    const intervalId = setInterval(() => {
      setSlots([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
      spinsLeft--;
      if (spinsLeft <= 0) {
        clearInterval(intervalId);
        setSpinning(false);
      }
    }, 100);
  };

  useEffect(() => {
    if (spinning) {
      spin();
    }
  }, [spinning]);

  const isJackpot = slots.every((slot, _, arr) => slot === arr[0]);

  return (
    <Container py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Emoji Slot Machine
        </Heading>
        <Divider />
        <Flex justifyContent="center" fontSize="6xl">
          {slots.map((emoji, index) => (
            <Box key={index} mx={2}>
              {emoji}
            </Box>
          ))}
        </Flex>
        <Button leftIcon={<FaRedo />} colorScheme="teal" onClick={() => setSpinning(true)} isDisabled={spinning}>
          {spinning ? "Spinning..." : "Spin"}
        </Button>
        {!spinning && isJackpot && (
          <Text fontSize="2xl" color="green.500">
            🎉 Jackpot! 🎉
          </Text>
        )}
      </VStack>
    </Container>
  );
};

const Index = () => {
  return (
    <Center h="100vh" bg="gray.100">
      <Advertisement />
      <SlotMachine />
      <Advertisement />
    </Center>
  );
};

export default Index;
