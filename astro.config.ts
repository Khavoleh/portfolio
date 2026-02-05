import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';

const config: AstroUserConfig = {
  site: 'https://www.khavol.com/',
  integrations: [sitemap()],
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },
  vite: {
    server: {
      https: {
        key: './localhost-key.pem',
        cert: './localhost.pem',
      },
    },
    plugins: [tailwind()],
  },
};

export default defineConfig(config);
