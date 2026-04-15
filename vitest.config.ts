import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['src/**/*.test.ts'],
  },
  resolve: {
    alias: {
      '@shared': resolve(__dirname, './src/shared'),
      '@components': resolve(__dirname, './src/components'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
});
