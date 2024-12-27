import { Card, CardProps, styled } from '@mui/material';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  position: 'relative',
  overflow: 'visible',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    right: '-2px',
    bottom: '-2px',
    left: '-2px',
    background: 'linear-gradient(45deg, #b624ff, #2196f3)',
    borderRadius: '16px',
    zIndex: -1,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const MotionCard = motion(StyledCard);

export const GlowingCard: React.FC<CardProps> = (props) => {
  return (
    <MotionCard
      {...props}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  );
};