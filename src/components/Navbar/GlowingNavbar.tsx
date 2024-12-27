import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, Container, styled } from '@mui/material';
import { motion, useScroll } from 'framer-motion';

const GlowingButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  background: 'transparent',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: -2,
    left: 0,
    width: 0,
    height: '2px',
    background: 'linear-gradient(45deg, #b624ff, #2196f3)',
    transition: 'width 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));

export const GlowingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 50));
  }, [scrollY]);

  return (
    <AppBar
      component={motion.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        background: isScrolled
          ? 'rgba(0, 0, 0, 0.8)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled
          ? '0 0 20px rgba(182, 36, 255, 0.2)'
          : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlowingButton>{item}</GlowingButton>
              </motion.div>
            ))}
          </Box>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GlowingButton style={{backgroundColor: '#b624ff1a'}}>My Resume</GlowingButton>
          </motion.div>

        </Box>
      </Container>
    </AppBar>
  );
};