<template>
  <div class="banner">
    <van-swipe :autoplay="3000" lazy-render class="swipe">
        <van-swipe-item v-for="image in images" :key="image">
            <img :src="image.pic" />
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name:"MusicSwipe",
    data() {
        return {
            images:[]
        }
    },
    mounted(){
        axios.get("http://localhost:3000/banner?type=2").then((res)=>{
            // console.log(res);
            this.images=res.data.banners
        })
        
    }
}
</script>

<style lang="less" scoped>
    .banner{
        padding: 4vw;
        width: 100vw;
        height: 40vw;
        margin-bottom: 4vw;
        img{
            width: 100%;
            height: 100%;
            border-radius: 1.5vw;
        }
    }
</style>