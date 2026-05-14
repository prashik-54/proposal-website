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
import LastMessage from "./pages/LastMessage";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Check if we are on the LastMessage page to hide navigation and background effects
  const isLastMessagePage = location.pathname === "/";

  return (
    <>
      {!isLastMessagePage && (
        <>
          <Navigation />
          <GlobalBackground />
          <BackgroundMusic />
        </>
      )}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* The Gateway / Goodbye Message */}
          <Route path="/" element={<LastMessage />} />
          
          {/* The Original Website starts here */}
          <Route path="/memories" element={<PageTransition><Landing /></PageTransition>} />
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
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-romantic-gradient">
            <AnimatedRoutes />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;