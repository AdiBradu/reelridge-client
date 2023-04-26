/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import dns from 'dns';
import react from '@vitejs/plugin-react';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/__tests__/setup.ts',
    coverage: {
      provider: 'c8',
    },
  },
});
