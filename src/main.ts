import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './index.scss'

const enableMocking = async () => {
  if (!import.meta.env.DEV) {
    return
  }

  const { worker } = await import('./mocks/handler')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({ onUnhandledRequest: 'bypass' })
}

enableMocking().then(() => {
  const pinia = createPinia()
  const app = createApp(App)

  app.use(router)
  app.use(pinia)
  app.mount('#app')
})
