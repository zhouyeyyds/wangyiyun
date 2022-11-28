<template>
  <div class="top">
    <van-icon name="wap-nav" size="8vw" color="#bbb"/>
    <div class="center">
        <span @click="$router.push('/user')">我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
    <span class="search" @click="$router.push('/search')">
        <van-icon name="search" size="8vw"/>
    </span>
  </div>
</template>

<script>
export default {
    name:"MusicTop",
}
</script>

<style lang="less" scoped>
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px 10px;
        .center{
            flex: 1;
            display: flex;
            justify-content:space-evenly;
            align-items: center;
            font-size: 18px;
            color: #5f5e5e;
            .active{
                font-weight: 700;
            }
        }
        
    }
</style>