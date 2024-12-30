import { UserConfig } from 'vite'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')

const config: UserConfig = {
  build: {
    target: ['esnext', 'edge89', 'firefox89', 'chrome89', 'safari15']
  },
  resolve: {
    alias: {
      '/@': srcPath
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "${srcPath}/styles/common" as *;`
      }
    }
  },
  plugins: [VuePlugin()]
}

export default config
