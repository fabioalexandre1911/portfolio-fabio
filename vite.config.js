import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-fabio/', // obrigatório para GitHub Pages
  plugins: [react()],
});
