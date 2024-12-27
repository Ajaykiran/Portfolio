import React from 'react';
import { Box, Typography, Grid, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { SkillBar } from './SkillBar';
import { GlowingText } from '../HeroSection/GlowingText';

const SkillCategory = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const skills = {
  languages: [
    { name: 'JavaScript/TypeScript', percentage: 95 },
    { name: 'Python', percentage: 90 },
    { name: 'Java', percentage: 85 },
    { name: 'SQL', percentage: 88 },
  ],
  frontend: [
    { name: 'React/Next.js', percentage: 92 },
    { name: 'Vue.js', percentage: 85 },
    { name: 'HTML5/CSS3', percentage: 90 },
    { name: 'Material-UI/Tailwind', percentage: 88 },
  ],
  backend: [
    { name: 'Node.js/Express', percentage: 90 },
    { name: 'Django/Flask', percentage: 85 },
    { name: 'Spring Boot', percentage: 82 },
    { name: 'GraphQL', percentage: 80 },
  ],
  tools: [
    { name: 'Git/GitHub', percentage: 92 },
    { name: 'Docker/Kubernetes', percentage: 85 },
    { name: 'AWS/Azure', percentage: 83 },
    { name: 'CI/CD', percentage: 87 },
  ],
};

export const SkillsSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <GlowingText text="Skills & Expertise" variant="h2" />
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SkillCategory variant="h5">Programming Languages</SkillCategory>
            {skills.languages.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillCategory variant="h5">Frontend Development</SkillCategory>
            {skills.frontend.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillCategory variant="h5">Backend Development</SkillCategory>
            {skills.backend.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SkillCategory variant="h5">Tools & Technologies</SkillCategory>
            {skills.tools.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};