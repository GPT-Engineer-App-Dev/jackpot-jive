import React, { useState } from "react";
import { Box, Button, Center, Container, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";

const emojis = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🍌", "🍍", "🥝"];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const SlotMachine = () => {
  const [slots, setSlots] = useState([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);

  const spin = () => {
    setSlots([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
  };

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
        <Button leftIcon={<FaRedo />} colorScheme="teal" onClick={spin}>
          Spin
        </Button>
        {isJackpot && (
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
      <SlotMachine />
    </Center>
  );
};

export default Index;
