import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // ✅ Add this
import { defineConfig } from 'vite';

const viteConfig = defineConfig({
  plugins: [
    react(),         // ✅ Enables React + automatic JSX transform
    tailwindcss(),   // already added
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});

export default viteConfig;
