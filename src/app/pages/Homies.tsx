import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MemberCard from "@/components/MemberCard";
import { members } from "@/data/members";
import Footer from "@/components/Footer";
import BackHomeButton from "@/components/BackHomeButton";

export default function Homies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / members.length;
      setActive(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / members.length;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  };

  return (
    <>
      <BackHomeButton />
      <section className="px-4 pb-8 pt-36 sm:px-6 sm:pb-12 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="font-display text-4xl font-black text-slate-warm sm:text-5xl lg:text-6xl">
            Meet the <span className="text-teal">Squad</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            The friendly lore of each person, told with love (and chaos).
          </p>
        </motion.div>
      </section>

      <section className="pb-12">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 [scrollbar-width:none] sm:gap-5 sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {members.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
          <div className="shrink-0 w-4" aria-hidden />
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                active === i
                  ? "w-8 bg-teal"
                  : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      <Footer signoff="Ten idiots. One group. Zero regrets." />
    </>
  );
}
