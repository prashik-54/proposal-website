import { motion } from 'framer-motion';
import { Heart, ArrowRight, Sparkles, Stars } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import FloatingHearts from '@/components/FloatingHearts';

const Landing = () => {
  return (
    <PageWrapper>
      <FloatingHearts />
      
      <div className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
        
        {/* --- SOFT AMBIENT GLOW --- */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[90vw] max-w-[700px] h-[700px] bg-primary/10 blur-[120px] rounded-full transform-gpu"
          />
        </div>

        {/* --- THE EMOTIONAL LETTER --- */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto mt-[-4vh]">
          
          {/* Top Decorative Stars */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <Stars className="w-5 h-5 text-primary/60 animate-pulse" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-primary/80 uppercase font-medium">
              A Custom-Coded Forever
            </span>
            <Stars className="w-5 h-5 text-primary/60 animate-pulse delay-150" />
          </motion.div>

          {/* --- THE MASTERPIECE HEADING --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="mb-12 w-full relative"
          >
            {/* Inner text glow aura */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full w-3/4 mx-auto h-full -z-10" />
            
            <p className="text-xs sm:text-sm md:text-base tracking-[0.4em] text-muted-foreground uppercase font-light mb-6">
              To the girl who changed everything
            </p>
            
            <h1 className="romantic-heading text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[1.1] pb-4 relative inline-block">
              <span className="block bg-gradient-to-b from-foreground via-foreground/80 to-primary/80 bg-clip-text text-transparent drop-shadow-sm">
                My Forever,
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(201,24,74,0.4)] mt-2">
                Vanshu.
              </span>
              {/* Little floating sparkle specifically on her name */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 right-0 sm:-right-8"
              >
                <Sparkles className="w-8 h-8 text-accent/80 drop-shadow-lg" />
              </motion.div>
            </h1>
          </motion.div>

          {/* The Deep Emotional Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            className="relative w-full space-y-6 sm:space-y-8 px-4 sm:px-8 mb-16"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light italic leading-snug">
              "There are billions of websites on the internet, but this exact space was created entirely, exclusively, and completely for you."
            </p>
            
            <div className="flex items-center justify-center gap-4 py-2 opacity-50">
              <div className="h-px w-12 bg-primary/40" />
              <Heart className="w-4 h-4 text-primary fill-primary/20 animate-pulse-heart" />
              <div className="h-px w-12 bg-primary/40" />
            </div>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              I didn't use a template or just buy a gift. I sat down and hand-coded every single page, every animation, and every color from scratch with you on my mind. I spent hours building this because I wanted to show you the kind of effort you truly deserve.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Ever since that first spark in Nagpur, you have been my greatest blessing. I am so unbelievably thankful that you walked into my life. This website is a permanent digital home to protect our memories and to hold the promises I intend to keep for the rest of my life.
            </p>

            <p className="text-xl sm:text-2xl text-primary/90 font-medium italic mt-6">
              I couldn't just write you a letter... so I built you a world.
            </p>
          </motion.div>

          {/* The Gateway Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2, type: "spring", stiffness: 80 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 to-accent/60 rounded-full blur-lg opacity-40 group-hover:opacity-80 transition duration-700 animate-pulse" />
            
            <Link to="/story" className="block relative">
              <button className="relative flex items-center justify-center bg-background/90 hover:bg-white/10 text-primary border border-primary/40 px-10 py-5 sm:px-14 sm:py-7 rounded-full text-lg sm:text-xl shadow-[0_10px_30px_rgba(201,24,74,0.15)] backdrop-blur-md transition-all duration-500 hover:scale-[1.03] overflow-hidden">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                
                <Heart className="w-5 h-5 mr-3 text-primary fill-primary group-hover:animate-pulse-heart" />
                <span className="relative z-10 font-medium tracking-wide">
                  See Our Story
                </span>
                <ArrowRight className="ml-3 w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
              </button>
            </Link>
          </motion.div>

        </div>

        {/* --- SIGNATURE BOTTOM --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className="absolute bottom-6 w-full px-4 flex flex-col items-center justify-center gap-1 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-muted-foreground/40 uppercase pointer-events-none"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-primary/40" />
            <span>CODED BY PRASHIK • FOR VANSHU</span>
            <Sparkles className="w-3 h-3 text-primary/40" />
          </div>
          <span className="opacity-70">EST. NAGPUR 2026</span>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Landing;