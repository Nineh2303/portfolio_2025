import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import svgLoader from 'vite-svg-loader'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
   
    },
  },
})
