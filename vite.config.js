import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/portofolio-raihan/",
  plugins: [react(), tailwindcss()],
  // Catatan: Lanyard di-import via React.lazy sehingga three.js/rapier otomatis
  // masuk chunk async terpisah (di-load on-demand, bukan di-preload saat awal).
})
