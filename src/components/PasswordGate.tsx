import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PASSWORD = "Sokkers@10";
const STORAGE_KEY = "site-unlocked";

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      // Session storage can be unavailable in privacy modes.
    }
    setChecked(true);
  }, []);

  if (!checked) return null;

  return (
    <AnimatePresence mode="wait">
      {unlocked ? (
        <motion.div
          key="site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      ) : (
        <LockScreen
          key="lock"
          onUnlock={() => {
            try {
              sessionStorage.setItem(STORAGE_KEY, "true");
            } catch {
              // Unlock in-memory even if storage is blocked.
            }
            setUnlocked(true);
          }}
        />
      )}
    </AnimatePresence>
  );
}

function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="grid min-h-screen place-items-center bg-gradient-to-br from-cream via-blush/40 to-peach/40 px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full max-w-md rounded-2xl border border-border/60 bg-card p-6 shadow-lift sm:p-10 ${error ? "animate-shake" : ""}`}
      >
        <div className="text-center">
          <div className="text-5xl mb-3">🤫</div>
          <h1 className="font-display text-3xl font-black text-slate-warm sm:text-4xl">
            Members <span className="text-teal">only</span>
          </h1>
          <p className="mt-3 text-foreground/70">
            Drop the secret word to enter the lore.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-3">
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="the secret word…"
            className="w-full px-5 py-3 rounded-full bg-muted/60 border border-border focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30 transition-all text-foreground placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="w-full px-5 py-3 rounded-full bg-teal text-primary-foreground font-bold hover:scale-[1.02] hover:shadow-soft active:scale-[0.98] transition-all"
          >
            Unlock the chaos →
          </button>
          {error && (
            <p className="text-sm text-center text-destructive font-semibold">
              Nope, try again 👀
            </p>
          )}
        </form>

        <p className="mt-6 text-xs text-center text-muted-foreground">
          Ask the group chat if you forgot.
        </p>
      </motion.div>
    </motion.div>
  );
}
