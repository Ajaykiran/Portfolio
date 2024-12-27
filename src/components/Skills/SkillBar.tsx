import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'linear-gradient(45deg, #b624ff, #2196f3)' 
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {name}
      </Typography>
      <Box
        sx={{
          height: '8px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '4px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            height: '100%',
            background: color,
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
        <motion.div
          style={{
            height: '100%',
            width: '10px',
            background: 'rgba(255,255,255,0.3)',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          animate={{
            left: ['0%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </Box>
    </Box>
  );
};