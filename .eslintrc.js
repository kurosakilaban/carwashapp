module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    globals: {
      process: 'readonly', // Add this line
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  };
  