<template>
  <div class="bottom">
    <!-- 详情页底部 -->
    <div class="header">
        <!-- 底部的上面 -->
        <span class="iconfont icon-like  dislike" v-show="!red" @click="becomered"></span>
        <span class="iconfont icon-jushoucanggift  like" v-show="red" @click="becomered"></span>
        
        <!-- 喜欢 -->
        <span class="iconfont icon-bottom download"></span>
        <!-- 下载 -->
        <span class="iconfont icon-changge sing"></span>
        <!-- 唱歌 -->
        <span class="iconfont icon-gengduo commend" @click="getcommend"></span>
        <!-- 评论 -->
        <span class="iconfont icon-checkmore more"></span>
        <!-- 更多 -->
    </div>
    <div class="center">
        <!-- 底部的中间 -->
        ------------------------------------
    </div>
    <div class="tail">
        <!-- 底部的下面 -->
        <span class="iconfont icon-random module" @click="changeplaymodule" v-show="0==$store.state.moduleindex"></span>
        <!-- 0为随机播放 -->
        <span class="iconfont icon-loop module" @click="changeplaymodule" v-show="1==$store.state.moduleindex"></span>
        <!-- 1为顺序播放 -->
        <span class="iconfont icon-singlecycle module" @click="changeplaymodule" v-show="2==$store.state.moduleindex"></span>
        <!-- 2为单曲循环 -->
        <!-- 选择播放模式 -->
        <span class="iconfont icon-previous pre" @click="presong"></span>
        <!-- 上一首 -->
        <van-icon name="pause-circle-o" class="play" v-show="isplay" @click="playmusic"/>
        <!-- 播放 -->
        <van-icon name="play-circle-o" class="noplay" @click="playmusic" v-show="!isplay"/>
        <!-- 暂停 -->
        <span class="iconfont icon-nextsong next" @click="nextsong"></span>
        <!-- 下一首 -->
        <span class="iconfont icon-musiclist list" @click="changepoplist"></span>
        <!-- 音乐列表 -->
        
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
import { mapState,mapMutations } from 'vuex';
export default {
    name:"DetailBottom",
    components:{

    },
    data() {
        return {
            red:false,
            index:localStorage.getItem("songindex"),
            musiclist:JSON.parse(localStorage.getItem("musiclist")),
        }
    },
    computed:{
        ...mapState(["isplay"]),
    },
    methods:{
        playmusic(){
            pubsub.publish("play")
            // 播放音乐 并改变播放的状态
        },
        becomered(){
            this.red=!this.red;
        },
        presong(){
            
            if(1==this.$store.state.moduleindex){
                this.index=(this.index+this.musiclist.length-1)%this.musiclist.length;
                 // 索引减1 
            }

            if(0==this.$store.state.moduleindex){
                var num=Math.floor(Math.random()*this.musiclist.length);
                console.log(num);
                this.index=(this.index+this.musiclist.length-num)%this.musiclist.length;
            }

            pubsub.publish("change",this.index)
        },
        nextsong(){
            if(1==this.$store.state.moduleindex){
                this.index=(this.index+1)%this.musiclist.length;
                // 索引加1
            }

            
            
            pubsub.publish("change",this.index)
        },

        ...mapMutations(["changepoplist","changeplaymodule","changeshowcommend"]),
        // 是否显示播放列表            切换播放模式

        getcommend(){
            this.$router.push('/commend');
            this.changeshowcommend();
        }

    
    }
}
</script>

<style lang="less" scoped>
    .bottom{
        position: absolute;
        bottom: 5.333vw;
        z-index: 2;
        width: 100vw;
        height: 34vw;
        padding: 0 2.667vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        opacity: .7;
    }

    .header{
        width: 73vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 30px;

        .dislike::before{
            font-size: 9.333vw;
            position: absolute;
            left: 50px;
            bottom: 90px;
        }
        .like::before{
            font-size: 7.333vw;
            color: red;
            position: absolute;
            left: 54px;
            bottom: 93px;
        }
        .download::before{
            font-size: 9.333vw
        }
        .sing::before{
            font-size: 8vw;
        }
        .commend::before{
            font-size: 8vw;
        }
        .more::before{
            font-size: 10.667vw;
        }
    }

    .tail{
        width: 73vw;
        height: 18.773vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .module::before{
            font-size: 8.533vw;
        }
        .pre::before{
            font-size: 9.333vw;
        }
        .play::before{
            font-size: 12.267vw;
        }

        .noplay::before{
            font-size: 12.267vw;
        }
        .next::before{
            font-size: 9.333vw;
        }
        .list::before{
            font-size: 9.333vw;
        }
    }

</style>