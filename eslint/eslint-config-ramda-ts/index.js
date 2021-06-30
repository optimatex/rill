module.exports = {
  extends: ['plugin:ramda/recommended'],

  plugins: ['ramda'],

  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},
    },
    'import/ignore': ['node_modules', '\\.(|scss|css|svg|json)$'],
  },

  rules: {
    'ramda/always-simplification': 'error',
    'ramda/any-pass-simplification': 'error',
    'ramda/both-simplification': 'error',
    'ramda/complement-simplification': 'error',
    'ramda/compose-simplification': 'error',
    'ramda/either-simplification': 'error',
    'ramda/eq-by-simplification': 'error',
    'ramda/filter-simplification': 'error',
    'ramda/if-else-simplification': 'error',
    'ramda/map-simplification': 'error',
    'ramda/merge-simplification': 'error',
    'ramda/pipe-simplification': 'error',
    'ramda/prefer-ramda-boolean': 'error',
    'ramda/prop-satisfies-simplification': 'error',
    'ramda/reduce-simplification': 'error',
    'ramda/reject-simplification': 'error',
    'ramda/set-simplification': 'error',
    'ramda/unless-simplification': 'error',
    'ramda/when-simplification': 'error',
  },
};
