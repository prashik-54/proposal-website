import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Infinity, Sun, CloudRain, Star, Sparkles } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const promises = [
  { 
    icon: Sun, 
    title: "I choose you on the brightest days.", 
    description: "When we are laughing until we can't breathe, when everything feels easy, and the world is just ours to enjoy.",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)]"
  },
  { 
    icon: CloudRain, 
    title: "I choose you on the heaviest days.", 
    description: "When the storms come, when we are tired, stressed, or frustrated. Love isn't about running when it gets hard. It's about holding your hand tighter in the dark.",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
  },
  { 
    icon: Star, 
    title: "I choose you in every lifetime.", 
    description: "You are not just a passing chapter in my story. You are the constellation my entire world revolves around. Today, tomorrow, and always.",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
  },
];

const Forever = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // Wait a few seconds before revealing the final text, building anticipation
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-4xl relative overflow-hidden pb-24">
        
        {/* Giant Ambient Infinity Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center opacity-5 overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <Infinity className="w-[800px] h-[800px] text-primary" strokeWidth={0.5} />
          </motion.div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 pt-24 md:pt-32"
        >
          <div className="relative inline-block mb-6">
            <Infinity className="w-14 h-14 md:w-16 md:h-16 text-primary relative z-10 drop-shadow-lg" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </div>
          <h1 className="romantic-heading text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Forever Means You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic">
            "Forever isn't an amount of time. It's a choice I make every single morning when I wake up."
          </p>
        </motion.div>

        {/* The Expanded Promises */}
        <div className="flex flex-col gap-6 md:gap-8 mb-20 md:mb-28 relative z-10">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8 bg-white/40 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-3xl transition-all duration-500 ${promise.glow}`}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-primary/10">
                <promise.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-romantic text-primary mb-3">
                  {promise.title}
                </h3>
                <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Typing Confession */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl p-8 md:p-14 rounded-[3rem] inline-block max-w-2xl w-full relative overflow-hidden">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
            
            <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-8 animate-pulse-heart drop-shadow-md" />
            
            <div className="h-20 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {showTypewriter ? (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <p className="text-2xl md:text-4xl text-primary font-romantic tracking-wide drop-shadow-sm">
                      I'm not going anywhere, Vanshu.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="typing"
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-3 bg-secondary/50 px-6 py-4 rounded-full"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }} />
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
          transition={{ delay: 4.5, duration: 1 }} // Fades in AFTER the typing finishes
          className="text-center relative z-10"
        >
          <Sparkles className="w-6 h-6 text-primary/40 mx-auto mb-6 animate-pulse" />
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-xl mx-auto">
            Every memory we make just proves to me that forever is exactly what I want.
          </p>
          <Link to="/photo" className="inline-block group">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              See Our Moment <Heart className="ml-3 w-5 h-5 fill-current group-hover:animate-pulse-heart" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Forever;