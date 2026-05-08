// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import BackgroundMusic from "./components/BackgroundMusic";
import GlobalBackground from "./components/GlobalBackground";
import PageTransition from "./components/PageTransition";
import Landing from "./pages/Landing";
import Story from "./pages/Story";
import Loyalty from "./pages/Loyalty";
import Forever from "./pages/Forever";
import Photo from "./pages/Photo";
import Letter from "./pages/Letter";
import TheRing from "./pages/TheRing";
import MyPromise from "./pages/MyPromise";
import Acceptance from "./pages/Acceptance";
import NotFound from "./pages/NotFound";
import MyApology from "./pages/MyApology";

// IMPORT YOUR NEW PAGE
import LastMessage from "./pages/LastMessage";

const queryClient = new QueryClient();

// ==========================================
// 🔴 THE SWITCH: Change to 'false' to restore the original website
const SHOW_LAST_MESSAGE = true; 
// ==========================================

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
        <Route path="/story" element={<PageTransition><Story /></PageTransition>} />
        <Route path="/loyalty" element={<PageTransition><Loyalty /></PageTransition>} />
        <Route path="/forever" element={<PageTransition><Forever /></PageTransition>} />
        <Route path="/photo" element={<PageTransition><Photo /></PageTransition>} />
        <Route path="/letter" element={<PageTransition><Letter /></PageTransition>} />
        <Route path="/the-ring" element={<PageTransition><TheRing /></PageTransition>} />
        <Route path="/my-promise" element={<PageTransition><MyPromise /></PageTransition>} />
        <Route path="/acceptance" element={<PageTransition><Acceptance /></PageTransition>} />
        <Route path="/my-apology" element={<MyApology />} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  // If the switch is true, ONLY show the message page. No navigation, no music.
  if (SHOW_LAST_MESSAGE) {
    return <LastMessage />;
  }

  // Otherwise, load the normal website
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-romantic-gradient">
            <Navigation />
            <GlobalBackground />
            <BackgroundMusic />
            <AnimatedRoutes />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;