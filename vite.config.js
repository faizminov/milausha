import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // <-- Обязательно добавьте это!

// https://vite.dev
export default defineConfig({
  base: '/milausha/' , 
  plugins: [
    vue(),
    tailwindcss(), // <-- И это включит магию Tailwind
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


