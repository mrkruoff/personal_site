import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: ['archive/**', 'node_modules/**'],
        globals: true,
        environment: "jsdom",
        setupFiles: ["./setupTests.js"],
    },
});
