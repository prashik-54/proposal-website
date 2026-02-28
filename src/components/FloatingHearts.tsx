import { useMemo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  // We need to wait for the page to mount before we can teleport the portal to the body
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const hearts = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      size: Math.random() * 24 + 10,
      startX: Math.random() * 100,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.15 + 0.05,
      swayAmount: Math.random() * 60 - 30,
      rotationStart: Math.random() * 30 - 15,
      rotationEnd: Math.random() * 60 - 30,
      isBlurred: Math.random() > 0.6
    }));
  }, []);

  // If the page hasn't mounted yet, render nothing
  if (!mounted) return null;

  // THE FIX: createPortal teleports this div outside of your PageWrapper animations!
  return createPortal(
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: `${heart.startX}%`,
            opacity: heart.opacity,
            filter: heart.isBlurred ? 'blur(3px)' : 'blur(0px)',
          }}
          initial={{ 
            y: "110vh", 
            x: 0, 
            rotate: heart.rotationStart 
          }}
          animate={{ 
            y: "-20vh", 
            x: [0, heart.swayAmount, -heart.swayAmount, 0],
            rotate: [heart.rotationStart, heart.rotationEnd, heart.rotationStart]
          }}
          transition={{
            y: { duration: heart.duration, repeat: Infinity, ease: "linear", delay: heart.delay },
            x: { duration: heart.duration / 2, repeat: Infinity, ease: "easeInOut", delay: heart.delay },
            rotate: { duration: heart.duration / 2, repeat: Infinity, ease: "easeInOut", delay: heart.delay }
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>,
    document.body // This targets the very base of your website document
  );
};

export default FloatingHearts;