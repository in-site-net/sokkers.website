import { Link } from "react-router-dom";
import { Music2 } from "lucide-react";

export default function Footer({ signoff }: { signoff?: string }) {
return ( <footer className="mt-14 border-t border-border/60 bg-cream/50 sm:mt-20"> <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 sm:py-10"> <p className="max-w-3xl text-center font-display text-base leading-relaxed text-slate-warm sm:text-left sm:text-lg">
{signoff ??
"Here's to the chaos, the lore, and everything in between. Four years, one group chat, forever."} </p>

```
    <Link
      to="/title-track"
      aria-label="Listen to Title Track"
      className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3 text-slate-warm shadow-soft transition-all duration-300 hover:scale-105 hover:text-teal hover:shadow-lift"
    >
      <Music2 className="h-5 w-5 transition-transform group-hover:rotate-12" />
      <span className="font-medium">
        Mudhal Nee Mudivum Nee
      </span>
    </Link>
  </div>
</footer>
```

);
}
