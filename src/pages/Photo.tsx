import { motion } from 'framer-motion';
import { Heart, Camera } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Helper component for background drifting hearts - Hardware Accelerated
const DriftingHearts = () => {
  const hearts = Array.from({ length: 4 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ['100vh', '-20vh'],
            opacity: [0, 0.2, 0],
            rotate: [0, 10, -10, 0], // Added subtle sway
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            delay: i * 4,
            ease: "linear",
          }}
          className="absolute transform-gpu will-change-transform"
          style={{
            left: `${15 + i * 25}%`,
            scale: 0.6 + i * 0.2,
          }}
        >
          <Heart className="w-10 h-10 text-primary/15 fill-primary/10" />
        </motion.div>
      ))}
    </div>
  );
};

const Photo = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-5xl pb-24 relative overflow-hidden md:overflow-visible">
        
        {/* Deep Ambient Background Glow - Hardware Accelerated */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center opacity-30">
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/15 rounded-full blur-[80px] sm:blur-[120px] transform-gpu will-change-transform"
          />
        </div>

        <DriftingHearts />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 pt-12"
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-block mb-6 transform-gpu"
          >
            <Camera className="w-12 h-12 md:w-14 md:h-14 text-primary relative z-10" />
          </motion.div>
          <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-6 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent">
            Frozen in Time
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide px-2">
            "Out of all the beautiful memories we've made, these are the moments I find my heart returning to the most."
          </p>
        </motion.div>

        {/* The Scrapbook Photos Container */}
        <div className="flex flex-col gap-24 md:gap-32 mb-24 relative z-10">
          
          {/* PHOTO 1 - Tilted Left */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="relative flex justify-center md:justify-start md:ml-12"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] opacity-40 group-hover:opacity-70 transition-opacity duration-700 blur-xl" />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 z-20 transform-gpu"
              >
                <Heart className="w-10 h-10 text-primary/80 fill-primary/20 drop-shadow-md" />
              </motion.div>

              {/* Polaroid Frame 1 */}
              <div className="relative bg-background/80 backdrop-blur-md p-4 md:p-5 pb-16 md:pb-20 rounded-2xl md:rounded-[2rem] border border-primary/10 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out transform-gpu">
                <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-muted/30 aspect-[4/5] w-[260px] sm:w-[320px] md:w-[380px]">
                  <img 
                    src="/us.jpeg" 
                    alt="Our first favorite moment" 
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-5 md:bottom-7 left-0 right-0 text-center">
                  <p className="font-romantic text-3xl md:text-4xl text-primary/90">
                    Just us. ❤️
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PHOTO 2 - Tilted Right */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
            className="relative flex justify-center md:justify-end md:mr-12"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-accent/10 rounded-[3rem] opacity-40 group-hover:opacity-70 transition-opacity duration-700 blur-xl" />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 -right-5 z-20 transform-gpu"
              >
                <Heart className="w-10 h-10 text-accent/80 fill-accent/20 drop-shadow-md" />
              </motion.div>

              {/* Polaroid Frame 2 */}
              <div className="relative bg-background/80 backdrop-blur-md p-4 md:p-5 pb-16 md:pb-20 rounded-2xl md:rounded-[2rem] border border-primary/10 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 ease-out transform-gpu">
                <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-muted/30 aspect-[4/5] w-[260px] sm:w-[320px] md:w-[380px]">
                  <img 
                    src="/us2.jpeg" 
                    alt="Another favorite moment" 
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-5 md:bottom-7 left-0 right-0 text-center">
                  <p className="font-romantic text-3xl md:text-4xl text-primary/90">
                    My favorite. ✨ 
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* The Deeper Meaning Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative z-10"
        >
          <div className="relative bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-primary/10 p-8 md:p-14 rounded-[2.5rem] inline-block max-w-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 mb-14 mx-4 md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-[2.5rem] pointer-events-none" />
            <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-8 drop-shadow-md animate-pulse-heart" />
            
            <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed mb-6 italic">
              "They aren’t just pictures to me. When I look at these, I remember the exact feeling I had right in those moments. I remember how incredibly lucky I felt just to be standing next to you."
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8 opacity-70">
              <div className="h-px w-8 md:w-12 bg-primary/50" />
              <p className="text-xs md:text-sm text-primary font-medium tracking-widest uppercase">
                My happy place
              </p>
              <div className="h-px w-8 md:w-12 bg-primary/50" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <Link to="/letter" className="inline-block group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />
              <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 md:px-12 py-6 md:py-7 text-base md:text-lg shadow-xl transition-all duration-300 group-hover:scale-105 border border-primary-foreground/10">
                Read My Letter <Heart className="ml-3 w-4 h-4 md:w-5 md:h-5 fill-current" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Photo;