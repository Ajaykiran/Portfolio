import React from 'react';
import { Box, TextField, Button, styled } from '@mui/material';
import { motion } from 'framer-motion';

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

export const ContactForm = () => {
  return (
    <Box
      component={motion.form}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}
    >
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
      <Button
        component={motion.button}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        sx={{ mt: 2 }}
      >
        Send Message
      </Button>
    </Box>
  );
};