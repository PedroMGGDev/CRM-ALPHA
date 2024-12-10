import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // Caso precise de polyfills para módulos Node.js no navegador
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
      fs: 'browserify-fs',  // Certifique-se de que o uso do 'fs' seja realmente necessário
    },
  },
  optimizeDeps: {
    include: [
      'stream-browserify',
      'crypto-browserify',
      'browserify-fs',
    ],
  },
  build: {
    rollupOptions: {
      external: ['stream', 'crypto', 'fs'],  // Para evitar erros durante o bundling
    },
  },
});
