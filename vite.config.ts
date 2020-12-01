import { UserConfig } from 'vite'
import path from 'path'
import PurgeIcons from 'vite-plugin-purge-icons'

const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')

const config: UserConfig = {
  alias: {
    '/@/': srcPath
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4010',
      rewrite: path =>
        path.startsWith('/api/v1') ? path.slice('/api/v1'.length) : path,
      changeOrigin: true
    }
  },
  cssPreprocessOptions: {
    scss: {
      additionalData: `@import "${srcPath}/styles/common.scss";`
    }
  },
  plugins: [PurgeIcons()]
}

export default config
