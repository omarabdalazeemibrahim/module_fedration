import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig, preview } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared",
      filename: "shared.js",
      exposes: {
        "./Header": "./src/Header.tsx",
        "./Header2": "./src/Header2.tsx",
        "./Footer": "./src/Footer.tsx",
        "./PropsFile": "./src/PropsFile.tsx",
      },
      shared: ["react"],
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
