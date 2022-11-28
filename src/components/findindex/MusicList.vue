<template>
  <div class="musiclist">
    <div class="top">
        <span>推荐歌单</span>
        <span class="more">更多 <i class="iconfont icon-next"></i> </span>
    </div>
    <div class="musiccontent">
        <!-- 自定义大小的滑动轮播 -->
        <van-swipe :loop="false" :width="110" class="music" :show-indicators=false>
            <van-swipe-item v-for="item in musiclist" :key="item.id">
                <router-link  :to="{
                    // 点击可以进行跳转 并传递相应的id
                    name:'musicitem',
                    query:{
                        id:item.id,
                    }
                }">
                
                    <img :src="item.picUrl">
                    <!-- 图片 -->
                    <span class="title">{{item.name}}</span>
                    <!-- 文案 -->
                    <span class="hot iconfont icon-bofang">{{changenumber(item.playCount)}}</span>
                    <!-- 播放量 -->
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
import { getmusic } from '@/request/api/home';
export default {
    name:"MusicList",
    data() {
        return {
            musiclist:[]
        }
    },
    methods:{
       async getmusiclist(){
            let res=await getmusic();   
            this.musiclist=res.data.result
        },
        changenumber(n){
            if(n>10000)
            {
                return (n/10000).toFixed(0)+"万"
            }

            if(n>100000000)
            {
                return (n/100000000).toFixed(0)+"亿"
            }
        },

    },
    mounted(){
        this.getmusiclist();
    }
}
</script>

<style lang="less" scoped>
    a{
        color: black;
    }
    .musiclist{
        width: 100vw;
        height: 26.667vw;
        margin-top: 5.333vw;
        padding: 2.667vw;
        border-top: 0.133vw solid rgb(231, 229, 229);

        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 3.733vw;
            .more{
                width: 16vw;
                height: 5.333vw;
                border-radius: 5.333vw;
                padding-left: 1.333vw;
                border: 1px solid #b1b1b1;
                text-align: center;
                font-size: 3.467vw;
                color: #6d6d6d;
            }
        }

        .music{
            position: relative;
            width: 95vw;
            height: 50vw;
            margin-top: 5.333vw;
            font-size: 3.2vw;
  
            img{
                width: 26.667vw;
                height: 26.667vw;
                border-radius: 2.667vw;
                margin: 4vw;
            }

            .hot{
                position: absolute;
                right: -0.8vw;
                top: 4.8vw;
                border: 0.267vw solid rgba(109, 109, 109,0.4);
                border-radius: 3.2vw;
                background-color: rgba(109, 109, 109,0.4);
                font-size: 3.2vw;

            }

        }
    }
</style>