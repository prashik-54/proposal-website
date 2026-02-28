import { useMemo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hearts = useMemo(() => {
    // INCREASED DENSITY AGAIN: 50 on mobile, 100 on desktop
    const count = isMobile ? 50 : 100; 
    
    return Array.from({ length: count }).map((_, i) => {
      const isForeground = Math.random() > 0.8; // 20% float IN FRONT of everything
      
      return {
        id: i,
        size: isForeground ? Math.random() * 25 + 15 : Math.random() * 20 + 8, 
        startX: Math.random() * 100, // Spreads them evenly across 100% of the width
        duration: isForeground ? Math.random() * 10 + 15 : Math.random() * 20 + 20, 
        delay: Math.random() * -60, // Scatters them instantly
        opacity: isForeground ? Math.random() * 0.4 + 0.2 : Math.random() * 0.25 + 0.05, 
        swayAmount: Math.random() * 60 + 20, 
        rotationStart: Math.random() * 45 - 22.5,
        rotationEnd: Math.random() * 90 - 45,
        isBlurred: isForeground ? false : Math.random() > 0.4,
        isForeground
      };
    });
  }, [isMobile]);

  if (!mounted) return null;

  const backgroundHearts = hearts.filter(h => !h.isForeground);
  const foregroundHearts = hearts.filter(h => h.isForeground);

  const renderHeartLayer = (heartList, zIndex) => (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0, // This guarantees the container covers 100% of the glass of the screen
        pointerEvents: 'none', 
        zIndex: zIndex, 
        overflow: 'hidden' 
      }}
    >
      {heartList.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary will-change-transform"
          style={{
            left: `${heart.startX}%`,
            bottom: "-10%", // Physically places them below the visible screen to start
            opacity: heart.opacity,
            filter: heart.isBlurred ? 'blur(4px)' : 'blur(0px)',
          }}
          // We animate from 0 to -120vh to guarantee they travel all the way up and off the top of the screen
          animate={{ 
            y: ["0vh", "-120vh"], 
            x: [0, heart.swayAmount, -heart.swayAmount, 0], 
            rotate: [heart.rotationStart, heart.rotationEnd, heart.rotationStart] 
          }}
          transition={{
            y: { duration: heart.duration, repeat: Infinity, ease: "linear", delay: heart.delay },
            x: { duration: heart.duration * 0.6, repeat: Infinity, ease: "easeInOut", delay: heart.delay },
            rotate: { duration: heart.duration * 0.8, repeat: Infinity, ease: "easeInOut", delay: heart.delay }
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );

  return createPortal(
    <>
      {/* BACKGROUND HEARTS: zIndex 1 sits above the black background but below your cards */}
      {renderHeartLayer(backgroundHearts, 1)}

      {/* FOREGROUND HEARTS: zIndex 9999 sits above the navbar, above the text, above everything */}
      {renderHeartLayer(foregroundHearts, 9999)}
    </>,
    document.body
  );
};

export default FloatingHearts;