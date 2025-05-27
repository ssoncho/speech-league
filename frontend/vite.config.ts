import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./public/images"),
      "@icons": path.resolve(__dirname, "./public/icons"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@shared": path.resolve(__dirname, "./src/components/shared"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@sections": path.resolve(__dirname, "./src/components/sections"),
      "@layout": path.resolve(__dirname, "./src/components/layout"),
      "@mytypes": path.resolve(__dirname, "./src/types"),
      "@api": path.resolve(__dirname, "./src/api"),
    },
  },
  plugins: [
    react()
  ],
});
