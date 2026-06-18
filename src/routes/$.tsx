import { createFileRoute } from "@tanstack/react-router";
import AppRouter from "@/app/AppRouter";

export const Route = createFileRoute("/$")({
  component: AppRouter,
});
