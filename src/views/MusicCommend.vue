<template>
  <div class="commend">
    <div class="topbar">
        <div class="left">
            <span @click="goback" class="icon-back iconfont back"></span>
            <div class="title">
                <p>评论({{commend.total}})</p>
            </div>
        </div>
        <span class="icon-fenxiang iconfont share" @click="showShare=!showShare"></span>
        <van-share-sheet
        v-model:show="showShare"
        title="立即分享给好友"
        :options="options"
        />
    </div>
    <van-loading size="24px" v-show="isloading">加载中...</van-loading>
    <div v-show="!isloading">
        <div class="message">
            <img :src="musiclist[index].al.picUrl">
            <span class="songname">{{musiclist[index].name}}</span>
            <span>-</span>
            <span class="author">{{musiclist[index].ar[0].name}}</span>
            <span class="guanzhu">关注</span>
        </div>
        <div class="contend">
            <div class="bar">
                <p>评论区</p>
                <div class="right">
                    <span>推荐</span>
                    <span>最热</span>
                    <span>最新</span>
                </div>
            </div>
            <ul>
                <li class="list" v-for="item in commend.comments" :key="item.commentId">
                    <img :src="item.user.avatarUrl">
                    <div class="detail">
                        <div class="top">
                            <div class="left">
                                <p class="name">{{item.user.nickname}}</p>
                                <span class="time">{{item.timeStr}}</span>
                            </div>
                            <div class="right">
                                <span class="acount">{{item.likedCount}}</span>
                                <span class="good icon-good iconfont"></span>
                            </div>
                        </div>
                        <div class="center">
                            {{item.content}}
                        </div>
                        <div class="bottom">
                            <p>{{item.beReplied.length}}条回复</p>
                            <span class="icon-next next iconfont "></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';
export default {
    name:"MusicCommend",
    data() {
        return {
            index:localStorage.getItem("songindex"),
            musiclist:JSON.parse(localStorage.getItem("musiclist")),
            commend:[],
            isloading:false,
            showShare:false,
            options : [
                        [
                            { name: '微信', icon: 'wechat' },
                            { name: '朋友圈', icon: 'wechat-moments' },
                            { name: '微博', icon: 'weibo' },
                            { name: 'QQ', icon: 'qq' },
                        ],
                        [
                            { name: '复制链接', icon: 'link' },
                            { name: '分享海报', icon: 'poster' },
                            { name: '二维码', icon: 'qrcode' },
                            { name: '小程序码', icon: 'weapp-qrcode' },
                        ],
            ],
        }
    },
    methods:{
        ...mapMutations(["changeshowcommend","changeshowdetail"]),
        goback(){
            this.$router.go(-1);
            // this.changeshowdetail();
            this.changeshowcommend();
        },
        requirecommend(){
            this.isloading=true;
            // 请求之前 显示加载中
            axios.get(` http://localhost:3000/comment/music?id=${this.musiclist[this.index].id}`).then((res)=>{
                // console.log(res.data);
                this.commend=res.data;
                this.isloading=false;
            // 请求结束 
            })

        }
    },
    mounted(){
        this.requirecommend();
        // 挂载的时候执行
    }
    
  
}
</script>

<style lang="less" scoped>

    .commend{
        z-index: 999;
    }
    .topbar{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 16vw;
        padding: 4vw;
        background-color: #fff;
        z-index: 99;

        .left{
            display: flex;
            align-items: center;

            .title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 3.733vw;
                margin-left: 4vw;
            }

            .back::before{
                font-size: 8vw;
            }
        }

        .share::before{
            font-size: 6.933vw;
        }
    }

    .message{
        display: flex;
        justify-content:left;
        align-items: center;
        padding: 17vw 4vw 5.333vw 4vw;

        img{
            width: 10.667vw;
            height: 10.667vw;
            border-radius: 50%;
            background-color: pink;
            margin-right: 2.667vw;
        }

        span{
            margin: 0 1.333vw;
            font-size: 3.467vw;
        };

        .guanzhu{
            color: red;
            font-size: 3.2vw;
        }

    }

    .bar{
        padding: 0 4vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        font-size: 3.2vw;
        font-weight: 550;

        .right{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 32vw;
        }
    }

    .list{
        padding: 4vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        img{
            width: 9.333vw;
            height: 9.333vw;
            border-radius: 50%;
            position: relative;
            bottom: 6.667vw;
            z-index: -1;
        }

        .detail{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 3.467vw;

            .top{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 79vw;
                margin-bottom: 4vw;

                .name{
                    font-weight: 550;
                }

                .time{
                    font-size: 3.2vw;
                    opacity: .8;
                }

                .acount{
                    opacity: .8;
                }
                .good{
                    margin-left: 1.333vw;
                    opacity: .8;
                }

                .good::before{
                    font-size: 4.8vw;
                }
            }
        }


        .bottom{
            display: flex;
            align-items: center;
            font-size: 3.2vw;
            margin-top: 1.333vw;
            opacity: .8;
            color: rgb(27, 169, 225);

            .next{
                margin-left: 1.333vw;
            }
        }
    }

    .center{
        margin-left: 2.667vw;
    }

    ul{
        overflow: scroll;
        padding-bottom: 13vw;
    }

    .van-loading{
        color: #1989fa;
        position: absolute;
        top: 23%;
        left: 40%;
    }

    .van-share-sheet{
        position: absolute;
        bottom: 0;
        z-index: 99999;
    }
</style>