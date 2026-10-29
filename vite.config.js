import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        company: resolve(process.cwd(), 'company.html'),
        main: resolve(process.cwd(), 'main.html'),
      },
    },
  },
});