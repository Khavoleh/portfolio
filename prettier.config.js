const config = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',

  plugins: ['prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
