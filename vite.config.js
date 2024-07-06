import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // Adjust based on your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
