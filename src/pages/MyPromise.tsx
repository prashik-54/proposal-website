import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Shield, Star, Home, Sunrise, Hammer, Sparkles, Quote } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const promises = [
  { 
    icon: Heart, 
    title: "I promise to respect you.",
    description: "To value your opinions, listen to your worries, and honor the beautiful person you are, and the person you are becoming.",
    color: "from-sky-500/20 to-transparent"
  },
  { 
    icon: Shield, 
    title: "I promise loyalty in difficult days.",
    description: "Love isn't just for the easy times. I will stand firmly by your side through every storm, unwavering and true.",
    color: "from-cyan-500/20 to-transparent"
  },
  { 
    icon: Star, 
    title: "I promise to grow for you.",
    description: "I will continuously work on myself, learning from my mistakes, to be the man and partner you truly deserve.",
    color: "from-teal-500/20 to-transparent"
  },
  { 
    icon: Home, 
    title: "I promise to be your safe space.",
    description: "To be your comfort at the end of a long day, the place where you can drop your guard and just breathe.",
    color: "from-blue-500/20 to-transparent"
  },
  { 
    icon: Sunrise, 
    title: "I promise to protect your peace.",
    description: "I will never take your emotional well-being for granted. I will guard your happiness as fiercely as my own.",
    color: "from-indigo-500/20 to-transparent"
  },
  { 
    icon: Hammer, 
    title: "I promise to build our future.",
    description: "Not just talk about it. With my own two hands, my effort, and my whole heart, I will turn our dreams into reality.",
    color: "from-slate-500/20 to-transparent"
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
      <div ref={containerRef} className="relative container mx-auto px-4 max-w-4xl pb-24 overflow-hidden">
        
        {/* Subtle animated background gradient */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-10 opacity-30"
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 pt-24 md:pt-32"
        >
          <div className="relative inline-block mb-6">
            <Quote className="absolute -top-4 -left-6 w-8 h-8 text-primary/20 rotate-180" />
            <Shield className="w-12 h-12 md:w-14 md:h-14 text-primary relative z-10 animate-gentle-float" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </div>
          <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            My Promise To You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
            These are not just words for today. They are the rules I have written for the rest of my life.
          </p>
        </motion.div>

        {/* Promises Timeline */}
        <div className="relative max-w-3xl mx-auto mb-20">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden sm:block md:-ml-px" />

          <div className="space-y-8 md:space-y-12">
            {promises.map((promise, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="hidden sm:flex absolute left-0 md:left-1/2 md:-ml-6 top-6 w-12 h-12 rounded-full border-4 border-background bg-secondary items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <promise.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Promise Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className={`w-full sm:w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] group relative overflow-hidden rounded-3xl border border-primary/10 bg-white/40 backdrop-blur-md p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500`}
                  >
                    {/* Hover Gradient Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${promise.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4 sm:hidden">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          <promise.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      
                      <h3 className="font-romantic text-2xl md:text-3xl text-primary mb-3 flex items-center gap-2">
                        {promise.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed font-light text-[15px] md:text-base">
                        {promise.description}
                      </p>
                    </div>
                  </motion.div>
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
          className="relative text-center p-10 md:p-16 rounded-[3rem] bg-gradient-to-b from-primary/5 to-primary/10 border border-primary/20 overflow-hidden max-w-3xl mx-auto"
        >
          <Sparkles className="absolute top-8 right-8 w-6 h-6 text-primary/40 animate-pulse" />
          <Sparkles className="absolute bottom-8 left-8 w-4 h-4 text-primary/40 animate-pulse delay-700" />
          
          <Heart className="w-12 h-12 text-primary fill-primary mx-auto mb-8 animate-pulse-heart drop-shadow-lg" />
          
          <div className="flex flex-col justify-center items-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground/90 font-romantic leading-relaxed">
              One day… when the time is right…
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl text-primary font-romantic italic">
              I want to marry you.
            </p>
          </div>
          
          <Link to="/acceptance" className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-lg shadow-xl transition-all group-hover:scale-[1.02]">
              The Final Question...
            </Button>
          </Link>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default MyPromise;