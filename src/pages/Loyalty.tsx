import { motion } from 'framer-motion';
import { Heart, Shield, Lock, Infinity as InfinityIcon, ShieldCheck } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const quotes = [
  {
    title: "The Daily Choice",
    text: "Loyalty isn't just a word. It's waking up every single morning and choosing you all over again, without a second thought.",
    icon: Heart,
    glow: "hover:shadow-[0_10px_40px_rgba(201,24,74,0.15)] border-primary/10",
  },
  {
    title: "Your Safe Harbor",
    text: "I am your shield and your biggest fan. Even if the whole world walks out, I will be the one standing right here beside you.",
    icon: Shield,
    glow: "hover:shadow-[0_10px_40px_rgba(201,24,74,0.2)] border-primary/15",
  },
  {
    title: "An Open Book",
    text: "Trust is a quiet promise. It means handing you my entire heart, my future, and my secrets, knowing they are perfectly safe in your hands.",
    icon: Lock,
    glow: "hover:shadow-[0_10px_40px_rgba(201,24,74,0.15)] border-primary/10",
  },
  {
    title: "My Favorite Place",
    text: "No matter where life takes us or how hard things get, my absolute favorite place in the universe will always be right next to you.",
    icon: InfinityIcon,
    glow: "hover:shadow-[0_10px_40px_rgba(255,143,171,0.2)] border-accent/20",
  },
];

const Loyalty = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-5xl relative overflow-hidden md:overflow-visible pb-24">
        
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
            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-primary relative z-10 drop-shadow-md" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </motion.div>
          
          <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-sm px-2">
            Loyalty & Trust
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic px-4">
            "The unbreakable foundation of everything we share."
          </p>
        </motion.div>

        {/* The Vows Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24 relative z-10">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              className="group h-full"
            >
              <div className={`relative bg-white/50 dark:bg-black/20 backdrop-blur-xl border p-8 sm:p-10 rounded-[2rem] h-full transition-all duration-500 hover:-translate-y-2 overflow-hidden ${quote.glow}`}>
                
                {/* Subtle Background Watermark Icon */}
                <div className="absolute -top-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none transform-gpu group-hover:scale-110 group-hover:rotate-12">
                  <quote.icon className="w-40 h-40 text-primary" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background/80 flex items-center justify-center mb-6 shadow-sm border border-primary/10 group-hover:scale-110 transition-transform duration-500 relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <quote.icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-accent transition-colors relative z-10" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-romantic text-primary mb-3">
                    {quote.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-foreground/80 font-light leading-relaxed flex-grow">
                    "{quote.text}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Confession Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-2 sm:px-0"
        >
          <div className="bg-white/60 dark:bg-black/30 backdrop-blur-2xl border border-primary/10 shadow-xl p-8 sm:p-12 md:p-16 rounded-[3rem] inline-block max-w-3xl w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
            
            <Shield className="w-10 h-10 text-primary mx-auto mb-6 sm:mb-8 animate-pulse-heart drop-shadow-md relative z-10" />
            
            <p className="text-2xl sm:text-3xl md:text-4xl text-foreground/90 font-light leading-snug mb-6 relative z-10">
              Vanshu, I don't just love you.<br className="hidden sm:block" /> I protect you, I respect you, and I am fiercely loyal to us.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-10 opacity-70 relative z-10">
              <div className="h-px w-10 sm:w-16 bg-primary/40" />
              <p className="text-sm sm:text-base text-primary font-medium tracking-widest uppercase">
                Your heart is my home
              </p>
              <div className="h-px w-10 sm:w-16 bg-primary/40" />
            </div>

            <Link to="/forever" className="inline-block group relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse" />
              <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 sm:px-12 py-7 sm:py-8 text-lg sm:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-primary-foreground/10">
                See Our Forever <Heart className="ml-3 w-5 h-5 fill-current" />
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Loyalty;