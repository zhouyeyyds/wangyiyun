<template>
  <div class="poplist">
    <div class="top">
        <p>当前播放</p>
        <span class="num">({{musiclist.length}})</span>
        <!-- 歌曲数目 -->
    </div>
    <div class="bar">
        <div class="left">
            <span class="iconfont icon-random module" @click="changeplaymodule" v-show="0==$store.state.moduleindex"></span>
            <p v-show="0==$store.state.moduleindex">随机播放</p>
            <!-- 0为随机播放 -->
            <span class="iconfont icon-loop module" @click="changeplaymodule" v-show="1==$store.state.moduleindex"></span>
            <p v-show="1==$store.state.moduleindex">顺序播放</p>
            <!-- 1为顺序播放 -->
            <span class="iconfont icon-singlecycle module" @click="changeplaymodule" v-show="2==$store.state.moduleindex"></span>
            <p v-show="2==$store.state.moduleindex">单曲循环</p>
            <!-- 2为单曲循环 -->
            <!-- 播放模式 -->
        </div>
        <div class="right">
            <span class="icon-bottom iconfont download"></span>
            <span class="icon-shoucang iconfont shoucang" ></span>
            <van-icon name="delete-o" class="delete" @click="deleteallmusic"/>
        </div>
    </div>
    <ul>
        <li class="item" v-for="song,k in musiclist" :key="song.id">
            <div class="left" :class="{red:k==index}" @click="changeindex(k)">
                <span class="iconfont icon-singing voice" v-show="k==index"></span>
                <div class="title" >
                    <p class="songname">{{song.name}}</p>
                    <span>-</span>
                    <span class="author">{{song.ar[0].name}}</span>
                </div>
            </div>
            <span class="remove icon-delete iconfont" @click="deleteAmusic(k)"></span>
        </li>
    </ul>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
import { mapMutations } from "vuex"
export default {
    name:"PopListTop",
    data() {
        return {
            index:localStorage.getItem("songindex"),
            musiclist:JSON.parse(localStorage.getItem("musiclist")),
        }
    },
    methods:{
        changeindex(k){
            this.index=k;
            localStorage.setItem("songindex",k)
            pubsub.publish("change",k)
            
        },
        deleteAmusic(index){
            this.musiclist.splice(index,1);
            localStorage.setItem("musiclist",JSON.stringify(this.musiclist))
            pubsub.publish("change",index)
            this.index=index;
        },
        deleteallmusic(){
            this.musiclist=[]
        },

        ...mapMutations(["changepoplist","changeplaymodule"]),
        // 是否显示播放列表            切换播放模式
    },
   
}
</script>

<style lang="less" scoped>
    .poplist{
        padding: 20px;
        color: #000;
        width: 100vw;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }

    .top{
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-size: 15px;

        .num{
            margin-left: 5px;
            font-size: 12px;
        }
    }
    .bar{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;

            .left{
                display: flex;
                // justify-content: space-between;
                align-items: center;
                width: 100px;

                span::before{
                    font-size: 25px;
                }

                p{
                    margin-left: 10px;
                    font-size: 13px;
                }
            }

            .right{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 110px;

                .download::before{
                    font-size: 30px;
                }
                .shoucang::before{
                    font-size: 25px;
                }
                .delete::before{
                    font-size: 22px;
                }
            }
        }

        .item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;

            .left{
                display: flex;
                // justify-content: space-between;
                width: 300px;
                align-items: center;
            }

            .voice::before{
                font-size: 22px;
            }


            .red{
                color: red;
            }
            .title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 13px;
                margin-left: 10px;
                

                .songname{
                    margin-right: 10px;
                }

                .author{
                    margin-left: 5px;
                    font-size: 12px;
                }
            }
        }


</style>