module.exports = {
  env: {
    es6: true,
  },

  rules: {
    'no-console': 'error',
    'no-var': 'error',
    'no-unused-vars': 'off', // because of errors in types https://stackoverflow.com/questions/57802057/eslint-configuring-no-unused-vars-for-typescript
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-body-style': ['error', 'as-needed'],
  },
};
