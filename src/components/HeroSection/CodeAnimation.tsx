import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const codeLines = [
  'const developer = {',
  '  name: "Ajay Kiran",',
  '  role: "Software Developer",',
  '  skills: ["React", "Node.js", "TypeScript"],',
  '  passion: "Building amazing experiences"',
  '};',
  '',
  'function createInnovation() {',
  '  return passion + skills.map(transform);',
  '}',
];

export const CodeAnimation = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: 10,
          // width: '100%',
          // height: '100%',
          opacity: 0.1,
          fontFamily: 'monospace',
          fontSize: '14px',
          color: '#b624ff',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 10,
            }}
            style={{ marginLeft: line.startsWith(' ') ? '20px' : '0' }}
          >
            {line}
          </motion.div>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          // width: '100%',
          // height: '100%',
          opacity: 0.1,
          fontFamily: 'monospace',
          fontSize: '14px',
          color: '#b624ff',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 10,
            }}
            style={{ marginLeft: line.startsWith(' ') ? '20px' : '0' }}
          >
            {line}
          </motion.div>
        ))}
      </Box>
    </>
  );
};