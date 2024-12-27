import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export const InteractiveBackground = () => {
  const gridSize = 20;
  const dots = Array.from({ length: gridSize * gridSize }, (_, i) => ({
    id: i,
    x: (i % gridSize) * (100 / gridSize),
    y: Math.floor(i / gridSize) * (100 / gridSize),
  }));

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          style={{
            position: 'absolute',
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: 2,
            height: 2,
            backgroundColor: '#b624ff',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          whileHover={{
            scale: 4,
            opacity: 0.8,
          }}
        />
      ))}
    </Box>
  );
};