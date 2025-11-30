import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import type { AstroUserConfig } from 'astro';

const config: AstroUserConfig = {
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        "font-src 'self'",
        "connect-src 'self'",
        "frame-ancestors 'none'",
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
