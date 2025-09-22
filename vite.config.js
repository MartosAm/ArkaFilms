// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pf/', // Nombre del repositorio para GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false, // Reduce el tamaño del bundle
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['react-icons'],
          emailjs: ['@emailjs/browser']
        }
      }
    },
    chunkSizeWarningLimit: 600 // Aumenta el límite para chunks grandes
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons']
  }
});