import { motion } from 'framer-motion';
import { Heart, Shield, Lock, Infinity } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const quotes = [
  {
    text: "Loyalty is choosing the same person every single day, no matter what.",
    icon: Heart,
  },
  {
    text: "I stand with you even when the world doesn't.",
    icon: Shield,
  },
  {
    text: "Trust is built in drops and lost in buckets. I'm here to fill yours forever.",
    icon: Lock,
  },
  {
    text: "You are my safe place, and I will always be yours.",
    icon: Infinity,
  },
];

const Loyalty = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6 animate-gentle-float" />
          <h1 className="romantic-heading text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">Loyalty & Trust</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-2">
            The foundation of everything we share
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative romantic-card p-6 md:p-8 h-full overflow-hidden">
                {/* Heart shape background */}
                <div className="absolute -top-6 -right-6 w-20 md:w-24 h-20 md:h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
                    <path d="M50 88.9L42.8 82.4C17.2 59.4 0 43.8 0 24.6C0 9.1 12.1 0 27.5 0C36.1 0 44.4 4.1 50 10.5C55.6 4.1 63.9 0 72.5 0C87.9 0 100 9.1 100 24.6C100 43.8 82.8 59.4 57.2 82.4L50 88.9Z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <quote.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <p className="text-base md:text-xl text-foreground leading-relaxed italic">
                    "{quote.text}"
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center romantic-card p-8 md:p-12"
        >
          <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4 animate-pulse-heart" />
          <p className="text-xl md:text-2xl text-foreground/90 font-light">
            Vanshu, with you I feel safe to be myself completely.
          </p>
          <p className="text-muted-foreground mt-4">
            Your heart is my home.
          </p>
          <Link to="/forever" className="inline-block mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              See Forever <Heart className="ml-2 w-4 h-4 fill-current" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Loyalty;
