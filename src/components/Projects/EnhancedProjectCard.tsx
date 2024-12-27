import React from 'react';
import { Box, Typography, Link, Paper, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const GlowingCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(45deg, transparent, rgba(182, 36, 255, 0.1), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease',
  },
  '&:hover::before': {
    transform: 'translateX(100%)',
  },
}));

const TechChip = styled(Box)(({ theme }) => ({
  padding: '4px 12px',
  borderRadius: '12px',
  background: 'rgba(182, 36, 255, 0.1)',
  color: '#b624ff',
  fontSize: '0.75rem',
  display: 'inline-block',
}));

export const EnhancedProjectCard = ({ title, description, image, technologies, links }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GlowingCard>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{
            height: 200,
            background: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7))',
            },
          }}
        />
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <TechChip>{tech}</TechChip>
              </motion.div>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {links.github && (
              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  href={links.github}
                  target="_blank"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'primary.main',
                    textDecoration: 'none',
                  }}
                >
                  <Github size={20} />
                  GitHub
                </Link>
              </motion.div>
            )}
            {links.live && (
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href={links.live}
                  target="_blank"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'primary.main',
                    textDecoration: 'none',
                  }}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </Link>
              </motion.div>
            )}
          </Box>
        </Box>
      </GlowingCard>
    </motion.div>
  );
};