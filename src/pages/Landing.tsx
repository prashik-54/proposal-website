import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingHearts from '@/components/FloatingHearts';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <PageWrapper>
      <FloatingHearts />
      
      <div className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6 md:mb-8"
        >
          <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-primary fill-primary animate-pulse-heart heart-glow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="romantic-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center mb-4 md:mb-6 px-2"
        >
          For You, Vanshu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg md:text-2xl text-foreground/80 text-center max-w-2xl mb-3 md:mb-4 px-2"
        >
          This website exists because of you, Vanshu.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground text-center italic mb-8 md:mb-12 px-2"
        >
          "Every heartbeat here belongs to us."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link to="/story">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Our Story
              <Heart className="ml-2 w-5 h-5 fill-current group-hover:animate-pulse-heart" />
              <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.2 }}
              className="w-2 h-2 rounded-full bg-primary/40"
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Landing;
