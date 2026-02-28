import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Shield, Star, Home, Sunrise, Hammer, Sparkles, Quote } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';

const promises = [
  { 
    icon: Heart, 
    title: "I promise to respect you.",
    description: "I will do my absolute best to value your opinions, listen to your worries, and honor the beautiful person you are becoming every single day.",
    color: "from-sky-500/20 to-transparent",
    glow: "hover:shadow-[0_10px_40px_rgba(14,165,233,0.15)]",
  },
  { 
    icon: Shield, 
    title: "I promise loyalty.",
    description: "Love isn't just for the easy times. I promise to put in the effort to stand by your side through every storm, trying my hardest to be your constant.",
    color: "from-cyan-500/20 to-transparent",
    glow: "hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)]",
  },
  { 
    icon: Star, 
    title: "I promise to grow.",
    description: "I promise to try my hardest to continuously work on myself and learn from my mistakes, so I can grow into the partner you truly deserve.",
    color: "from-teal-500/20 to-transparent",
    glow: "hover:shadow-[0_10px_40px_rgba(20,184,166,0.15)]",
  },
  { 
    icon: Home, 
    title: "I promise safe space.",
    description: "I promise to do everything in my power to be your comfort at the end of a long day, a place where you can always drop your guard.",
    color: "from-blue-500/20 to-transparent",
    glow: "hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]",
  },
  { 
    icon: Sunrise, 
    title: "I promise your peace.",
    description: "I will always try my best to protect your emotional well-being, treating your happiness with as much care and effort as my own.",
    color: "from-indigo-500/20 to-transparent",
    glow: "hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)]",
  },
  { 
    icon: Hammer, 
    title: "I promise our future.",
    description: "Not just talk about it. I promise to give you my absolute best effort, using my whole heart to help build our dreams into reality.",
    color: "from-primary/20 to-transparent",
    glow: "hover:shadow-[0_10px_40px_rgba(201,24,74,0.15)]",
  },
];

const MyPromise = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <PageWrapper>
      <div ref={containerRef} className="relative container mx-auto px-4 max-w-4xl pb-24 overflow-hidden md:overflow-visible">
        
        {/* Subtle animated background gradient */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center opacity-40">
          <motion.div 
            style={{ y: backgroundY }}
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
          className="text-center mb-16 md:mb-24 pt-10 md:pt-16"
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-block mb-4 md:mb-6"
          >
            <Quote className="absolute -top-4 -left-6 w-8 h-8 text-primary/30 rotate-180" />
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary relative z-10 drop-shadow-md" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </motion.div>
          
          <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-sm px-2 pb-4 leading-normal">
            My Promise To You
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic px-4">
            "These are not guarantees of perfection, but my earnest commitments. I promise to give you my absolute best effort, every single day."
          </p>
        </motion.div>

        {/* Promises Timeline */}
        <div className="relative max-w-3xl mx-auto mb-20 md:mb-28">
          
          {/* Main vertical line (Desktop: Center, Mobile: Left Edge) */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {promises.map((promise, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Timeline Center Node */}
                  <div className="absolute left-[12px] md:left-1/2 md:-ml-6 top-6 w-[18px] h-[18px] md:w-12 md:h-12 rounded-full border-4 border-background md:border-primary/20 bg-primary md:bg-secondary flex items-center justify-center z-20 shadow-[0_0_15px_rgba(201,24,74,0.3)] md:group-hover:scale-110 transition-transform duration-300">
                    <promise.icon className="hidden md:block w-5 h-5 text-primary" />
                  </div>

                  {/* Promise Card Container */}
                  <div className={`w-full pl-12 md:pl-0 md:w-[calc(50%-3rem)]`}>
                    
                    {/* The Glassmorphism Card */}
                    <div className={`group relative bg-white/50 dark:bg-black/20 backdrop-blur-xl border border-primary/10 shadow-sm p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 overflow-hidden ${promise.glow}`}>
                      
                      {/* Hover Gradient Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${promise.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Subtle Background Watermark Icon */}
                      <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none transform-gpu group-hover:scale-110 group-hover:-rotate-12">
                        <promise.icon className="w-32 h-32 text-primary" />
                      </div>

                      <div className="relative z-10 flex flex-col sm:block">
                        {/* Header Area: Icon + Title */}
                        <div className="flex items-center gap-4 mb-3 sm:mb-4">
                          <div className="flex sm:hidden w-10 h-10 rounded-full bg-background/80 items-center justify-center shrink-0 border border-primary/10 shadow-sm">
                            <promise.icon className="w-5 h-5 text-primary" />
                          </div>
                          
                          <h3 className="font-romantic text-2xl sm:text-3xl text-primary leading-tight">
                            {promise.title}
                          </h3>
                        </div>
                        
                        <p className="text-sm sm:text-base text-foreground/80 font-light leading-relaxed">
                          {promise.description}
                        </p>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Statement & Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10 px-2 sm:px-0"
        >
          <div className="relative bg-white/60 dark:bg-black/30 backdrop-blur-2xl border border-primary/10 shadow-[0_20px_60px_rgba(201,24,74,0.08)] p-8 sm:p-14 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
            
            <Sparkles className="absolute top-6 right-6 w-5 h-5 sm:w-6 sm:h-6 text-primary/40 animate-pulse" />
            <Sparkles className="absolute bottom-10 left-6 w-4 h-4 sm:w-5 sm:h-5 text-primary/40 animate-pulse delay-700" />
            
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary fill-primary mx-auto mb-6 sm:mb-8 animate-pulse-heart drop-shadow-md relative z-10" />
            
            <div className="flex flex-col justify-center items-center mb-10 sm:mb-12 space-y-3 sm:space-y-4 relative z-10 w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light italic leading-relaxed px-4">
                One day… when the time is right…
              </h2>
              <p className="text-4xl sm:text-5xl md:text-6xl text-primary font-romantic drop-shadow-sm pb-2 text-center w-full">
                I want to marry you.
              </p>
            </div>
            
            {/* THE UPGRADED PERFECT BUTTON */}
            <div className="relative w-[90%] sm:w-auto z-10 group">
              {/* Massive ambient glow behind the button */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-700 animate-pulse" />
              
              <Link to="/acceptance" className="block relative">
                <button className="relative w-full sm:w-auto flex items-center justify-center bg-background/95 hover:bg-white/10 text-primary border-2 border-primary/30 px-8 py-5 sm:px-12 sm:py-6 rounded-full text-lg sm:text-xl shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] overflow-hidden">
                  
                  {/* Internal sweeping shine effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  
                  <span className="relative z-10 flex items-center justify-center font-medium tracking-wide">
                    The Final Question...
                    <Heart className="ml-3 w-5 h-5 sm:w-6 sm:h-6 fill-primary text-primary group-hover:scale-110 group-hover:animate-pulse-heart transition-transform duration-500" />
                  </span>
                  
                </button>
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default MyPromise;