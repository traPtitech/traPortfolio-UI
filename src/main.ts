import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import './index.scss'

import { setupWorker } from 'msw/browser'

if (import.meta.env.DEV) {
  const { handlers } = await import('./mocks/handler')
  const server = await setupWorker(...handlers)
  server.start()
}

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
