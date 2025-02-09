import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({
      name: "clothing-category",
      filename: "remoteEntry.js",
      exposes: {
        "./clothing-page": "./src/index.ts",
      },
      shared: [],
    }),
  ],

  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true
  }
});
