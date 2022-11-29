<template>
  <div class="home">
    <MusicTop></MusicTop>
    <MusicSwipe></MusicSwipe>
    <IconList/>
    <MusicList></MusicList>
  </div>
</template>

<script>
// @是/src的别名
import MusicTop from '@/components/findindex/MusicTop.vue';
import MusicSwipe from "@/components/findindex/MusicSwipe.vue"
import IconListVue from '@/components/findindex/IconList.vue';
import MusicList from "@/components/findindex/MusicList.vue"
import { onMounted } from 'vue';
// 引入onMounted
export default {
  name: 'HomeView',
  components: {
    MusicTop,MusicSwipe,IconListVue,MusicList
  },
  // vue3写法
  setup() {
    // 方法
    function login(){
      localStorage.setItem("islogin",false)
    }

    onMounted(()=>{
      //在setup里面写生命周期的时候 要写成箭头函数的形式
      login()
      // 在挂载的时候调用
    })

    return{
      
    }
  }

  // vue2写法
  // methods:{
  //   login(){
  //     localStorage.setItem("islogin",false)
  //   }
  // },
  // mounted(){
  //   this.login()
  //   // 默认当主页挂载的时候登录状态为false
  // },


}
</script>

