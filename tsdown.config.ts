import { defineConfig } from 'tsdown';
import Vue from 'unplugin-vue/rolldown';

export default defineConfig({
  entry: ['./src/index.ts'],

  exports: true,
  dts: {
    vue: true,
  },

  plugins: [Vue({ isProduction: true })],

  css: {
    inject: true,
    splitting: true,
  },
});
