/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: 'public',
    emptyOutDir: true,
    outDir: '../dist/app',
  },
  envDir: import.meta.resolve('..'),
  plugins: [react()],
  root: './app',
});
