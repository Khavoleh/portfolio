import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import { SHARED_ASTRO_CONFIG } from './shared-astro-config';

const config: AstroUserConfig = {
  ...SHARED_ASTRO_CONFIG,
  adapter: node({ mode: 'standalone' }),
  vite: {
    ...SHARED_ASTRO_CONFIG.vite,
    server: {
      https: {
        key: './localhost-key.pem',
        cert: './localhost.pem',
      },
    },
  },
};

export default defineConfig(config);
