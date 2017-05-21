import { rollup } from 'rollup';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import babel from 'rollup-plugin-babel';

const input = {
  entry: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        ['es2015', {
          modules: false,
        }],
        'stage-0',
      ],
    }),
  ],
};
const output = {
  format: 'umd',
  moduleName: 'setCustomProperties',
  dest: 'dist/dynamic-css-properties.js',
};

// Create default bundle.
rollup(input).then(bundle => bundle.write(output));

// Create minified bundle.
rollup({
  ...input,
  plugins: [
    ...input.plugins,
    uglify({}, minify),
  ],
}).then(bundle => {
  bundle.write({
    ...output,
    dest: 'dist/dynamic-css-properties.min.js',
  });
});
