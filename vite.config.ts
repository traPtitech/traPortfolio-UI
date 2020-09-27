import { UserConfig } from 'vite'
import path from 'path'

const config: UserConfig = {
  alias: {
    '/@/': path.resolve(__dirname, 'src')
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4010',
      changeOrigin: true
    }
  }
}

export default config
