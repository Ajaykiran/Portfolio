import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const orbs = [
  { size: 100, color: '#b624ff', x: -20, y: -20 },
  { size: 80, color: '#2196f3', x: 30, y: 30 },
  { size: 60, color: '#9c27b0', x: -40, y: 40 },
];

export const GlowingOrbs = () => {
  return (
    <Box sx={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${orb.color}20, ${orb.color}10, transparent)`,
            filter: 'blur(20px)',
            left: `calc(50% + ${orb.x}%)`,
            top: `calc(50% + ${orb.y}%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, orb.x * 2, 0],
            y: [0, orb.y * 2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </Box>
  );
};