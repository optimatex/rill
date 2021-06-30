module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],

  parser: '@typescript-eslint/parser',

  plugins: ['jest'],

  rules: {
    'jest/no-done-callback': 'off', // conflicts with supertest lib
    'jest/no-commented-out-tests': 'off',
    'jest/expect-expect': 0,
  },
};
