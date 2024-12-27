import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { GlowingCard } from '../common/GlowingCard';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  links,
}) => {
  return (
    <GlowingCard
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          sx={{
            height: 200,
            background: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {technologies.map((tech, index) => (
            <Typography
              key={index}
              variant="caption"
              sx={{
                px: 1,
                py: 0.5,
                borderRadius: 1,
                background: 'rgba(182, 36, 255, 0.1)',
                color: '#b624ff',
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {links.github && (
            <Link href={links.github} target="_blank" color="primary">
              GitHub
            </Link>
          )}
          {links.live && (
            <Link href={links.live} target="_blank" color="primary">
              Live Demo
            </Link>
          )}
        </Box>
      </Box>
    </GlowingCard>
  );
};