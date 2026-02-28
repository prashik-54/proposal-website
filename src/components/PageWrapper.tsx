import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: ReactNode;
  className?: string; // Added so you can pass custom spacing to specific pages if needed
}

const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  // 1. Instant Scroll Fix
  useEffect(() => {
    // Using 'instant' prevents the browser from awkwardly sliding up 
    // when she clicks a link, ensuring the new page starts perfectly at the top.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <motion.div
      // 2. Cinematic Entrance: Starts slightly blurred and lower
      initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
      
      // 3. Glides perfectly into sharp focus
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      
      // 4. Floats gently upward as she leaves the page
      exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
      
      // 5. Custom "Apple-style" cubic-bezier curve for premium smoothness
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      
      className={`
        relative w-full 
        min-h-[100dvh] /* Dynamic Viewport Height: Fixes mobile Safari/Chrome address bar issues */
        pt-24 pb-12 md:pt-32 /* Extra top padding so the floating navbar never covers content */
        flex flex-col
        transform-gpu will-change-[opacity,transform,filter] /* Hardware Acceleration */
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;