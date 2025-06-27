import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // 🔥 ensures it's building from the root folder
  build: {
    outDir: 'dist',
  },
});
