import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import store from './store'

import { Button,Icon,Swipe, SwipeItem ,Popup,Loading,ShareSheet ,Search   } from 'vant';
//  引入组件样式
import 'vant/lib/index.css';

import "@/assets/font/iconfont.css"
import "@/assets/font/iconfont.js"
import "@/assets/css/base.css"
const app=createApp(App)

app.use(store)
app.use(router)

app.use(Icon)
app.use(Button)
app.use(Swipe)
app.use(SwipeItem)
app.use(Popup),
app.use(Loading )
app.use(ShareSheet)
app.use(Search )

app.mount('#app')
