import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.div
      // 1. Starts slightly lower, faded, and blurred
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      
      // 2. Glides perfectly into place, becoming sharp
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      
      // 3. Floats slightly upward as it fades out to the next page
      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
      
      // 4. Custom "Apple-style" cubic-bezier curve for premium smoothness
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      
      // 5. Hardware acceleration to prevent mobile stuttering
      className={cn(
        "w-full transform-gpu will-change-[opacity,transform,filter]", 
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;