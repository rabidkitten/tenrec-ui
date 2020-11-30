import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import jsx from 'rollup-plugin-jsx';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      plugins: [terser()],
    },
  ],
  plugins: [
    postcss({
      extract: false,
      modules: false,
      minimize: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.js', '.jsx', '.css'],
    }),
    commonjs(),
    jsx({ factory: 'React.createElement' }),
  ],
  external: (id) => /^react|styled-jsx|moment/.test(id),
  // plugins: [
  //   css(),
  //   jsx(),
  // ],
  // external: ['react', 'react-dom', 'moment'],
};
