import React from 'react';
import { Box, TextField, Button, Paper, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

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
    inset: 0,
    background: 'linear-gradient(45deg, transparent, rgba(182, 36, 255, 0.1), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease',
  },
  '&:hover::before': {
    transform: 'translateX(100%)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ContactInfo = ({ Icon, text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{ color: '#b624ff' }}
    >
      <Icon size={24} />
    </motion.div>
    <Typography variant="body2">{text}</Typography>
  </Box>
);

export const EnhancedContactForm = () => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 4 }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlowingPaper>
          <Typography variant="h6" gutterBottom>
            Get in Touch
          </Typography>
          <Box sx={{ mb: 4 }}>
            <ContactInfo Icon={Mail} text="contact@example.com" />
            <ContactInfo Icon={Phone} text="+1 234 567 890" />
            <ContactInfo Icon={MapPin} text="New York, NY" />
          </Box>
          <form>
            <StyledTextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              required
            />
            <StyledTextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
              type="email"
            />
            <StyledTextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              required
              multiline
              rows={4}
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 2,
                  background: 'linear-gradient(45deg,#3e1f51, #b624ff,#3e1f51)',
                  textTransform: 'none',
                }}
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </GlowingPaper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlowingPaper sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ 
              background: 'linear-gradient(45deg, #b624ff, #2196f3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Let's Work Together
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </Typography>
          </Box>
        </GlowingPaper>
      </motion.div>
    </Box>
  );
};