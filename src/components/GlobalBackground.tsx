import { motion } from 'framer-motion';

const GlobalBackground = () => {
  // Create an array of 15 hearts with randomized properties
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.8, 0], // Pinkish transparent effect
            x: ['-20px', '20px', '-20px'], // Slight sway
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-primary/60" // Uses global pink with low opacity
          style={{
            left: heart.left,
            fontSize: heart.size,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width={heart.size} height={heart.size}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default GlobalBackground;