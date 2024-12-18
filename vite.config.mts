import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  publicDir:  './public',
  root: './src',
  build: {
    outDir: './dist',
  },
  plugins: [
    react(),
  ],
  server: {
    open: true,
  }
});