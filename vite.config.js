import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/su-rps-game/',
  plugins: [react()]
})
