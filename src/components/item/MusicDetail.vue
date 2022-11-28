<template>
  <div class="playpage">
    <!-- 播放的详情页 -->
    <img :src="musiclist.al.picUrl" class="bgimg">
    <!-- 背景 -->
    <DetailTop :musiclist="musiclist"></DetailTop>
    <!-- 顶部 -->
    <DetailCenter :musiclist="musiclist"></DetailCenter>
    <!-- 中间部分 -->
    <DetailBottom :musiclist="musiclist"></DetailBottom>
    <!-- 底部 -->
  </div>
</template>

<script>
import DetailTop from "../detail/DetailTop.vue"
import DetailCenter from "../detail/DetailCenter.vue"
import DetailBottom from "../detail/DetailBottom.vue"
export default {
    name:"MusicDetail",
    props:["musiclist"],
    components:{
        DetailTop,DetailCenter,DetailBottom
    },
  
}
</script>

<style lang="less" scoped>

    .bgimg{
        position: absolute;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        filter: blur(40px);

    }
    
</style>