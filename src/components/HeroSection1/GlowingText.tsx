import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface GlowingTextProps {
  text: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const GlowingText: React.FC<GlowingTextProps> = ({ text, variant = 'h1' }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <motion.div
        animate={{
          textShadow: [
            '0 0 20px rgba(182, 36, 255, 0.5)',
            '0 0 40px rgba(182, 36, 255, 0.3)',
            '0 0 20px rgba(182, 36, 255, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Typography
          variant={variant}
          sx={{
            background: 'linear-gradient(45deg, #b624ff, #2196f3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {text}
        </Typography>
      </motion.div>
    </Box>
  );
};