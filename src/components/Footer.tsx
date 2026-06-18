import { Flame, Popcorn, PartyPopper, Music2 } from "lucide-react";

export default function Footer({ signoff }: { signoff?: string }) {
  return (
    <footer className="mt-14 border-t border-border/60 bg-cream/50 sm:mt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6 sm:py-10">
        <p className="max-w-3xl text-center font-display text-base leading-relaxed text-slate-warm sm:text-left sm:text-lg">
          {signoff ??
            "Here's to the chaos, the lore, and everything in between. Four years, one group chat, forever."}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          {[Flame, Popcorn, PartyPopper, Music2].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="fun"
              className="h-10 w-10 grid place-items-center rounded-full bg-white border border-border text-slate-warm hover:text-teal hover:scale-110 hover:shadow-soft transition-all"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
