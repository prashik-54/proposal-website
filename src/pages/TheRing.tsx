import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, CircleDot, Gem, Sparkles } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const symbolSections = [
  {
    icon: Heart,
    title: "The Arms",
    description: "They represent protection. Even when I am not beside you, I am holding you.",
    glow: "hover:shadow-[0_10px_40px_rgba(201,24,74,0.15)] border-primary/10",
  },
  {
    icon: CircleDot,
    title: "The Circle",
    description: "A circle has no end — just like the future I want to build with you.",
    glow: "hover:shadow-[0_10px_40px_rgba(255,143,171,0.2)] border-accent/20",
  },
  {
    icon: Gem,
    title: "The Silver",
    description: "Pure. Simple. Honest. Just like my intentions.",
    glow: "hover:shadow-[0_10px_40px_rgba(201,24,74,0.2)] border-primary/15",
  },
];

const TheRing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <PageWrapper>
      <div ref={containerRef} className="relative container mx-auto px-4 max-w-4xl pb-24 overflow-hidden md:overflow-visible">
        
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
          style={{ opacity }}
          className="text-center mb-16 md:mb-20 pt-10 md:pt-16"
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-block mb-4 md:mb-6"
          >
            <Gem className="w-12 h-12 md:w-16 md:h-16 text-primary relative z-10 drop-shadow-md" />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-sm px-2 pb-4 leading-normal">
              The Meaning Behind This
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic px-4">
              "This is not just jewelry. It is a quiet promise — one I carry with responsibility, not just emotion."
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Ring Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-20 md:mb-28"
        >
          <div className="relative group">
            {/* Pulsing Outer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000 animate-pulse" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 shadow-[0_20px_50px_rgba(201,24,74,0.15)] overflow-hidden">
              <img 
                src="/ring.jpeg" 
                alt="The Promise Ring" 
                loading="lazy"
                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
              />
              {/* Silver Shimmer Overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-full"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Symbol Sections (Glassmorphism Cards) */}
        <div className="space-y-6 md:space-y-8 mb-20 md:mb-28 relative z-10">
          {symbolSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              className="group"
            >
              <div className={`relative bg-white/50 dark:bg-black/20 backdrop-blur-xl border p-6 sm:p-8 md:p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 overflow-hidden ${section.glow}`}>
                
                {/* Subtle Background Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none transform-gpu group-hover:scale-110 group-hover:-rotate-12">
                  <section.icon className="w-40 h-40 text-primary" />
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 relative z-10 text-center sm:text-left">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background/80 flex items-center justify-center shrink-0 border border-primary/10 shadow-sm group-hover:scale-110 transition-transform duration-500 relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <section.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-accent transition-colors relative z-10" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-romantic text-2xl sm:text-3xl text-primary mb-3 flex items-center justify-center sm:justify-start gap-3">
                      {section.title}
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-accent" />
                    </h3>
                    <p className="text-base sm:text-lg text-foreground/80 font-light leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* The Vows / Digital Letter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20 md:mb-28 relative z-10"
        >
          <div className="relative max-w-3xl mx-auto">
            {/* The Glassmorphism Parchment */}
            <div className="relative bg-white/60 dark:bg-black/30 backdrop-blur-2xl border border-primary/10 shadow-[0_20px_60px_rgba(201,24,74,0.08)] p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden">
              
              <div className="text-center mb-10 sm:mb-12">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">From My Heart To Yours</p>
                <h2 className="romantic-heading text-4xl sm:text-5xl md:text-6xl bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-sm pb-2 leading-normal">
                  My Vow To You
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-foreground/90 leading-relaxed font-light">
                <p className="text-3xl sm:text-4xl text-primary font-romantic drop-shadow-sm">Dear Vanshu,</p>

                <p>
                  I'm writing this not because words come easily to me, but because some things 
                  deserve to be said carefully, intentionally — and you deserve that more than anyone.
                </p>

                <p>
                  When I bought this ring, it wasn't on a whim. It wasn't a gesture meant to impress you. 
                  It was a decision. A deliberate, thought-out decision to give you something that carries 
                  weight — something that says what I sometimes struggle to say out loud.
                </p>

                <p>
                  This ring is a hug. It's my arms around you when I'm not there. It's a reminder that 
                  no matter what happens — no matter how far apart we are, no matter how hard life gets — 
                  I am holding on. Quietly. Firmly. Without letting go.
                </p>

                <p>
                  I know I'm not perfect. I know I still have so much to learn — about love, about you, 
                  about being the kind of man who deserves the kind of woman you are. But I want you to 
                  know: I'm serious about this. I'm not here for a season. I'm here for a lifetime.
                </p>

                <p>
                  I respect you — not as a word, but as a practice. I respect your boundaries, your dreams, 
                  your pace, your space. I respect the woman you are becoming, and I want to grow alongside 
                  you — not ahead of you, not behind you — beside you.
                </p>

                <p>
                  My intention is not just to love you today. My intention is to build something with you. 
                  Something real. Something that lasts. A home. A future. A life where we look back and 
                  know — we chose each other, and we kept choosing each other.
                </p>

                <p>
                  Marriage is not just a word to me. It's a commitment I think about seriously. And when 
                  the time comes — when we've grown enough, when we're ready — I want to stand in front of 
                  the world and promise you everything I'm already promising you in my heart.
                </p>

                <p>
                  Until then, let this ring be my promise. Let this letter be proof that I meant every word. 
                  And let every day we spend together be evidence that my love for you isn't just a feeling — 
                  it's a choice I make, willingly, every single morning.
                </p>

                <div className="pt-10 sm:pt-12 mt-8 border-t border-primary/10 text-right">
                  <p className="mb-3 text-muted-foreground/80 italic">Forever yours,</p>
                  <p className="text-4xl sm:text-5xl text-primary font-romantic flex items-center justify-end gap-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pr-2">
                    Prashik <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-primary animate-pulse-heart text-primary" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10 px-2 sm:px-0"
        >
          <div className="relative p-10 sm:p-14 md:p-16 rounded-[3rem] bg-primary text-primary-foreground overflow-hidden shadow-2xl">
            {/* Background pattern for the CTA */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
            
            <Heart className="w-12 h-12 mx-auto mb-6 fill-white animate-pulse relative z-10 drop-shadow-md" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-10 italic relative z-10 leading-snug">
              "I am not promising perfection.<br className="hidden sm:block" /> I am promising effort."
            </h2>
            
            <Link to="/my-promise" className="inline-block relative z-10 group">
              <Button size="lg" className="bg-background text-primary hover:bg-white/90 rounded-full px-10 sm:px-12 py-7 sm:py-8 text-lg sm:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                See My Promise <Heart className="ml-3 w-5 h-5 fill-current" />
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default TheRing;