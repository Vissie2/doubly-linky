import * as esbuild from 'esbuild';
import process from 'node:process';

/**
 * @type {import('esbuild').BuildOptions}
 */
const options = {
  alias: {
    '~': 'src',
  },
  bundle: true,
  entryPoints: ['./src/index.ts'],
  format: 'esm',
  target: 'es6',
  minify: true,
  outfile: 'lib/index.js',
};

if (process.argv.includes('--watch')) {
  const ctx = await esbuild.context(options);
  ctx.watch();
} else {
  esbuild.build(options);
}
