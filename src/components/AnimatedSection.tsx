import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps extends BoxProps {
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </Box>
  );
};