import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Database, Code, Globe, Server, Settings, Cloud } from 'lucide-react';

const icons = [
  { Icon: Database, x: -20, y: 10 },
  { Icon: Code, x: 30, y: -20 },
  { Icon: Globe, x: -25, y: -15 },
  { Icon: Server, x: 15, y: 25 },
  { Icon: Settings, x: -10, y: -30 },
  { Icon: Cloud, x: 20, y: 15 },
];

export const FloatingIcons = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        opacity: 0.2,
      }}
    >
      {icons.map(({ Icon, x, y }, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: `${50 + x}%`,
            top: `${50 + y}%`,
          }}
          animate={{
            x: [x, -x, x],
            y: [y, -y, y],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </Box>
  );
};