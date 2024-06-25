import { defineConfig } from '@farmfe/core'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'
import PurgeIcons from 'vite-plugin-purge-icons'
import farmJsPluginSass from '@farmfe/js-plugin-sass'

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '/@/': path.join(process.cwd(), 'src')
      }
    },
    script: { plugins: [], target: 'es2018' }
  },
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
  plugins: [
    [
      farmJsPluginSass({
        additionalData: "@import '/@/styles/common.scss';"
      })
    ]
  ],
  vitePlugins: [VuePlugin(), PurgeIcons()]
})
