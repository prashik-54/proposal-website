import { motion } from 'framer-motion';
import { Heart, Calendar, MessageCircle, Sparkles, Music } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const timelineEvents = [
  {
    icon: Music, // Changed to Music since it was a dance performance!
    date: "January 26, 2026",
    title: "When We Met",
    description: "At Nagpur’s Dikshabhumi, during the government girls’ and boys’ hostel gathering, I saw you dance. In that moment, the crowd disappeared. Your confidence, your grace, and the way you moved stayed with me long after the music ended.",
    glow: "hover:shadow-[0_10px_40px_rgba(201,24,74,0.15)]",
  },
  {
    icon: MessageCircle,
    date: "That Same Night",
    title: "When We First Talked",
    description: "Outside the hall, my heart knew something before my mind could catch up. I told my friends I liked you, and they pushed me forward. When you looked at me, I was completely afraid—my shy nature taking over. I gathered my courage to ask for your number, but you said no. My friends smiled, vouched for me, and asked for your Instagram. Finally, you shared it. We talked only a little that night, but those few words felt warm, safe, and easy.",
    glow: "hover:shadow-[0_10px_40px_rgba(255,143,171,0.2)]",
  },
  {
    icon: Sparkles,
    date: "January 30, 2026",
    title: "When Feelings Grew",
    description: "The very next day, we talked the entire day—laughing, sharing, understanding each other without effort. On January 29th, we met for the first time, even though you weren’t feeling well. And finally, on January 30th, you accepted my proposal—turning our story into a promise I hold close to my heart.",
    glow: "hover:shadow-[0_10px_40px_rgba(201,24,74,0.2)]",
  },
];

const Story = () => {
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
          className="text-center mb-16 md:mb-24 pt-10 md:pt-16"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-block mb-4 md:mb-6"
          >
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary relative z-10 drop-shadow-md" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </motion.div>

          <h1 className="romantic-heading text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-transparent drop-shadow-sm px-2 pb-4 leading-normal">
            Our Beginning
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light italic px-4">
            "Every love story is special, but ours is my favorite."
          </p>
        </motion.div>

        {/* The Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row items-start mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-[20px] md:left-1/2 w-[18px] h-[18px] bg-background border-4 border-primary rounded-full md:-translate-x-1/2 mt-6 z-20 shadow-[0_0_15px_rgba(201,24,74,0.5)]" />

              {/* Mobile Line Connector (Hidden on Desktop) */}
              <div className="md:hidden absolute left-[38px] top-[32px] w-6 h-[2px] bg-primary/30 z-10" />

              {/* Content Card Container */}
              <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'}`}>

                {/* The Glassmorphism Card */}
                <div className={`group relative bg-white/50 dark:bg-black/20 backdrop-blur-xl border border-primary/10 shadow-sm p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 overflow-hidden ${event.glow}`}>

                  {/* Subtle Background Icon */}
                  <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none transform-gpu group-hover:scale-110">
                    <event.icon className="w-48 h-48 text-primary" />
                  </div>

                  <div className="relative z-10">
                    {/* The Date Badge */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
                      <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary">
                        {event.date}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center shrink-0 border border-primary/10 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <event.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="font-romantic text-2xl sm:text-3xl text-primary leading-tight">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-foreground/80 font-light leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 md:mt-20 relative z-10 px-4"
        >
          <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-primary/10 shadow-lg p-8 sm:p-12 rounded-[3rem] inline-block max-w-2xl w-full">
            <p className="text-xl sm:text-2xl md:text-3xl text-primary/90 font-romantic mb-8 drop-shadow-sm">
              "And the story continues, with you by my side..."
            </p>
            <Link to="/loyalty" className="inline-block group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse" />
              <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-primary-foreground/10">
                Continue to Loyalty <Heart className="ml-3 w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Story;