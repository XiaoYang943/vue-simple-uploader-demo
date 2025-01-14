import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import uploader from './plugins/simpleUploader/index.js'
const app = createApp(App)
app.use(uploader)
app.mount('#app')
