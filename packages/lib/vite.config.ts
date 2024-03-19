import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
    },
  },
});
