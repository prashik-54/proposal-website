import { useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const GlobalBackground = () => {
  // We use state to check if we are on a small mobile screen
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // useMemo ensures the random math only runs ONCE when the app loads.
  // This completely stops the hearts from glitching or resetting when she scrolls.
  const particles = useMemo(() => {
    // Show fewer particles on mobile to keep performance buttery smooth
    const count = isMobile ? 15 : 25; 
    
    return Array.from({ length: count }, (_, i) => {
      const isSparkle = Math.random() > 0.7; // 30% chance to be a sparkling star instead of a heart
      const layerRank = Math.random();
      
      let blur, baseOpacity, size, duration, swayAmount;

      // Create a 3D Depth of Field Effect
      if (layerRank > 0.7) {
        // FOREGROUND: Large, fast, perfectly sharp
        blur = 0;
        baseOpacity = 0.3;
        size = Math.random() * 20 + 20; // 20px - 40px
        duration = Math.random() * 10 + 15; // 15s - 25s
        swayAmount = Math.random() * 40 + 20; 
      } else if (layerRank > 0.3) {
        // MIDGROUND: Medium, slightly blurred
        blur = 2;
        baseOpacity = 0.15;
        size = Math.random() * 15 + 10; // 10px - 25px
        duration = Math.random() * 15 + 25; // 25s - 40s
        swayAmount = Math.random() * 30 + 10;
      } else {
        // BACKGROUND: Tiny, heavily blurred, very slow
        blur = 4;
        baseOpacity = 0.08;
        size = Math.random() * 10 + 5; // 5px - 15px
        duration = Math.random() * 20 + 35; // 35s - 55s
        swayAmount = Math.random() * 15 + 5;
      }

      return {
        id: i,
        isSparkle,
        left: `${Math.random() * 100}%`,
        size,
        duration,
        swayAmount,
        blur,
        baseOpacity,
        // Negative delay means they are already floating on the screen when she opens the website
        delay: Math.random() * -30, 
        rotationStart: Math.random() * 45 - 22.5,
        rotationEnd: Math.random() * 90 - 45,
      };
    });
  }, [isMobile]); // Re-calculate only if shifting between desktop and mobile

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden dark:bg-none dark:bg-background bg-gradient-to-b from-background via-background/95 to-primary/5">
      {/* THE FIX: Added dark:bg-none dark:bg-background to force pure black in dark mode */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-primary"
          style={{
            left: particle.left,
            filter: `blur(${particle.blur}px)`,
          }}
          initial={{ 
            y: '110vh', 
            x: 0,
            rotate: particle.rotationStart,
            opacity: 0 
          }}
          animate={{
            y: '-10vh',
            x: [0, particle.swayAmount, -particle.swayAmount, 0], // Smooth, organic left/right drifting
            rotate: [particle.rotationStart, particle.rotationEnd, particle.rotationStart], // Gentle twisting
            opacity: [0, particle.baseOpacity, particle.baseOpacity, 0], // Fades in beautifully, then fades out at the top
          }}
          transition={{
            y: { duration: particle.duration, repeat: Infinity, ease: "linear", delay: particle.delay },
            x: { duration: particle.duration * 0.6, repeat: Infinity, ease: "easeInOut", delay: particle.delay },
            rotate: { duration: particle.duration * 0.8, repeat: Infinity, ease: "easeInOut", delay: particle.delay },
            opacity: { duration: particle.duration, repeat: Infinity, ease: "linear", delay: particle.delay }
          }}
        >
          {particle.isSparkle ? (
            <Sparkles width={particle.size} height={particle.size} className="animate-pulse" />
          ) : (
            <Heart width={particle.size} height={particle.size} fill="currentColor" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GlobalBackground;