import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/meu-curriculo/', // coloque o nome do seu repositório aqui, com as barras
  plugins: [
    react(),
    tailwindcss(),
  ],
})
