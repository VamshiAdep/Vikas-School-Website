import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const viteConfig = defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // this exposes the dev server to your local network
    port: 5173, // optional, or change it
  },
});

export default viteConfig;