import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import PasswordGate from "@/components/PasswordGate";
import Navbar from "@/components/Navbar";

import Home from "./pages/Home";
import Homies from "./pages/Homies";
import Memories from "./pages/Memories";
import TitleTrack from "./pages/TitleTrack";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/homies" element={<Homies />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/title-track" element={<TitleTrack />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function AppRouter() {
  const baseUrl = import.meta.env.BASE_URL;
  const basename =
    baseUrl === "/" || baseUrl === "./" ? undefined : baseUrl;

  return (
    <PasswordGate>
      <BrowserRouter basename={basename}>
        <div className="min-h-screen bg-gradient-to-b from-cream via-blush/20 to-cream">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </PasswordGate>
  );
}
