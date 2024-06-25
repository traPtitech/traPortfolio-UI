import { defineConfig } from '@farmfe/core'
import VuePlugin from '@vitejs/plugin-vue'
import PurgeIcons from 'vite-plugin-purge-icons'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4010',
        rewrite: path =>
          path.startsWith('/api/v1') ? path.slice('/api/v1'.length) : path,
        changeOrigin: true
      }
    }
  },
  vitePlugins: [VuePlugin(), PurgeIcons()]
})
