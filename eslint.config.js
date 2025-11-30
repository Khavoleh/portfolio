import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-plugin-prettier';

const tsParser = tseslint.parser;
const astroParser = astro.parser;

const config = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,
  tseslint.configs.recommended,

  {
    plugins: {
      prettier: prettier,
    },
  },

  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
  },

  {
    ignores: ['dist/**', '**/*.d.ts', 'node_modules/**', '.idea/**', '.astro/**'],
  },
];

export default defineConfig(config);
