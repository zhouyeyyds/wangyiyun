<template>
    <!-- 渲染音乐列表 -->
  <div class="list">
    <div class="top">
        <div class="left">
            <span class="icon-bofang iconfont play"></span>
            <!-- 点击播放 -->
            <span class="playall">播放全部</span>
            <span class="acount">({{musiclist.length}})</span>
            <!-- 歌单数目 -->
        </div>
        <div class="right">
            <van-icon name="upgrade" />
            <!-- 下载 -->
            <span class="icon-check iconfont all"></span>
            <!-- 多选 -->
        </div>
    </div>
    <div class="item">
        <ul>
            <li v-for="k,index in musiclist" :key="k.id">
                <span>{{index+1}}</span>
                <div class="song" @click="changeindex(index)">
                    <p>{{k.name}}</p>
                    <!-- 歌名 -->
                    <div class="detail">
                        <span class="icon-like iconfont like"></span>
                        <!-- 喜欢 -->
                        <span class="author">{{k.ar[0].name}}</span>
                        <!-- 作者 -->
                        <span>|</span>
                        <span class="yuanchang">原唱</span>
                        <!-- 原唱 -->
                    </div>
                </div>
                <span class="right">
                    <van-icon name="video-o" class="video" v-if="k.mv"/>
                    <!-- 播放mv -->
                    <span class="icon-checkmore iconfont checkmore"></span>
                    <!-- 查看更多 -->
                </span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from "pubsub-js"
export default {
    name:"ItemMusicList",
    
    data() {
        return {
            musiclist:[],
        }
    },

    props:["id"],

    methods:{
        getitemlist(){
            // 请求获取歌单列表
            axios.get(`http://localhost:3000/playlist/track/all?id=${this.id}&limit=60`).then((res)=>{
                this.musiclist=res.data.songs;
                localStorage.setItem("musiclist",JSON.stringify(this.musiclist))
                // 将数据放入会话存储中  可以避免深层次的访问时 访问不到的问题 
                // console.log(this.musiclist);
            })
        },
        changeindex(value){
            // 点击就改变vuex中的index
            localStorage.setItem("songindex",value)

            // 重新获取列表 重新更新
            this.getitemlist();

            pubsub.publish("change",value)
            pubsub.publish("updatelyric",value)
        }
    },

    mounted(){
        this.getitemlist();
    },

    
    
}
</script>

<style lang="less" scoped>
    .list{
        width: 100vw;
        margin-bottom: 13vw;
    }
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        width: 100vw;
        height: 14vw;
        // background-color: skyblue;
        border-top: 1px solid #bbb;
        box-shadow: 0 3px 3px #bbb;
        border-radius: 10px;
        
    }

    .top .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40vw;

        .play::before{
            font-size: 23px;
        }

        .playall{
            font-size: 15px;
            font-weight: 550;
        }

        .acount{
            font-size: 12px;
            
        }
    }
    .top .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 15vw;
        opacity: .8;

        .van-icon-upgrade::before{
            font-size: 23px;
            transform: rotate(180deg);
        }

        .all::before{
            font-size: 30px;
            position: relative;
            top: 1px;
        }
    }

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 14vw;
        // background-color: pink;
        padding: 0 10px;

        .song{
            flex: 1;
            margin-left: 30px;

            p{
                font-size: 14px;
            }
            .detail{
                font-size: 12px;
                opacity: .8;
                height: 20px;
                line-height: 20px;
                .like{
                    color: red;
                    margin-right: 5px;
                    
                }

                .author{
                    margin-right: 10px;
                }

                .yuanchang{
                    margin-left: 10px;
                }
            }
        }

        .right{
            position: relative;
            width: 15vw;
            display: flex;
            // justify-content: space-between;
            align-items: center;

            .video::before{
                font-size: 23px;
                position: absolute;
                right: -21px;
                top: -10px;
            }

            .checkmore{
                transform: rotate(90deg);
            }
            .checkmore::before{
                font-size: 40px;
                position: absolute;
                right: -20px;
                top: -60px;
            }

        }
    }
</style>