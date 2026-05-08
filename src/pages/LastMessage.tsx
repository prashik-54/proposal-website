// src/pages/LastMessage.tsx
import { motion } from "framer-motion";

const LastMessage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl"
      >
        <h1 className="text-2xl font-semibold text-slate-200 mb-6 tracking-wide">
          To Vanshu,
        </h1>
        
        <div className="space-y-6 text-slate-400 text-sm md:text-base leading-relaxed">
          <p>
            I put a lot of time, thought, and heart into the efforts I make for you. When those efforts are dismissed or deleted without a second thought, it shows me that they aren't valued.
          </p>
          
          <p>
            This page is to let you know that this is my last effort. From today onwards, I am stepping back. I cannot keep pouring my energy into things that are not appreciated or respected.
          </p>

          <p className="pt-4 border-t border-slate-800 text-slate-500 italic">
            There is nothing else to see here.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LastMessage;