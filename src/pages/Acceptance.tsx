import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Infinity as InfinityIcon, Star, Gem } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Confetti = () => {
  const confetti = Array.from({ length: 100 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ y: '120vh', opacity: [1, 1, 0], rotate: 720 }}
          transition={{ duration: 4 + Math.random() * 4, delay: -Math.random() * 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-3 h-3 md:w-4 md:h-4"
          style={{ 
            left: `${Math.random() * 100}%`, 
            backgroundColor: ['#a5f3fc', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9'][Math.floor(Math.random() * 5)],
            borderRadius: '2px'
          }}
        />
      ))}
    </div>
  );
};

const Acceptance = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isAccepted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isAccepted]);

  const moveNoButton = () => {
    const isMobile = window.innerWidth < 640;
    
    if (isMobile) {
      const newX = (Math.random() - 0.5) * 50;
      const newY = Math.random() * 100 + 50;
      setNoBtnPos({ x: newX, y: newY });
    } else {
      const newX = Math.random() * 300 - 150;
      const newY = Math.random() * 300 - 150;
      setNoBtnPos({ x: newX, y: newY });
    }
  };

  return (
    <PageWrapper>
      {isAccepted && <Confetti />}
      
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pb-20 pt-20">
        
        {/* Background Elements - Floating Hearts */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 text-primary/10"
          >
            <Heart className="w-24 h-24 fill-current" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 right-10 text-primary/10"
          >
            <Heart className="w-32 h-32 fill-current" />
          </motion.div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <AnimatePresence mode="wait">
          {!isAccepted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl w-full text-center space-y-6 md:space-y-8 bg-white/40 backdrop-blur-xl p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/60 shadow-2xl relative z-10"
            >
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-inner relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <Gem className="w-10 h-10 md:w-12 md:h-12 text-primary relative z-10 drop-shadow-lg" />
              </motion.div>

              <h1 className="font-romantic text-3xl sm:text-4xl md:text-6xl text-primary mb-4 md:mb-6 drop-shadow-sm">
                Vanshu...
              </h1>

              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
                <p>
                  This isn't just a beautiful piece of jewelry. It is a placeholder for the wedding ring I will one day place on your finger.
                </p>
                <p>
                  This ring is the <span className="font-medium text-primary">proof</span> of my intention. It says that when the time is right, when we are ready, I will marry you.
                </p>
                <p>
                  I am not just asking to be with you for now. I am promising you that my ultimate destination is you. This is my vow to make you my wife one day.
                </p>
                <p className="font-romantic text-xl sm:text-2xl md:text-3xl text-primary pt-4 md:pt-6 italic">
                  Will you accept this ring as my promise to marry you?
                </p>
              </div>

              <div className="pt-8 md:pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full max-w-md sm:max-w-none mx-auto">
                <Button 
                  onClick={() => setIsAccepted(true)}
                  className="bg-primary hover:bg-primary/90 text-white text-lg sm:text-xl h-auto py-4 sm:py-6 px-8 sm:px-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden w-full sm:w-auto min-w-[200px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-romantic tracking-wide">
                    <Gem className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                    Yes, I Accept Your Ring
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>

                <motion.div
                  animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onHoverStart={moveNoButton}
                  onClick={moveNoButton}
                  className="relative w-full sm:w-auto"
                >
                  <Button 
                    variant="outline" 
                    className="text-lg sm:text-xl h-auto py-4 sm:py-6 px-8 sm:px-10 rounded-full border-2 border-primary/20 text-primary/60 hover:bg-primary/5 w-full sm:w-auto min-w-[100px]"
                  >
                    No
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-3xl mx-auto px-4 relative z-10"
            >
              <div className="bg-white/60 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/50 p-6 md:p-12 overflow-hidden relative">
                
                {/* Elegant Top Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Animated Icon */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-inner border border-white/50"
                  >
                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary/20" />
                  </motion.div>

                  {/* Main Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2 mb-6 md:mb-8"
                  >
                    <p className="text-xs md:text-base font-medium tracking-[0.3em] md:tracking-[0.4em] text-primary/60 uppercase">
                      A Vow For
                    </p>
                    <h2 className="font-romantic text-4xl sm:text-6xl md:text-8xl text-primary drop-shadow-sm leading-none pb-2">
                      Our Future
                    </h2>
                  </motion.div>

                  {/* Divider */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent mb-6 md:mb-8"
                  />
                  
                  {/* Body Text */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-lg"
                  >
                    <p>
                      You hold my word in your hand now. This ring is the physical proof that my heart is waiting for the day we become one.
                    </p>
                    <p>
                      No matter how much time passes, let this be a reminder: You are already chosen. One day, I will make it official before the world.
                    </p>
                  </motion.div>

                  {/* Signature / Footer */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary/10 w-full flex flex-col items-center gap-2"
                  >
                    <p className="text-lg md:text-xl text-foreground/70 italic font-serif tracking-wide">
                      Eternally Yours,
                    </p>
                    <div className="relative mt-2 inline-block">
                      <p className="font-romantic text-3xl md:text-5xl text-primary">
                        Prashik
                      </p>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -right-6 -top-1"
                      >
                        <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary/30" />
                      </motion.div>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Navigation */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 text-center"
              >
                <Link to="/">
                  <Button variant="ghost" className="rounded-full hover:bg-white/40 text-primary/70 hover:text-primary transition-colors">
                    Back to Our Story
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

export default Acceptance;