import './assets/css/main.css'

import { createApp } from 'vue'
import { setupStore } from './stores'
import { setupRouter } from './router'

import App from './App.vue'

const app = createApp(App)

setupStore(app)
setupRouter(app)

app.mount('#app')
