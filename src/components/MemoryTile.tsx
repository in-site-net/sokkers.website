import { useRef } from "react";
import type { MemoryItem } from "@/data/memories";

export default function MemoryTile({ memory }: { memory: MemoryItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="group mb-3 break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-card shadow-soft transition-all duration-300 hover:shadow-lift sm:rounded-2xl">
      <div className="relative overflow-hidden">
        {memory.type === "video" ? (
          <video
            ref={videoRef}
            src={memory.src}
            poster={memory.poster}
            muted
            loop
            playsInline
            preload="metadata"
            onMouseEnter={() => videoRef.current?.play().catch(() => {})}
            onMouseLeave={() => videoRef.current?.pause()}
            onClick={() => {
              const v = videoRef.current;
              if (!v) return;
              if (v.paused) v.play().catch(() => {});
              else v.pause();
            }}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
          />
        ) : (
          <img
            src={memory.src}
            alt={memory.alt ?? ""}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
    </div>
  );
}
