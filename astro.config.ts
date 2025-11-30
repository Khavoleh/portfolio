import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import type { AstroUserConfig } from 'astro';

const config: AstroUserConfig = {
  vite: {
    plugins: [tailwind()],
  },
};

export default defineConfig(config);
