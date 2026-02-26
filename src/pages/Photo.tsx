import { motion } from 'framer-motion';
import { Heart, Camera, Sparkles, Stars, Moon } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Helper component for background drifting hearts
const DriftingHearts = () => {
  const hearts = Array.from({ length: 6 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ['100vh', '-20vh'],
            x: [Math.random() * 20 - 10, Math.random() * 40 - 20, Math.random() * 20 - 10],
            rotate: [0, 180, 360],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            scale: 0.5 + Math.random() * 1.5,
          }}
        >
          <Heart className="w-12 h-12 text-primary/20 fill-primary/10 blur-[2px]" />
        </motion.div>
      ))}
    </div>
  );
};

const Photo = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-5xl pb-24 relative">
        
        {/* Deep Ambient Background Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center opacity-40">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/20 blur-[100px] rounded-full"
          />
        </div>

        {/* Drifting Background Hearts */}
        <DriftingHearts />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-12"
        >
          <div className="relative inline-block mb-6">
            <Camera className="w-12 h-12 md:w-14 md:h-14 text-primary relative z-10 animate-gentle-float" />
            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-pulse-heart" />
          </div>
          <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-6 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-sm">
            Frozen in Time
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic tracking-wide">
            "Out of all the beautiful memories we've made, these are the moments I find my heart returning to the most."
          </p>
        </motion.div>

        {/* The Scrapbook Photos Container */}
        <div className="flex flex-col gap-20 md:gap-32 mb-24 relative z-10">
          
          {/* PHOTO 1 - Tilted Left */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative flex justify-center md:justify-start md:ml-12"
          >
            <div className="relative group">
              {/* Dynamic Outer Aura */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-700 animate-pulse-heart" />
              
              {/* Floating Heart Cluster 1 */}
              <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 z-20 animate-gentle-float">
                <Heart className="w-10 h-10 md:w-14 md:h-14 text-primary/80 fill-primary/20 -rotate-12 drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-20 animate-gentle-float" style={{ animationDelay: '2s' }}>
                <Stars className="w-10 h-10 md:w-12 md:h-12 text-accent/80 drop-shadow-xl" />
              </div>

              {/* Polaroid Frame 1 */}
              <div className="relative bg-background/80 backdrop-blur-2xl p-4 md:p-5 pb-16 md:pb-20 rounded-2xl md:rounded-[2rem] border-2 border-primary/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(200,24,74,0.15)] group-hover:rotate-0">
                {/* Washi Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-primary/10 backdrop-blur-md border border-white/20 shadow-sm rotate-[2deg] z-30 opacity-80" />
                
                <div className="relative overflow-hidden rounded-xl border border-primary/15 bg-muted/30 aspect-[4/5] w-[260px] sm:w-[320px] md:w-[380px]">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
                  <img 
                    src="/us.jpeg" 
                    alt="Our first favorite moment" 
                    className="w-full h-full object-cover filter contrast-[1.05] saturate-[0.9] group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
                <div className="absolute bottom-5 md:bottom-7 left-0 right-0 text-center">
                  <p className="font-romantic text-3xl md:text-5xl text-primary/90 -rotate-2 drop-shadow-sm">
                    Just us. ❤️
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PHOTO 2 - Tilted Right */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative flex justify-center md:justify-end md:mr-12"
          >
            <div className="relative group">
              {/* Dynamic Outer Aura */}
              <div className="absolute -inset-6 bg-gradient-to-bl from-accent/30 via-primary/20 to-accent/30 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-700 animate-pulse-heart" style={{ animationDelay: '1s' }} />
              
              {/* Floating Heart Cluster 2 */}
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-20 animate-gentle-float" style={{ animationDelay: '1s' }}>
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-accent/80 fill-accent/30 rotate-12 drop-shadow-md" />
              </div>
              <div className="absolute -bottom-8 -left-6 md:-bottom-12 md:-left-10 z-20 animate-gentle-float" style={{ animationDelay: '1.5s' }}>
                <Moon className="w-8 h-8 md:w-10 md:h-10 text-primary/60 fill-primary/10 -rotate-12 drop-shadow-xl" />
              </div>
              <div className="absolute top-1/2 -left-8 md:-left-12 z-20 animate-gentle-float" style={{ animationDelay: '2.5s' }}>
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary/50" />
              </div>

              {/* Polaroid Frame 2 */}
              <div className="relative bg-background/80 backdrop-blur-2xl p-4 md:p-5 pb-16 md:pb-20 rounded-2xl md:rounded-[2rem] border-2 border-primary/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(200,24,74,0.15)] group-hover:rotate-0">
                {/* Washi Tape */}
                <div className="absolute -top-4 right-1/4 w-20 h-8 bg-accent/10 backdrop-blur-md border border-white/20 shadow-sm rotate-[-4deg] z-30 opacity-80" />
                
                <div className="relative overflow-hidden rounded-xl border border-primary/15 bg-muted/30 aspect-[4/5] w-[260px] sm:w-[320px] md:w-[380px]">
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
                  {/* UPDATE THIS SRC TO YOUR SECOND IMAGE */}
                  <img 
                    src="/us2.jpeg" 
                    alt="Another favorite moment" 
                    className="w-full h-full object-cover filter contrast-[1.05] saturate-[0.9] group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
                <div className="absolute bottom-5 md:bottom-7 left-0 right-0 text-center">
                  <p className="font-romantic text-3xl md:text-5xl text-primary/90 rotate-2 drop-shadow-sm">
                    My favorite. ✨ 
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* The Deeper Meaning Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center relative z-10"
        >
          <div className="relative bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-primary/10 p-8 md:p-14 rounded-[2.5rem] inline-block max-w-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 mb-14">
            
            {/* Soft inner glow for the text card */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-[2.5rem] pointer-events-none" />

            <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-8 drop-shadow-md animate-pulse-heart" />
            
            <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed mb-6 italic">
              "They aren’t just pictures to me. When I look at these, I remember the exact feeling I had right in those moments. I remember how incredibly lucky I felt just to be standing next to you."
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8 opacity-70">
              <div className="h-px w-12 bg-primary/50" />
              <p className="text-sm md:text-base text-primary font-medium tracking-widest uppercase">
                My happy place
              </p>
              <div className="h-px w-12 bg-primary/50" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <Link to="/letter" className="inline-block group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
              <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-7 text-lg shadow-xl transition-all duration-300 group-hover:scale-[1.03] border border-primary-foreground/10">
                Read My Letter <Heart className="ml-3 w-5 h-5 fill-current group-hover:animate-pulse-heart" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Photo;