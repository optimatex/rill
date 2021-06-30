module.exports = {
  extends: [
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],

  parser: '@typescript-eslint/parser',

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      typescript: {
        project: 'path/to/folder',
      },

      // Multiple tsconfigs (Useful for monorepos)

      // use a glob pattern
      typescript: {
        project: 'packages/*/tsconfig.json',
      },

      // use an array
      typescript: {
        project: [
          'packages/module-a/tsconfig.json',
          'packages/module-b/tsconfig.json',
        ],
      },

      // use an array of glob patterns
      typescript: {
        project: ['packages/*/tsconfig.json', 'other-packages/*/tsconfig.json'],
      },
    },
  },

  rules: {
    'import/no-unresolved': 0,
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-named-as-default-member': 'error',
  },
};
