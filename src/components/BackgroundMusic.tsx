import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Volume2 } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // This attempts to auto-play the music once the user interacts with the page anywhere
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.log("Autoplay prevented by browser until user clicks.", error));
      }
      // Remove listener after first interaction
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.log("Play failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] group">
      {/* Put your romantic song in the 'public' folder. 
        Example: public/our-song.mp3 
      */}
      <audio ref={audioRef} src="/our-song.mp3" loop />
      
      {/* Volume Slider Popup */}
      <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-3 shadow-xl flex flex-col items-center gap-2">
          <div className="h-24 w-6 flex items-center justify-center relative">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="absolute w-24 h-1 bg-white/50 rounded-lg appearance-none cursor-pointer accent-primary -rotate-90 origin-center"
            />
          </div>
          <Volume2 className="w-4 h-4 text-primary" />
        </div>
      </div>

      <motion.button
        onClick={togglePlay}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-xl overflow-hidden"
      >
        {/* Subtle glowing pulse behind the button when playing */}
        {isPlaying && (
          <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full" />
        )}
        
        <div className="relative z-10 text-primary group-hover:text-primary/80 transition-colors">
          {isPlaying ? (
            <Pause className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          ) : (
            <Music className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </div>
      </motion.button>
    </div>
  );
};

export default BackgroundMusic;