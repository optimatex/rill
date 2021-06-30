module.exports = {
  extends: ['@rill/eslint-config-ts', 'plugin:cypress/recommended'],

  plugins: ['cypress'],

  env: {
    'cypress/globals': true,
  },

  globals: {
    expect: true,
    cy: true,
    Cypress: true,
  },

  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
  },
};
