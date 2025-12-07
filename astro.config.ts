import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import type { AstroUserConfig } from 'astro';

const config: AstroUserConfig = {
  site: 'https://www.khavol.com/',
  integrations: [sitemap()],
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },
  vite: {
    plugins: [tailwind()],
  },
};

export default defineConfig(config);
