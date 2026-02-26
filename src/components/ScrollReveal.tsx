import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps extends MotionProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  distance?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  distance = 40,
  className = "",
  ...props
}: ScrollRevealProps) => {
  // Define where the element should start animating from
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      // margin: "-10%" ensures it triggers perfectly on both mobile and laptop 
      // just before it enters the center of the screen
      viewport={{ once: true, margin: "-10%" }} 
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.25, 0.46, 0.45, 0.94] // Premium "easeOut" curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;