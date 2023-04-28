import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import './assets/common.scss'
import './assets/main.css'
import 'virtual:svg-icons-register'

//锁定title
document.title = "即刻收藏 - 导航即刻抵达，编辑无限";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus);

app.mount('#app')
