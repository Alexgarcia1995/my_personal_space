import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({

  // ↓↓↓ change to logLevel: 'info' ↓↓↓
  logLevel: 'info',
  // ↑↑↑ change to logLevel: 'info' ↑↑↑

  plugins: [vue()],
  server: {
    host: process.env.VITE_HOST || "127.0.0.1",
    port: process.env.VITE_PORT || "5173",
    hmr: {
      clientPort: process.env.VITE_CLIENT_PORT || null
    }
  }
})
