import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { SHARED_ASTRO_CONFIG } from './src/shared/constants';

const config: AstroUserConfig = {
  ...SHARED_ASTRO_CONFIG,
  site: 'https://www.khavol.com/en',
  integrations: [sitemap()],
  adapter: vercel(),
  security: {
    csp: {
      scriptDirective: {
        resources: ["'self'", 'https://cloud.umami.is'],
      },
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://api-gateway.umami.dev https://cloud.umami.is",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },
};

export default defineConfig(config);
