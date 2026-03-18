import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const config: AstroUserConfig = {
  site: 'https://www.khavol.com/en',
  integrations: [sitemap()],
  adapter: node({ mode: 'standalone' }),
  security: {
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
    plugins: [tailwindcss()],
  },
};

export default defineConfig(config);
