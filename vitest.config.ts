import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg", "**/*.webp"],
  test: {
    environment: "jsdom",
    globals: true, // <-- make expect, describe, it, etc. global like Jest
    setupFiles: "src/test/setupTests.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});
