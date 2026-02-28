import { motion } from 'framer-motion';
import { Heart, Feather, Sparkles } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Letter = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-4xl relative overflow-hidden md:overflow-visible pb-24">
        
        {/* Deep Ambient Background Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center opacity-40">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px] transform-gpu"
          />
        </div>

        {/* Hero Section */}
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
            <Feather className="w-12 h-12 md:w-16 md:h-16 text-primary relative z-10 drop-shadow-md" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </motion.div>
          
          <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-sm px-2 pb-4 leading-normal">
            My Letter to You
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic px-4">
            "Written with every piece of my heart."
          </p>
        </motion.div>

        {/* The Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Glassmorphism Paper Effect */}
          <div className="relative bg-white/60 dark:bg-black/30 backdrop-blur-2xl border border-primary/10 shadow-[0_20px_60px_rgba(201,24,74,0.08)] p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden">
            
            {/* Elegant Corner Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden opacity-50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rotate-45 translate-x-20 -translate-y-20" />
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden opacity-50">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/20 to-transparent rotate-45 -translate-x-20 translate-y-20" />
            </div>

            {/* Subtle Watermark Hearts */}
            <Heart className="absolute top-8 left-8 w-6 h-6 text-primary/10 fill-primary/5 -rotate-12" />
            <Heart className="absolute bottom-12 right-10 w-8 h-8 text-primary/10 fill-primary/5 rotate-12" />

            {/* The Text Content */}
            <div className="relative z-10 space-y-6 sm:space-y-8 font-light text-foreground/90 leading-[1.8] sm:leading-loose text-base sm:text-lg">
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-romantic text-3xl sm:text-4xl md:text-5xl text-primary mb-8 drop-shadow-sm"
              >
                Dear Vanshu,
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                There are so many things I want to tell you, but words never seem to be enough. So I built this little corner of the internet, just for us — a place where my feelings for you could live forever.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                You came into my life like a soft breeze on a warm day — unexpected, gentle, and absolutely life-changing. Before you, I didn't know what it felt like to have someone believe in me so completely, to feel so safe, so understood.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                Every moment with you teaches me something new about love. Not the kind you see in movies — but the real, quiet kind. The kind that shows up on hard days, stays patient through misunderstandings, and celebrates every little joy together.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.1, duration: 1 }}
              >
                I don't need grand gestures or perfect moments. I just need you. Your laughter, your voice, your silly jokes, your beautiful heart — that's my whole world.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.3, duration: 1 }}
              >
                Thank you for being patient with me, for loving me when I didn't even love myself, and for making every ordinary day feel extraordinary.
              </motion.p>

              {/* The Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 1.5 }}
                className="pt-10 sm:pt-12 text-right border-t border-primary/10 mt-12"
              >
                <p className="text-muted-foreground/80 mb-3 text-sm sm:text-base italic">
                  Forever and always yours,
                </p>
                <p className="font-romantic text-4xl sm:text-5xl md:text-6xl text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pr-2 inline-flex items-center gap-3">
                  Prashik <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-primary animate-pulse-heart text-primary" />
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 relative z-10 px-4"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary/40 mx-auto mb-4 sm:mb-6 animate-pulse" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-xl mx-auto italic">
            "This letter is just the beginning of all the words I have for you..."
          </p>
          <Link to="/the-ring" className="inline-block group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse" />
            <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-primary-foreground/10">
              One More Thing... <Heart className="ml-3 w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Letter;