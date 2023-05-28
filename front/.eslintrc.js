module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-new': 0,
    'no-restricted-globals': 0,
    'no-restricted-syntax': 0
  }
};
