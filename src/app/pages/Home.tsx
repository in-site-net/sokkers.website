import { motion } from "framer-motion";
import groupPhoto from "@/assets/sokkers-group.jpeg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="min-h-screen px-4 pb-8 pt-32 sm:px-6 sm:pb-12 lg:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-10 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 flex flex-col justify-center lg:order-1"
          >
            <h1 className="font-display text-4xl font-black leading-[1.08] text-slate-warm sm:text-5xl lg:text-6xl">
              These are my <span className="text-teal">certified idiots</span>{" "}
              with
              <span className="italic" style={{ color: "oklch(0.55 0.15 35)" }}>
                unforgettable lore
              </span>
              . <span aria-hidden>✨🤍</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground/80 sm:mt-10 sm:text-lg lg:mt-14">
              <span className="font-display font-bold text-slate-warm">
                Sokkers
              </span>{" "}
              — different stories, different dreams, one gang, endless memories.
              That's us!
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/80 sm:mt-8 sm:text-lg lg:mt-12">
              Through photos, stories, and all the moments that brought us
              together — some bonds are simply meant to be.{" "}
              <span aria-hidden>❤️</span> From random nights to lifelong
              memories, somehow we always find our way back to each other.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="order-1 mx-auto w-full max-w-5xl lg:order-2"
          >
            <div className="relative w-full rounded-md bg-white p-2 pb-10 shadow-lift sm:p-3 sm:pb-12">
              <img
                src={groupPhoto}
                alt="The Sokkers squad together"
                className="h-[50vh] max-h-[560px] min-h-[300px] w-full rounded-sm bg-muted object-contain sm:h-[56vh] lg:h-[calc(100vh-10rem)]"
              />
              <p className="absolute bottom-3 left-0 right-0 text-center font-display text-lg text-slate-warm sm:text-xl">
                the squad ♡
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer signoff="Here's to the chaos, the lore, and everything in between. Four years, one group chat, forever." />
    </>
  );
}
