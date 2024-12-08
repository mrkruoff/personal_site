/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    exclude: ["archive/**", "node_modules/**"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts", // Path to your setup file
  },
});
