import { defineConfig } from 'vite'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')

export default defineConfig(() => ({
  resolve: {
    alias: {
      '/@': srcPath
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${srcPath}/styles/common" as *;`
      }
    }
  },
  plugins: [VuePlugin()]
}))
