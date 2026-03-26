import tailwindcss from '@tailwindcss/vite';
import type { AstroUserConfig } from 'astro';

export const SHARED_ASTRO_CONFIG: AstroUserConfig = {
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    plugins: [tailwindcss()],
  },
};
