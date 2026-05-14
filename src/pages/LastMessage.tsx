// src/pages/LastMessage.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartCrack } from 'lucide-react';

const LastMessage = () => {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0a] text-gray-300 flex flex-col items-center py-16 px-6 md:px-12 selection:bg-white/20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-3xl w-full space-y-8"
      >
        <div className="flex justify-center mb-12">
          <HeartCrack className="w-12 h-12 text-zinc-600 animate-pulse opacity-50" strokeWidth={1} />
        </div>

        <h1 className="text-3xl md:text-5xl font-light text-white mb-10 tracking-wide">
          My Last Message, <br/>
          <span className="text-zinc-500 text-2xl md:text-4xl mt-2 block">To Vanshu.</span>
        </h1>

        <div className="space-y-6 text-sm md:text-base leading-relaxed text-zinc-400 font-light tracking-wide">
          <p>
            I built this website completely from scratch. I typed every single line of code with so much love, thinking I was building a permanent, safe digital home for our future. I truly believed in my heart that this was just the start of our forever together.
          </p>

          <p>
            But everything was torn away so fast. On May 12th, 2026, you received a marriage proposal from someone else. Someone who already has the money, the status, and the settled life that I have been struggling and working so hard every day to build for us. You accepted it. And the very next morning, on May 13th, you called me and ended everything. Just like that, you walked out of my life.
          </p>

          <p>
            It hurts so much to know that the ring I gave you, which held all my love and hopes, will soon be taken off your finger and replaced by his. When you left, you simply told me that what happened between us was just "normal," that it didn't mean much, and that I should just move on like it was nothing. But Vanshu, for me, nothing about us was normal. I took every single late-night talk, every dream of the future family we named, and every promise completely seriously. I gave you my entire soul with a pure, honest heart.
          </p>

          <p>
            You used to promise me that no matter what happened, you would marry me and be mine always. You broke that promise, but I am not going to break mine. I promised you that if I couldn't marry you, I would never marry anyone else in this lifetime. I told you I am yours, and only yours, until my very last breath. I meant every word. Even if it means I will spend the rest of my life completely alone, I can pass away happily knowing I stayed 100% loyal to the only girl I ever loved.
          </p>

          <p>
            I know the painful truth now. I know that my pure love, my blind loyalty, and all the silent hard work I put into this website didn't matter to you at all in the end. My love simply lost to the comfort of money. I know you will never look back, and you will never come back to me. But my heart does not know how to unlove you, so it will just keep waiting.
          </p>

          <p>
            This website will stay right here on the internet. Even long after I am gone, these pages will exist as a permanent proof of how truly, deeply, and madly a boy once loved you. But as for my own life, I am giving up. I don't have the energy to fight for my career or my dreams anymore, because you were the only reason I wanted to be successful. 
          </p>

          {/* The deeply emotional, long best wishes section */}
          <div className="pt-6 mt-6 border-t border-zinc-800/50">
            <p className="text-zinc-300 italic leading-relaxed">
              Even after all this pain, my heart cannot hold any anger toward you. It only knows how to love you. So, as you step away from me and walk into this brand new life with him, I want to wish you the absolute best from the very bottom of my heart. 
              <br/><br/>
              I hope he treats you with all the gentleness and care that you deserve. I hope he looks at you the same way I always did—like you are the most precious thing in the world. I hope you find the deep comfort, the financial security, and the beautiful, happy family you always dreamed of having. Please always take good care of your health, eat on time, and keep that beautiful smile on your face. 
              <br/><br/>
              Thank you for the beautiful moments when we were happy, and thank you for being my one and only love. I am setting you free with no hatred, only a broken heart. Congratulations on your marriage, Vanshu. May you have a beautiful, long, and incredibly happy life, even if I am not a part of it anymore.
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="pt-16 pb-10 flex flex-col items-center mt-8"
        >
          <p className="text-xs tracking-widest text-zinc-600 uppercase mb-8">
            The archive of what we were
          </p>
          
          <Link to="/memories">
            <button className="px-8 py-3 bg-transparent border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-300 text-sm tracking-widest uppercase flex items-center gap-3 group">
              View The Original Website
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </button>
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default LastMessage;