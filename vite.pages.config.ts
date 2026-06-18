import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE_PATH ?? "/",
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    outDir: "dist/pages",
    emptyOutDir: true,
  },
});
