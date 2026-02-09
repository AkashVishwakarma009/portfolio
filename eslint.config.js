import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      // Add custom rules here
    },
  },
];
