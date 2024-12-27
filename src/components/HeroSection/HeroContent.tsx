import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { GlowingText } from './GlowingText';
import { CodeAnimation } from './CodeAnimation';
import { GlowingOrbs } from './GlowingOrbs';
import { ParticleNetwork } from './ParticleNetwork';
import { Github, Linkedin, Mail } from 'lucide-react';

export const HeroContent = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <CodeAnimation />
      <GlowingOrbs />
      <ParticleNetwork />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ zIndex: 1, textAlign: 'center' }}
      >
        <GlowingText text="Ajay Kiran" variant="h1" />
        <GlowingText text="Software Developer" variant="h2" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mt: 2,
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Crafting elegant digital solutions with modern technologies
          </Typography>

          <motion.div
            style={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              marginBottom: 4,
            }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                href="https://github.com/yourusername"
                target="_blank"
                sx={{
                  color: '#fff',
                  backgroundColor: 'transparent',
                  borderRadius: '50%',
                  padding: '12px',
                  margin: '15px',
                  '&:hover': {
                    backgroundColor: '#08080805',
                    boxShadow: '0 0 15px rgba(182, 36, 255, 0.5)',
                  },
                }}
              >
                <Github size={24} />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                sx={{
                  color: '#fff',
                  backgroundColor: 'transparent',
                  borderRadius: '50%',
                  padding: '12px',
                  margin: '15px',
                  '&:hover': {
                    backgroundColor: '#08080805',
                    boxShadow: '0 0 15px rgba(182, 36, 255, 0.5)',
                  },
                }}
              >
                <Linkedin size={24} />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                href="mailto:your.email@example.com"
                target="_blank"
                sx={{
                  color: '#fff',
                  backgroundColor: 'transparent',
                  borderRadius: '50%',
                  padding: '12px',
                  margin: '15px',
                  '&:hover': {
                    backgroundColor: '#08080805',
                    boxShadow: '0 0 15px rgba(182, 36, 255, 0.5)',
                  },
                }}
              >
                <Mail size={24} />
              </IconButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
};
