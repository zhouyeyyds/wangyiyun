import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusicItem from "@/views/MusicItem"
import MusicCommend from "@/views/MusicCommend"
import MusicSearch from "@/views/MusicSearch"
import User from "@/views/User.vue"
import Login from "@/views/Login.vue"
import store from '@/store'

const routes = [
  
  {
    path: '/',
    name: 'home',
    components:{
      default:HomeView,
    }
  },
  {
      path:'/musicitem',
      name:"musicitem",
      component:MusicItem
  },
  {
    path:"/commend",
    name:"commend",
    component:MusicCommend
  },
  {
    path:"/search",
    name:"search",
    component:MusicSearch
  },
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path:"/user",
    name:"user",
    component:User,
    // beforeEnter: (to, from, next) => {
    //   // 前置路由守卫 先判断是否登录
    //   if(!store.state.islogin)
    //   {
    //     next('/login')
    //   }
    //   else
    //   next()
    // }
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
