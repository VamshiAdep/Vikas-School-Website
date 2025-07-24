import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes to local network
    port: 5173,       // You can change this if needed
  },
  build: {
    outDir: 'dist',   // Default output folder for Vercel
  },
});
