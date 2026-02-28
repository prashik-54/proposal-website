import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Smart Auto-Play: Waits for ANY interaction on the website to bypass browser auto-play blocks
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((error) => console.log("Autoplay waiting for direct click.", error));
      }
      
      // Clean up listeners once triggered
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.log("Play failed", e));
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100]">
      {/* Make sure 'our-song.mp3' is in your public folder! */}
      <audio ref={audioRef} src="/our-song.mp3" loop preload="auto" />
      
      <motion.button
        onClick={togglePlay}
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-primary/20 shadow-[0_10px_30px_rgba(201,24,74,0.15)] overflow-hidden focus:outline-none"
      >
        {/* Subtle glowing pulse behind the button when playing */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" 
            />
          )}
        </AnimatePresence>
        
        {/* The Audio Visualizer / Icons */}
        <div className="relative z-10 flex items-center justify-center text-primary transition-colors">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-end justify-center gap-[3px] h-5"
              >
                {/* Animated Waveform Bars */}
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ["4px", "16px", "4px"] }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: Infinity, 
                      delay: i * 0.15, 
                      ease: "easeInOut" 
                    }}
                    className="w-[3px] sm:w-[4px] bg-primary rounded-full origin-bottom"
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="paused"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center justify-center"
              >
                <Music className="w-6 h-6 sm:w-7 sm:h-7 opacity-90 drop-shadow-sm" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover Tooltip (Hidden on mobile) */}
        <div className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-md border border-primary/10 text-xs font-medium text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block shadow-lg">
          {isPlaying ? "Pause Song" : "Play Our Song"}
        </div>
      </motion.button>
    </div>
  );
};

export default BackgroundMusic;