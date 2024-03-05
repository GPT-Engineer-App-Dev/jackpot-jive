import React, { useState } from "react";
import { Box, Button, Center, Container, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import GamblingAds from "../components/GamblingAds";
import Navigation from "../components/Navigation";
import Confetti from "../components/Confetti";
import { FaRedo } from "react-icons/fa";

const emojis = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🍌", "🍍", "🥝"];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

import { useEffect } from "react";

const SlotMachine = () => {
  const [slots, setSlots] = useState([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
  const [credits, setCredits] = useState(10);
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
        if (isJackpot) {
          setCredits(credits + 50);
        }
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
        <Button
          leftIcon={<FaRedo />}
          colorScheme="teal"
          onClick={() => {
            setSpinning(true);
            setCredits(credits - 1);
          }}
          isDisabled={spinning || credits <= 0}
        >
          {spinning ? "Spinning..." : "Spin"}
        </Button>
        <Text fontSize="lg" color="gray.700">
          Credits: {credits}
        </Text>
        {!spinning && isJackpot && (
          <>
            <Confetti />
            <Text fontSize="2xl" color="green.500">
              🎉 Jackpot! 🎉
            </Text>
          </>
        )}
      </VStack>
    </Container>
  );
};

const Index = () => {
  return (
    <Center h="100vh" bg="gray.100" flexDirection="column">
      <Navigation />
      <GamblingAds />
      <SlotMachine />
      <GamblingAds />
    </Center>
  );
};

export default Index;
