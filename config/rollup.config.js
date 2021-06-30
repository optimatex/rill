import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

export default (pkg) => [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      globals(),
      builtins(),
      json(),
      typescript({
        typescript: require('typescript'),
        // useTsconfigDeclarationDir: false,
      }),
      filesize(),
    ],
  },
];
