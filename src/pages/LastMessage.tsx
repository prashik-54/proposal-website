import { motion } from "framer-motion";

const LastMessage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg w-full bg-zinc-950 border border-zinc-900 p-10 rounded-2xl shadow-2xl"
      >
        <h1 className="text-2xl font-light text-zinc-300 mb-8 tracking-widest">
          To Vanshu,
        </h1>
        
        <div className="space-y-6 text-zinc-400 text-sm md:text-base font-light leading-relaxed text-left">
          <p>
            I always try to do special things for you because I care about you. Whether it is creating pictures for you, making stories, or building this website, I put my heart and time into it just to see you happy.
          </p>
          
          <p>
            But when you delete the things I make with so much love, just because you are angry at someone else, it hurts me deeply. It makes me feel like my feelings and my hard work have zero value to you. 
          </p>

          <p>
            It is very heavy to keep giving your best to someone who does not appreciate it. I cannot keep pouring my love and energy into things that are thrown away so easily. 
          </p>

          <p>
            So, I am making a hard choice today. This is the very last effort I will make for you. From today onwards, I am stepping back. I will not put my time or feelings into making anything special anymore, because it is clear that you do not value it.
          </p>

          <div className="pt-8 mt-8 border-t border-zinc-900 text-center">
            <p className="text-zinc-600 italic text-sm">
              There is nothing else left to see here.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LastMessage;