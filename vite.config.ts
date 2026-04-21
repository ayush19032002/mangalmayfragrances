import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["78f0-2409-40c1-1003-a053-7ddf-4b31-85ef-538.ngrok-free.app"]
  }
})
