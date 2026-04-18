import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { contactApiDevPlugin } from './vite-plugin-contact-api.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiDevPlugin()],
})
