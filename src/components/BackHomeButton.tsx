import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackHomeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed left-3 top-24 z-40 sm:left-6 sm:top-20"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white/90 px-3 py-2 text-xs font-semibold text-slate-warm shadow-soft backdrop-blur transition-all hover:scale-[1.04] hover:bg-white hover:shadow-lift sm:px-4 sm:text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </motion.div>
  );
}
