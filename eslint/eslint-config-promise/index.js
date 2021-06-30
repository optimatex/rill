module.exports = {
  extends: ['plugin:promise/recommended'],

  parser: '@typescript-eslint/parser',

  plugins: ['promise'],

  rules: {
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/no-nesting': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'error',
    'promise/prefer-await-to-then': 'warn',
    'promise/prefer-await-to-callbacks': 0,
  },
};
