<template>
  <div>
    <router-view ></router-view>
    <FooterMusic></FooterMusic>
    <van-popup v-model:show="$store.state.ispoplist" round position="bottom"  :style="{ height: '62%' }">
        <PopListTop></PopListTop>
    </van-popup>
  </div>
</template>
<script>
import FooterMusic from "@/components/findindex/FooterMusic.vue"
import PopListTop from "@/components/poplist/PopListTop.vue"
import "animate.css"
export default{
  components:{
    FooterMusic, PopListTop,
  }
}
</script>
<style lang="less">
  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
