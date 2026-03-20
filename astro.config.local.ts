import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import { astroConfig } from './astro-config';

const config: AstroUserConfig = {
  ...astroConfig,
  adapter: node({ mode: 'standalone' }),
};

export default defineConfig(config);
