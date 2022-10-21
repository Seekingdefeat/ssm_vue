import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入css
import '@/assets/css/global.css'
// 引入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
