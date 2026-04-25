import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MoonStar, HeartHandshake, Sparkle } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { Button } from "../components/ui/button";

export default function MyApology() {
  const navigate = useNavigate();
  const [showForgiveMessage, setShowForgiveMessage] = useState(false);
  const [showMadMessage, setShowMadMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 1.5, delayChildren: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-slate-200 to-slate-300 dark:from-zinc-800 dark:via-zinc-950 dark:to-black text-slate-800 dark:text-zinc-300 px-4 py-16 sm:py-24 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-1000">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-rose-500/10 dark:bg-rose-900/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-1000" />

        <AnimatePresence>
          {isVisible && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="max-w-4xl mx-auto w-full relative z-10"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/50 dark:border-zinc-800/50 shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:shadow-2xl p-8 sm:p-12 md:p-16 rounded-[2.5rem] space-y-12 text-center transition-colors duration-1000"
              >
                
                <motion.div variants={itemVariants} className="flex justify-center mb-8">
                  <div className="p-4 bg-slate-200/50 dark:bg-zinc-800/50 rounded-full border border-slate-300/50 dark:border-zinc-700/50 shadow-sm transition-colors duration-1000">
                    <MoonStar className="w-8 h-8 text-slate-600 dark:text-zinc-400 transition-colors duration-1000" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Section 1: The Opening */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <p className="text-lg md:text-xl font-light text-slate-600 dark:text-zinc-400 italic transition-colors duration-1000">
                    "I know you told me to leave you alone, and I completely respect it if you don't even want to look at this right now."
                  </p>
                  <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-zinc-300 transition-colors duration-1000">
                    I couldn’t stay quiet—I had to own up to my mistake and take full responsibility for how I made you feel. I want to say sorry in the most sincere way possible, and I hope that when you're ready, we can talk about it. But for now, I just want to say this:
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 py-4">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-400 dark:via-zinc-600 to-transparent transition-colors duration-1000" />
                  <Sparkle className="w-4 h-4 text-slate-400 dark:text-zinc-600 transition-colors duration-1000" />
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-400 dark:via-zinc-600 to-transparent transition-colors duration-1000" />
                </motion.div>

                {/* Section 2: Core Apology - Very Humanized */}
                <motion.div variants={itemVariants} className="space-y-6 text-base md:text-lg leading-relaxed text-slate-700 dark:text-zinc-300/90 font-light transition-colors duration-1000 px-4 sm:px-8">
                  <p>
                    Vanshu, I am really, truly sorry. What happened wasn't your fault at all. When that guy tried to message you, I panicked. The truth is, sometimes I feel like I don't have anything perfectly special, and I let my own stupid fear of losing you completely take over. 
                  </p>
                  <p>
                    I didn't doubt you, I doubted myself. But instead of trusting you, I let my insecurities turn into a burden for you to carry. You didn't do anything wrong, and it was so incredibly unfair of me to make you feel like you had to prove your loyalty to me.
                  </p>
                </motion.div>

                {/* Section 3: Validating Her Feelings - Very Humanized */}
                <motion.div variants={itemVariants} className="space-y-6 text-base md:text-lg leading-relaxed text-slate-700 dark:text-zinc-300/90 font-light transition-colors duration-1000 px-4 sm:px-8">
                  <p>
                    When you said you were tired of it and just wanted to be left alone, it broke my heart. But it broke me because I realized *I* was the one pushing you away. You have been nothing but loyal to me, and I exhausted you by making you constantly defend yourself against my overthinking.
                  </p>
                  <p>
                    I hate that I became the reason you lost your peace of mind. I never want to be the guy who drains the light out of you.
                  </p>
                </motion.div>

                {/* Section 4: The Promise - Very Humanized */}
                <motion.div variants={itemVariants} className="space-y-6 pt-6 px-4 sm:px-8">
                  <p className="text-base md:text-lg text-slate-600 dark:text-zinc-400 font-light mx-auto transition-colors duration-1000">
                    I'm not just saying sorry to brush this under the rug. I know saying sorry doesn't magically fix the exhaustion you're feeling. But I promise I will work on my own trust issues. I refuse to let my fear of losing you be the exact reason I actually lose you. You are my safe place, Vanshu.
                  </p>
                  <div className="flex flex-col items-center justify-center gap-4 mt-10">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <HeartHandshake className="w-8 h-8 text-rose-600 dark:text-rose-800/80 transition-colors duration-1000" />
                    </motion.div>
                    <p className="text-2xl md:text-3xl font-romantic tracking-wider text-slate-900 dark:text-zinc-100 transition-colors duration-1000">
                      I trust you. I really do.
                    </p>
                  </div>
                </motion.div>

                {/* Section 5: Interaction */}
                <motion.div variants={itemVariants} className="pt-12 flex flex-col items-center gap-6">
                  <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowMadMessage(true);
                        setShowForgiveMessage(false);
                      }}
                      className="h-14 px-8 text-base bg-transparent border-slate-300 dark:border-zinc-700 text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-200 transition-all duration-500 rounded-full"
                    >
                      I'm still hurting.
                    </Button>
                    <Button 
                      onClick={() => {
                        setShowForgiveMessage(true);
                        setShowMadMessage(false);
                        setTimeout(() => navigate('/'), 7000); 
                      }}
                      className="h-14 px-8 text-base bg-slate-800 dark:bg-zinc-200 text-white dark:text-zinc-900 hover:bg-slate-950 dark:hover:bg-white hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-500 rounded-full"
                    >
                      I forgive you.
                    </Button>
                  </div>

                  {/* Dynamic Response Messages */}
                  <div className="min-h-[5rem] flex items-center justify-center mt-4 px-4 max-w-2xl text-center">
                    <AnimatePresence mode="wait">
                      {showMadMessage && (
                        <motion.p 
                          key="mad"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-base md:text-lg text-slate-600 dark:text-zinc-400 font-light leading-relaxed"
                        >
                          I hear you. I know a simple sorry doesn't fix the hurt I caused. Take all the time and space you need. I'll be right here waiting for you whenever you're ready.
                        </motion.p>
                      )}
                      {showForgiveMessage && (
                        <motion.p 
                          key="forgive"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-base md:text-lg text-slate-800 dark:text-zinc-200 font-medium leading-relaxed"
                        >
                          Thank you for your grace, and for not giving up on us even when I made it hard. I love you so much. ❤️ <br/><span className="text-sm font-light opacity-70 mt-2 block">(Taking you back home...)</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}