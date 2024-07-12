import { createApp } from 'vue'
import './style.css'
import { createPinia } from "pinia";
import App from './App.vue'
import 'virtual:svg-icons-register';

createApp(App).use(createPinia()).mount('#app')
