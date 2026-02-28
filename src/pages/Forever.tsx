import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Infinity as InfinityIcon, Sun, CloudRain, Star, Sparkles } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const promises = [
  { 
    icon: Sun, 
    title: "I choose you on the brightest days.", 
    description: "When we are laughing until we can't breathe, when everything feels easy, and the world is just ours to enjoy.",
    glow: "group-hover:shadow-[0_0_40px_rgba(201,24,74,0.15)]" // Soft primary glow
  },
  { 
    icon: CloudRain, 
    title: "I choose you on the heaviest days.", 
    description: "When the storms come, when we are tired, stressed, or frustrated. Love isn't about running when it gets hard. It's about holding your hand tighter in the dark.",
    glow: "group-hover:shadow-[0_0_40px_rgba(201,24,74,0.25)]" // Deeper primary glow
  },
  { 
    icon: Star, 
    title: "I choose you in every lifetime.", 
    description: "You are not just a passing chapter in my story. You are the constellation my entire world revolves around. Today, tomorrow, and always.",
    glow: "group-hover:shadow-[0_0_40px_rgba(255,143,171,0.2)]" // Accent glow
  },
];

const Forever = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // Reduced from 3.5s to 1.8s for a much more natural, conversational pacing
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-4xl relative overflow-hidden pb-24 md:overflow-visible">
        
        {/* Giant Ambient Infinity Background - Hardware Accelerated for Mobile */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center opacity-[0.03] overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="transform-gpu will-change-transform"
          >
            <InfinityIcon className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] text-primary" strokeWidth={0.5} />
          </motion.div>
        </div>

        {/* Hero Section - Reduced top padding, unified global heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20 pt-10 md:pt-16"
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-block mb-4 md:mb-6"
          >
            <InfinityIcon className="w-12 h-12 md:w-16 md:h-16 text-primary relative z-10 drop-shadow-md" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </motion.div>
          
          {/* Globally matched heading style */}
          <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-sm">
            Forever Means You
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic px-2">
            "Forever isn't an amount of time. It's a choice I make every single morning when I wake up."
          </p>
        </motion.div>

        {/* The Expanded Promises - Improved Glassmorphism for Mobile */}
        <div className="flex flex-col gap-6 md:gap-8 mb-16 md:mb-24 relative z-10">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              className={`group flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 bg-white/50 dark:bg-black/20 backdrop-blur-xl border border-primary/10 shadow-sm p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 ${promise.glow}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background/80 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-md border border-primary/10 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <promise.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-accent transition-colors relative z-10" />
              </div>
              
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl sm:text-2xl font-romantic text-primary mb-2 sm:mb-3">
                  {promise.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-light leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Typing Confession */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10 px-2 sm:px-0"
        >
          <div className="bg-white/60 dark:bg-black/30 backdrop-blur-2xl border border-primary/10 shadow-xl p-8 sm:p-10 md:p-14 rounded-[2.5rem] inline-block max-w-2xl w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
            
            <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-6 sm:mb-8 animate-pulse-heart drop-shadow-md relative z-10" />
            
            {/* Dynamic height container so text doesn't clip on small screens */}
            <div className="min-h-[4rem] sm:min-h-[5rem] flex items-center justify-center relative z-10">
              <AnimatePresence mode="wait">
                {showTypewriter ? (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl text-primary font-romantic tracking-wide drop-shadow-sm leading-tight">
                      I'm not going anywhere, Vanshu.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="typing"
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-2 sm:gap-3 bg-secondary/50 px-5 sm:px-6 py-3 sm:py-4 rounded-full"
                  >
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }} // Triggered right after typing finishes
          className="text-center relative z-10 px-4"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary/40 mx-auto mb-4 sm:mb-6 animate-pulse" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Every memory we make just proves to me that forever is exactly what I want.
          </p>
          <Link to="/photo" className="inline-block group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse" />
            <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-primary-foreground/10">
              See Our Moment <Heart className="ml-3 w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Forever;