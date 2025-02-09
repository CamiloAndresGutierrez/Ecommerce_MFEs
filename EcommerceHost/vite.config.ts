import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({
        name: 'host-app',
        remotes: {
            "mfe-clothing-category": "http://localhost:5001/assets/remoteEntry.js",
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
    cors: true
  }
});
