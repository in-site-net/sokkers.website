import { useEffect } from "react";
import MemoryTile from "@/components/MemoryTile";
import { memories } from "@/data/memories";
import Footer from "@/components/Footer";
import BackHomeButton from "@/components/BackHomeButton";

export default function Memories() {
  useEffect(() => {
    // Preload video assets to make the grid load faster when navigating here.
    // For each memory, try common video property names and create preload links
    const potentialKeys = ["src", "video", "url", "href"];
    const links: HTMLLinkElement[] = [];

    memories.forEach((m) => {
      for (const k of potentialKeys) {
        const val = (m as unknown as Record<string, string | undefined>)?.[k];
        if (typeof val === "string" && val.match(/\.(mp4|webm|ogg)(\?|$)/i)) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "video";
          link.href = val;
          // crossOrigin may help if videos are served from CDN
          link.crossOrigin = "anonymous";
          document.head.appendChild(link);
          links.push(link);

          // also fetch to warm browser cache (won't keep response body)
          fetch(val, { mode: "cors", cache: "force-cache" }).catch(() => {});
          break;
        }
      }
    });

    return () => {
      links.forEach((l) => l.parentNode?.removeChild(l));
    };
  }, []);

  useEffect(() => {
    // Ensure any video tiles start playing automatically (muted & inline) when
    // landing on or reloading the page.
    const setAndPlay = () => {
      const vids = Array.from(
        document.querySelectorAll<HTMLVideoElement>("video"),
      );
      vids.forEach((v) => {
        try {
          v.muted = true;
          v.loop = true;
          v.playsInline = true;
          // Some browsers require a user gesture; muted autoplay usually works.
          v.play().catch(() => {});
        } catch {
          // ignore
        }
      });
    };

    // Try immediately and also after window load to catch late-rendered videos
    setAndPlay();
    window.addEventListener("load", setAndPlay);

    return () => {
      window.removeEventListener("load", setAndPlay);
      // pause videos on unmount
      const vids = Array.from(
        document.querySelectorAll<HTMLVideoElement>("video"),
      );
      vids.forEach((v) => {
        try {
          v.pause();
        } catch {
          // ignore
        }
      });
    };
  }, []);

  return (
    <>
      <BackHomeButton />
      <section className="px-4 pb-8 pt-36 sm:px-6 sm:pb-10 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-black text-slate-warm sm:text-5xl lg:text-6xl">
            Our <span className="text-teal">Memories</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 sm:mt-10 sm:text-lg lg:mt-12">
            A vast gallery of everything we made together — four years, way too
            many inside jokes,and memories we'll never let go of.
          </p>
        </div>
      </section>

      <section className="px-3 pb-10 sm:px-6">
        <div className="mx-auto max-w-6xl columns-1 gap-3 min-[420px]:columns-2 md:columns-3 lg:columns-4">
          {memories.map((m) => (
            <MemoryTile key={m.id} memory={m} />
          ))}
        </div>
      </section>

      <section className="px-4 py-10 text-center sm:px-6 sm:py-12">
        <p className="mx-auto max-w-3xl font-display text-2xl text-slate-warm sm:text-3xl">
          Here's to the <span className="text-teal">chaos</span>, the lore, and
          everything in between.
        </p>
      </section>

      <Footer signoff="four years. one groupchat. forever." />
    </>
  );
}
