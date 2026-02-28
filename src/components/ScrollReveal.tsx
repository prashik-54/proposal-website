import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// We extend HTMLMotionProps so you can still pass standard Framer Motion props if needed
interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  distance?: number;
  blurAmount?: string; // Allows you to control the cinematic blur
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  distance = 40,
  blurAmount = "blur(8px)", // Default to a gorgeous, cinematic soft focus
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
        filter: blurAmount, // Starts blurred
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        filter: "blur(0px)" // Pulls sharply into focus
      }}
      // margin: "-10%" ensures it triggers perfectly on both mobile and laptop 
      // just before it enters the center of the screen
      viewport={{ once: true, margin: "-10%" }} 
      transition={{ 
        duration: 0.9, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] // The ultra-premium Apple-style deceleration curve
      }}
      // Hardware acceleration ensures the blur doesn't stutter on mobile phones
      className={cn("transform-gpu will-change-[opacity,transform,filter]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;