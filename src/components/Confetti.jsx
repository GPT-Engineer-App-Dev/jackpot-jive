import React from "react";
import { Box } from "@chakra-ui/react";

const confettiStyles = {
  position: "absolute",
  animation: "confetti-animation 1.5s linear infinite",
};

const Confetti = () => {
  const confettiPieces = Array.from({ length: 20 }).map((_, index) => (
    <Box
      key={index}
      sx={confettiStyles}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    >
      🎉
    </Box>
  ));

  return <>{confettiPieces}</>;
};

export default Confetti;
