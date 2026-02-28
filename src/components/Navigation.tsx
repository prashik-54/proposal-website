import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/story', label: 'Our Story' },
  { path: '/loyalty', label: 'Loyalty' },
  { path: '/forever', label: 'Forever' },
  { path: '/photo', label: 'Photo' },
  { path: '/letter', label: 'Letter' },
  { path: '/the-ring', label: 'The Ring' },
  { path: '/my-promise', label: 'Promise' },
  { path: '/acceptance', label: 'Acceptance' },
];

// Dynamic Greeting Generator for Mobile Menu
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning, my love.";
  if (hour < 17) return "Good afternoon, beautiful.";
  if (hour < 21) return "Good evening, Vanshu.";
  return "Late night thoughts of you, Vanshu.";
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Smart Scroll Logic (Upgraded for Mobile)
  useMotionValueEvent(scrollY, "change", (latest) => {
    // FIX 1: Never hide the navbar if the mobile menu is open!
    if (isOpen) {
      setIsHidden(false);
      return;
    }

    const previous = scrollY.getPrevious() ?? 0;
    
    // FIX 2: Ignore iOS elastic "bounce" scrolling at the very top of the screen
    if (latest < 0) return;

    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Extra safety for iOS Safari
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
      document.body.style.position = 'static';
    };
  }, [isOpen]);

  // Handle Dark Mode Initialization and Local Storage
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <>
      {/* The Floating Navigation Bar */}
      <motion.header 
        animate={{ y: isHidden ? "-150%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[60] pt-4 px-4 pointer-events-none"
      >
        <div className="container mx-auto max-w-6xl">
          <nav className="relative flex items-center justify-between h-14 sm:h-16 px-5 sm:px-6 bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-primary/20 rounded-full shadow-[0_10px_40px_rgba(201,24,74,0.1)] pointer-events-auto transition-all duration-300">
            
            {/* Left side: Logo */}
            <div className="flex items-center gap-3 relative z-10">
              <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="font-romantic text-xl sm:text-2xl text-primary drop-shadow-sm mt-1">Vanshu</span>
              </Link>
            </div>

            {/* Middle: Desktop Links */}
            <div className="hidden lg:flex items-center justify-center relative z-10 flex-1 px-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "relative px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-medium tracking-wide transition-colors duration-300 rounded-full shrink-0",
                      isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-primary"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-primary/90 rounded-full -z-10 shadow-[0_0_15px_rgba(201,24,74,0.3)]"
                        transition={{ type: "spring", stiffness: 70, damping: 15 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right side: Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-1 sm:gap-2 relative z-50">
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 -mr-2 rounded-full text-primary hover:bg-primary/10 transition-colors focus:outline-none"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </nav>
        </div>
      </motion.header>

      {/* Cinematic Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            /* FIX 3: Changed to top-0 left-0 w-full h-[100dvh] and added overscroll-none */
            className="fixed top-0 left-0 w-full h-[100dvh] z-50 flex flex-col items-center justify-start pt-24 pb-8 bg-background/95 lg:hidden overflow-hidden overscroll-none"
          >
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
            <Sparkles className="absolute top-32 right-12 w-6 h-6 text-primary/30 animate-pulse" />
            
            {/* Dynamic Time Greeting */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center mb-6 px-6 shrink-0"
            >
              <p className="font-romantic text-2xl text-primary drop-shadow-sm">
                {getGreeting()}
              </p>
            </motion.div>

            <motion.div 
              initial="closed" animate="open" exit="closed"
              variants={{
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
              }}
              /* FIX 4: Added overscroll-contain to make inner scrolling perfectly smooth */
              className="flex flex-col items-center gap-3 w-full px-6 overflow-y-auto no-scrollbar flex-1 pb-10 overscroll-contain"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.div 
                    key={item.path} 
                    variants={{ closed: { opacity: 0, y: 20 }, open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }} 
                    className="w-full max-w-xs shrink-0"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block w-full text-center px-6 py-4 rounded-2xl text-lg sm:text-xl font-medium tracking-wide transition-all duration-300",
                        isActive ? "bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 scale-105" : 
                        "bg-white/5 dark:bg-white/5 text-foreground/80 hover:bg-primary/10 hover:text-primary border border-white/10"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile Footer Signature */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex items-center justify-center gap-2 text-xs font-mono tracking-[0.2em] text-muted-foreground/50 uppercase shrink-0 mt-4 pb-4"
            >
              <span>Vanshu</span>
              <Heart className="w-3 h-3 text-primary/50 fill-primary/30 animate-pulse-heart" />
              <span>Prashik</span>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;