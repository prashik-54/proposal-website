import { motion } from 'framer-motion';
import { Heart, Feather } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Letter = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 max-w-3xl pt-24 md:pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <Feather className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6 animate-gentle-float" />
          <h1 className="romantic-heading text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">My Letter to You</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Letter paper effect */}
          <div className="romantic-card p-5 sm:p-8 md:p-12 bg-gradient-to-b from-card to-secondary/20 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 md:w-28 h-24 md:h-28 bg-primary/10 rotate-45 translate-x-12 md:translate-x-14 -translate-y-12 md:-translate-y-14" />
            </div>

            {/* Decorative hearts */}
            <Heart className="absolute top-3 left-3 md:top-4 md:left-4 w-5 h-5 md:w-6 md:h-6 text-primary/20 fill-primary/10" />
            <Heart className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 text-primary/20 fill-primary/10" />

            <div className="relative z-10 space-y-4 md:space-y-6 font-body text-foreground/90 leading-relaxed text-sm sm:text-base">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-romantic text-2xl sm:text-3xl md:text-4xl text-primary"
              >
                Dear Vanshu,
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                There are so many things I want to tell you, but words never seem to be enough. So I built this little corner of the internet, just for us — a place where my feelings for you could live forever.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                You came into my life like a soft breeze on a warm day — unexpected, gentle, and absolutely life-changing. Before you, I didn't know what it felt like to have someone believe in me so completely, to feel so safe, so understood.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Every moment with you teaches me something new about love. Not the kind you see in movies — but the real, quiet kind. The kind that shows up on hard days, stays patient through misunderstandings, and celebrates every little joy together.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                I don't need grand gestures or perfect moments. I just need you. Your laughter, your voice, your silly jokes, your beautiful heart — that's my whole world.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Thank you for being patient with me, for loving me when I didn't even love myself, and for making every ordinary day feel extraordinary.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="pt-6 md:pt-8"
              >
                <p className="text-muted-foreground mb-2 text-sm sm:text-base">Forever and always yours,</p>
                <p className="font-romantic text-2xl sm:text-3xl md:text-4xl text-primary flex items-center gap-2">
                  Prashik <Heart className="w-5 h-5 md:w-6 md:h-6 fill-primary inline" />
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground italic mb-8">
            "This letter is just the beginning of all the words I have for you..."
          </p>
          <Link to="/the-ring">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              One More Thing... <Heart className="ml-2 w-4 h-4 fill-current" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Letter;
