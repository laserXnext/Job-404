import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/signupdata": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/logindata": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
