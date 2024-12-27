import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { theme } from './theme';
import { GlowingNavbar } from './components/Navbar/GlowingNavbar';
import { AboutSection } from './components/About/AboutCard';
import { FloatingIcons } from './components/HeroSection/FloatingIcons';
import { GlowingText } from './components/HeroSection/GlowingText';
import { SkillBar } from './components/Skills/SkillBar';
import { EnhancedProjectCard } from './components/Projects/EnhancedProjectCard';
import { EnhancedContactForm } from './components/Contact/EnhancedContactForm';
import { AnimatedSection } from './components/AnimatedSection';
import { HeroContent } from './components/HeroSection/HeroContent';
import { SkillsSection } from './components/Skills/SkillSection';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'WebSocket'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using deep learning models.',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask'],
    links: { github: '#' }
  }
];


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)',
      }}>
        <GlowingNavbar />

        {/* Hero Section */}
        <AnimatedSection
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '20px'
          }}
        >
          <FloatingIcons />
          <HeroContent />
        </AnimatedSection>
        
        <Container>
          {/* About Section */}
          <AnimatedSection sx={{ py: 8 }}>
            <AboutSection />
          </AnimatedSection>

          {/* Skills Section */}
          <AnimatedSection sx={{ py: 8 }}>
            <SkillsSection />
          </AnimatedSection>

          {/* Projects Section */}
          <AnimatedSection sx={{ py: 8 }}>
            <GlowingText text="Projects" variant="h2" />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(3, 1fr)',
                },
                gap: 4,
                mt: 4,
              }}
            >
              {projects.map((project, index) => (
                <EnhancedProjectCard key={index} {...project} />
              ))}
            </Box>
          </AnimatedSection>

          {/* Contact Section */}
          <AnimatedSection sx={{ py: 8, mb: 8 }}>
            <GlowingText text="Contact Me" variant="h2" />
            <EnhancedContactForm />
          </AnimatedSection>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;