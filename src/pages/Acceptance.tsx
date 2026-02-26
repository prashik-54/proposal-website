import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gem } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

// --- EFFECTS ---
const HeartBurst = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const spread = isMobile ? 250 : 600;
  
  const hearts = Array.from({ length: isMobile ? 25 : 40 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * spread,
    y: (Math.random() - 0.5) * spread - (Math.random() * 100),
    scale: 0.5 + Math.random() * 1.5,
    rotation: Math.random() * 360,
    delay: Math.random() * 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{ x: heart.x, y: heart.y, scale: heart.scale, opacity: 0, rotate: heart.rotation }}
          transition={{ duration: 1.5, delay: heart.delay, ease: "easeOut" }}
          className="absolute"
        >
          <Heart className="w-8 h-8 text-primary fill-primary drop-shadow-xl" />
        </motion.div>
      ))}
    </div>
  );
};

const Confetti = () => {
  const confetti = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    color: ['#a5f3fc', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ y: '100vh', opacity: 0, rotate: 720 }}
          transition={{ duration: piece.duration, delay: piece.delay, repeat: Infinity, ease: "linear" }}
          className="absolute w-3 h-3"
          style={{ left: `${piece.left}%`, backgroundColor: piece.color, borderRadius: Math.random() > 0.5 ? '50%' : '2px' }}
        />
      ))}
    </div>
  );
};

const Acceptance = () => {
  const [accepted, setAccepted] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newX = Math.random() * (containerRect.width - 150) - (containerRect.width / 2 - 75);
      const newY = Math.random() * (containerRect.height - 150) - (containerRect.height / 2 - 75);
      setNoBtnPosition({ x: newX, y: newY });
    }
  };

  const handleYes = () => {
    setShowBurst(true);
    setTimeout(() => {
      setAccepted(true);
      setShowBurst(false);
    }, 1200);
  };

  return (
    <PageWrapper>
      {showBurst && <HeartBurst />}
      {accepted && <Confetti />}

      <div ref={containerRef} className="container mx-auto px-4 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full" />
        </div>

        <AnimatePresence mode="wait">
          {!accepted ? (
            <motion.div key="question" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} className="text-center z-10 max-w-2xl w-full">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="mb-10 inline-block relative">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-pulse" />
                <Gem className="w-20 h-20 md:w-24 md:h-24 text-primary relative z-10 drop-shadow-2xl" />
              </motion.div>

              <h1 className="romantic-heading text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
                I've made my promises.
              </h1>
              <p className="font-romantic text-3xl sm:text-4xl md:text-5xl text-primary mb-12 italic">
                Will you accept this ring, and my heart?
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative min-h-[10rem] md:min-h-[6rem]">
                <Button size="lg" onClick={handleYes} className="text-xl px-10 py-7 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 bg-primary text-primary-foreground z-20">
                  Yes, I Trust You 💍
                </Button>

                <motion.div
                  animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onHoverStart={handleNoHover}
                  onClick={handleNoHover}
                  className="relative md:static z-10"
                >
                  <Button variant="outline" size="lg" className="text-xl px-10 py-7 rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm">
                    I need time
                  </Button>
                </motion.div>
              </div>
            </motion.div>

          ) : (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: "spring" }} className="text-center z-10 max-w-2xl">
              <motion.div animate={{ rotate: [0, 10, -10, 10, 0] }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-8">
                <Sparkles className="w-24 h-24 text-primary mx-auto drop-shadow-lg" />
              </motion.div>
              
              <h1 className="romantic-heading text-5xl md:text-7xl mb-8 text-primary drop-shadow-sm">
                Our Forever Begins.
              </h1>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="romantic-card p-8 md:p-12 mx-auto bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[2rem]">
                <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-6 italic font-light leading-relaxed">
                  "I will spend the rest of my life proving that you made the right choice today."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-primary/40" />
                  <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-heart" />
                  <div className="h-px w-12 bg-primary/40" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-12">
                <p className="text-2xl text-muted-foreground font-light mb-2">Eternally yours,</p>
                <p className="font-romantic text-4xl sm:text-5xl md:text-6xl text-primary">Prashik ❤️</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

export default Acceptance;