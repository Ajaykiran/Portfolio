import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { GlowingText } from './GlowingText';
import { MatrixRain } from './MatrixRain';
import { FloatingTechStack } from './FloatingTechStack';
import { InteractiveBackground } from './InteractiveBackground';
import { ArrowRight } from 'lucide-react';

export const HeroContent = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <MatrixRain />
      <InteractiveBackground />
      <FloatingTechStack />
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
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
                lineHeight: 1.8,
              }}
            >
              Crafting elegant digital solutions with modern technologies.
              Transforming ideas into innovative web applications with clean code
              and modern architecture.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight />}
                  sx={{
                    background: 'linear-gradient(45deg, #b624ff, #2196f3)',
                    px: 4,
                    py: 1.5,
                    borderRadius: '30px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    boxShadow: '0 0 20px rgba(182, 36, 255, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #2196f3, #b624ff)',
                    },
                  }}
                >
                  View Projects
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};