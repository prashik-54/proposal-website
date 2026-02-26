import { motion } from 'framer-motion';
import { Heart, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const timelineEvents = [
  {
    icon: Calendar,
    title: "When We Met",
    description: "On 26th January 2026, at Nagpur’s Dikshabhumi, during the government girls’ and boys’ hostel gathering, I saw you dance. In that moment, the crowd disappeared. Your confidence, your grace, and the way you moved stayed with me long after the music ended.",
    delay: 0.2,
  },
  {
    icon: MessageCircle,
    title: "When We First Talked",
    description: "Outside the hall, after your dance, I was standing with my friends, my heart already knowing something before my mind could catch up. I told them that I liked you. They gently pushed me forward and told you that I wanted to talk to you. When you looked at me, I felt completely afraid — my shy nature taking over every thought. I gathered all my courage and asked you directly for your number, but you said no. My friends then smiled and told you that I was a good boy, asking you to at least share your Instagram. And finally, you did. That small moment became the beginning of something unforgettable. That night, we talked only a little, but even those few words felt warm, safe, and easy.",
    delay: 0.4,
  },
  {
    icon: Sparkles,
    title: "When Feelings Grew",
    description: "The very next day, we talked the entire day — laughing, sharing, understanding each other without effort. Somewhere between those conversations, feelings quietly grew into something real. On 29th January, we met for the first time, even though you weren’t feeling well. And on 30th January 2026, you accepted my proposal — turning our story into a promise I hold close to my heart.",
    delay: 0.6,
  },
];

const Story = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary mx-auto mb-4 md:mb-6 animate-gentle-float" />
          <h1 className="romantic-heading text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">Our Beginning</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-2">
            Every love story is special, but ours is my favorite.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: event.delay, duration: 0.6 }}
              className={`relative flex items-start gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 z-10 heart-glow" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="romantic-card p-6 md:p-8">
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <event.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-romantic text-2xl md:text-3xl text-primary">{event.title}</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-xl text-muted-foreground italic mb-8">
            "And the story continues, with you by my side..."
          </p>
          <Link to="/loyalty">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              Continue to Loyalty <Heart className="ml-2 w-4 h-4 fill-current" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Story;
