import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import jsx from 'rollup-plugin-jsx';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      // exports: 'named',
      // sourcemap: true,
      // strict: false,
    },
  ],
  plugins: [
    postcss({
      extract: false,
      modules: false,
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
