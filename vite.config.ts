import { UserConfig } from 'vite'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')

const config: UserConfig = {
  resolve: {
    alias: {
      '/@': srcPath
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5173',
  //       rewrite: path =>
  //         path.startsWith('/api/v1') ? path.slice('/api/v1'.length) : path,
  //       changeOrigin: true
  //     }
  //   }
  // },
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
