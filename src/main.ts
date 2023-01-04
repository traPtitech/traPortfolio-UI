import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import store from './store'
import App from './App.vue'

import './index.scss'
import '@purge-icons/generated'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(store)
app.use(pinia)
app.mount('#app')
