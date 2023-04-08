// node-externals.ts
import { Plugin } from 'vite';
import { createRequire } from 'module';

// following 2 lines are because the types from `rollup-plugin-node-externals` seems not working
const require = createRequire(import.meta.url);
const { externals } = require('rollup-plugin-node-externals');

export function nodeExternals(): Plugin {
 return {
  enforce: 'pre',
  ...externals(),
 };
}