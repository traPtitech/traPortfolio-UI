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
