module.exports = {
  extends: ['prettier/@typescript-eslint', '@rill/eslint-config-basic'],

  env: {
    es6: true,
  },

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'jest'],

  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
