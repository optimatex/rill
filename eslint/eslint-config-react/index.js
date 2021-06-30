module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', '@rill/eslint-config-ts'],

  plugins: ['jsx-a11y', 'react', 'react-hooks'],

  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
  },

  rules: {
    // Styled components
    // '@typescript-eslint/tslint/config': [
    //   'warn',
    //   {
    //     lintFile: '', // path to tslint.json of your project
    //     rules: {
    //       // tslint rules (will be used if `lintFile` is not specified)
    //     },
    //     rulesDirectory: [
    //       // array of paths to directories with rules, e.g. 'node_modules/tslint/lib/rules' (will be used if `lintFile` is not specified)
    //     ],
    //   },
    // ],
    // React
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-bind': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/require-default-props': 'off', // because of ts-styled component collision + why default props for false or undefined values?????!!!
    'react/require-render-return': 'error',
    'react/forbid-foreign-prop-types': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-no-bind': 'off',
  },
};
