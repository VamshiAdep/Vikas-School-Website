import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const viteConfig = defineConfig({
  plugins: [
    tailwindcss(),
  ],
});

export default viteConfig;