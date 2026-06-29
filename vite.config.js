import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Se for subir no GitHub Pages, troque pelo nome do seu repositório:
  // base: '/tioferreira-links/',
  base: '/',
  server: {
    host: true,
    port: 5173,
  },
})
