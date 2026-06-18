import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoUrl from "@/assets/icon.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-cream/70 border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3 px-3 py-3 sm:flex-nowrap sm:justify-between sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 font-display text-lg font-black text-slate-warm transition-colors hover:text-teal sm:text-2xl"
        >
          <img
            src={logoUrl}
            alt="Sokkers logo"
            className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-white/80 shadow-soft sm:h-9 sm:w-9"
          />
          <span className="truncate">
            Sokkers<span className="text-teal">Saga</span>
          </span>
        </Link>

        <div className="flex max-w-full items-center gap-2 overflow-x-auto [scrollbar-width:none] sm:gap-3 [&::-webkit-scrollbar]:hidden">
          <PillLink to="/homies">Meet My Homies</PillLink>
          <PillLink to="/memories">Memories</PillLink>
        </div>
      </nav>
    </motion.header>
  );
}

function PillLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-all duration-200 hover:scale-[1.04] hover:shadow-soft sm:px-5 sm:text-sm ${
          isActive
            ? "bg-teal text-primary-foreground shadow-soft"
            : "bg-white/80 text-slate-warm border border-border hover:bg-white"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
