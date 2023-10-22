import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./") }],
  },
});