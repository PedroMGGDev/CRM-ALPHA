import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
      fs: 'browserify-fs',
    },
  },
});
