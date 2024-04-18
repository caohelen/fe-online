import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import WujieVue from "wujie-vue3";

import router from './router'
import { setToken } from './utils/token'

import './style.css'
import App from './App.vue'

const { setupApp, preloadApp, bus } = WujieVue;

const app = createApp(App)
app.use(ElementPlus)
app.use(router())
app.use(WujieVue)

setupApp({ 
	name: "react-app", 
	url: "//localhost:3002/", 
	exec: true, 
	sync: true 
})

preloadApp({ name: "react-app" })

bus.$on("sendToken", (msg) => {
	console.log('获取到来自子应用的信息', msg);
	setToken(msg.data.token)
});


app.mount('#app')
