import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Database as ReactIcon,
  Database,
  Server,
  Code2,
  Cloud,
  Cpu,
  Globe,
  Terminal
} from 'lucide-react';

const techIcons = [
  { Icon: ReactIcon, color: '#61DAFB', delay: 0 },
  { Icon: Database, color: '#FF6B6B', delay: 0.2 },
  { Icon: Server, color: '#4CAF50', delay: 0.4 },
  { Icon: Code2, color: '#FFC107', delay: 0.6 },
  { Icon: Cloud, color: '#2196F3', delay: 0.8 },
  { Icon: Cpu, color: '#9C27B0', delay: 1 },
  { Icon: Globe, color: '#00BCD4', delay: 1.2 },
  { Icon: Terminal, color: '#FF5722', delay: 1.4 },
];

export const FloatingTechStack = () => {
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
      {techIcons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Icon size={24} color={color} />
        </motion.div>
      ))}
    </Box>
  );
};