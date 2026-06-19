export type MemoryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
  autoVertical?: boolean;
  enableAudioOnHover?: boolean;
};

// Import every mp4 in src/assets/memories
const videoModules = import.meta.glob(
  "/src/assets/memories/*.mp4",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const getVideo = (fileName: string): string => {
  const path = `/src/assets/memories/${fileName}`;
  return videoModules[path];
};

export const memories: MemoryItem[] = Array.from(
  { length: 44 },
  (_, i) => ({
    id: String(i + 1),
    type: "video" as const,
    src: getVideo(`mem${i + 1}.mp4`),
    alt: `mem${i + 1}`,
    autoVertical: true,
  })
);
