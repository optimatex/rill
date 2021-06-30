module.exports = {
  extends: ['plugin:mocha/recommended'],

  env: {
    mocha: true,
  },

  rules: {
    'mocha/no-skipped-tests': 'error',
    'mocha/no-exclusive-tests': 'error',
  },
};
