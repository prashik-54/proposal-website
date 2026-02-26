import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, CircleDot, Gem, Sparkles } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const symbolSections = [
  {
    icon: Heart,
    title: "The Arms",
    description: "They represent protection. Even when I am not beside you, I am holding you.",
    color: "bg-sky-50",
  },
  {
    icon: CircleDot,
    title: "The Circle",
    description: "A circle has no end — just like the future I want to build with you.",
    color: "bg-slate-50",
  },
  {
    icon: Gem,
    title: "The Silver",
    description: "Pure. Simple. Honest. Just like my intentions.",
    color: "bg-blue-50",
  },
];

const TheRing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <PageWrapper>
      <div ref={containerRef} className="relative container mx-auto px-4 max-w-4xl pb-20">
        
        {/* Hero Section */}
        <motion.div
          style={{ opacity }}
          className="text-center mb-16 md:mb-24 pt-24 md:pt-32"
        >
          <div className="relative inline-block">
            <Gem className="w-12 h-12 text-primary mx-auto mb-6 animate-gentle-float" />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
            />
          </div>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="romantic-heading text-5xl md:text-7xl mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              The Meaning Behind This Ring
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic">
              "This is not just jewelry. It is a quiet promise — one I carry with responsibility, not just emotion."
            </p>
          </ScrollReveal>
        </motion.div>

        {/* Enhanced Ring Image */}
        <ScrollReveal
          direction="up"
          delay={0.3}
          className="flex justify-center mb-20 md:mb-28"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
              <img 
                src="/ring.jpeg" 
                alt="The Ring" 
                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
              />
              {/* Silver Shimmer Overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Symbol Sections with Staggered Fade-in */}
        <div className="space-y-6 md:space-y-8 mb-20">
          {symbolSections.map((section, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.2}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white/40 backdrop-blur-sm p-8 md:p-10 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-6 transition-transform`}>
                  <section.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-romantic text-3xl text-primary mb-3 flex items-center justify-center md:justify-start gap-2">
                    {section.title}
                    <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg font-light">
                    {section.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Digital Letter Section */}
        <ScrollReveal direction="up" delay={0.2} className="mb-20 md:mb-28">
          <div className="relative max-w-3xl mx-auto">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[2rem] blur-xl opacity-50" />
            
            <div className="relative bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/40 shadow-xl">
              <div className="text-center mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">From My Heart To Yours</p>
                <h2 className="romantic-heading text-3xl md:text-5xl text-primary">My Letter To You</h2>
              </div>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light italic font-serif">
                <p className="text-2xl text-primary not-italic font-romantic">Dear Vanshu,</p>

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

                <div className="pt-8 mt-8 border-t border-primary/10 flex flex-col items-end">
                  <p className="mb-2 mr-4">Forever yours,</p>
                  <p className="text-3xl text-primary font-romantic flex items-center gap-2">
                    Prashik <Heart className="w-6 h-6 fill-primary animate-pulse" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Final Call to Action */}
        <ScrollReveal
          direction="up"
          delay={0.4}
          className="relative text-center p-10 md:p-16 rounded-[3rem] bg-primary text-primary-foreground overflow-hidden"
        >
          {/* Background pattern for the CTA */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          
          <Heart className="w-12 h-12 mx-auto mb-6 fill-white animate-pulse" />
          <h2 className="text-2xl md:text-4xl font-light mb-8 italic">
            "I am not promising perfection. I am promising effort."
          </h2>
          
          <Link to="/my-promise">
            <Button size="lg" variant="secondary" className="rounded-full px-10 py-7 text-lg hover:scale-105 transition-transform shadow-xl">
              See My Promise <Heart className="ml-2 w-5 h-5 fill-current text-primary" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </PageWrapper>
  );
};

export default TheRing;