import { createFileRoute } from "@tanstack/react-router";
import AppRouter from "@/app/AppRouter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sokkers" },
      { name: "description", content: "A small, chaotic, ride-or-die group of college besties — and this is our story." },
      { property: "og:title", content: "Sokkers" },
      { property: "og:description", content: "A digital yearbook for the squad." },
    ],
  }),
  component: AppRouter,
});
