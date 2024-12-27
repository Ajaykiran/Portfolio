import React from 'react';
import { Box, Typography, Paper, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Brain, Zap } from 'lucide-react';
import { GlowingText } from '../HeroSection/GlowingText';

const GlowingPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #b624ff, transparent)',
  },
}));

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <GlowingPaper>
      <Box sx={{ position: 'relative' }}>
        <motion.div
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon size={40} color="#b624ff" />
        </motion.div>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </GlowingPaper>
  </motion.div>
);

export const AboutSection = () => {
  const features = [
    {
      Icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.',
    },
    {
      Icon: Brain,
      title: 'Problem Solver',
      description: 'Analytical thinker with a passion for solving complex challenges.',
    },
    {
      Icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and methodologies.',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <GlowingText text="About Me" variant="h2" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: 800,
            mx: 'auto',
            textAlign: 'center',
            mb: 6,
            lineHeight: 1.8,
          }}
        >
          I'm a passionate software developer with expertise in building modern web applications.
          My focus is on creating elegant solutions through clean code and innovative design.
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </Box>
    </Box>
  );
};