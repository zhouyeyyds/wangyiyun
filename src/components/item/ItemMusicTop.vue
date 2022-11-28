<template>
  <div class="main">
    <div class="top" v-show="!isshowdetail">
        <!-- 顶部 -->
        <div class="left">
            <!-- 顶部左边 -->
            <span class="iconfont icon-back" @click="reback"></span>
            <!-- 返回到上一步 -->
            <span class="icon-yinle iconfont">歌单</span>
        </div>
        <div class="right">
            <!-- 顶部右边 -->
            <van-icon name="search" class="search"/>
            <!-- 搜索 -->
            <span class="icon-checkmore iconfont"></span>
            <!-- 选择 -->
        </div>
    </div>
    <div class="contend">
        <img :src="playlist.coverImgUrl" class="bgimg">
        <!-- 背景 -->
        <div class="center">
            <div class="coverimg">
                <img :src="playlist.coverImgUrl">
                <span class="hot iconfont icon-bofang">{{changenumber(playlist.playCount)}}</span>
            </div>

            <div class="title">
                <p>{{playlist.name}}</p>
                <!-- 文案 -->
                <div class="user">
                    <!-- 用户 -->
                    <img :src="userurl" class="userimg" v-if="userurl">
                    <!-- 头像 -->
                    <p class="username" v-if="nickname">{{nickname}}</p>
                    <!-- 名称 -->
                    <span class="guanzhu icon-like iconfont">关注</span>
                    <!-- 点击关注 -->
                </div>
                <div class="paihang">
                    <!-- 热度榜 -->
                    热度榜
                </div>
            </div>
            
        </div>
        <span class="about icon-next iconfont"></span>
        <div class="describe">
            <!-- 描述 -->
            
            <!-- {{playlist.description}} -->
        </div>
        <!-- 底部开始-->
        <div class="bottom">
            <span class="share">
                <van-icon name="share-o" />
                {{playlist.shareCount}}
            </span>
            <!-- 分享 -->
            
            <span class="command">
                <van-icon name="chat-o" />
                {{playlist.commentCount}}
            </span>
            <!-- 评论 -->
            <span class="love icon-favorite iconfont">
                {{changenumber(playlist.subscribedCount)}}
            </span>
            
            <!-- 收藏 -->
        </div>
        <!-- 底部结束 -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:"ItemMusicTop",
    props:["playlist"],
    data() {
        return {
            nickname:"",
            userurl:""
        }
    },
    computed:{
        ...mapState(["isshowdetail"])
    },
    methods:{
        reback(){
            this.$router.go(-1)
            // 注意不要写成route
        },
        changenumber(num){
            if(num>10000){
                return (num/10000).toFixed(0)+"万";
            }

            if(num>100000)
            {
                return (num/10000).toFixed(1)+"万"
            }
        }
    },
    updated(){
        this.nickname=this.playlist.creator.nickname;
        this.userurl=this.playlist.creator.avatarUrl
    }
    
}
</script>

<style lang="less" scoped>
    .main{
        width: 100vw;
    }
    .bgimg{
        width: 100vw;
        height: 67vw;
        opacity: .7;
        filter: blur(2.667vw);
       
    }
    .contend{
        position: relative;
        // padding: 2.667vw;
    }
    .center{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 0;
        top: 16vw;

        .title{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 23.467vw;
            font-size: 3.733vw;
            color: #fff;

            .user{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 48vw;
                height: 8vw;

                .guanzhu{
                    border: 0.267vw solid #bbb;
                    width: 26.667vw;
                    height: 6.133vw;
                    border-radius:5.333vw;
                    opacity: .7;
                    margin-left: 2.667vw;
                    font-size: 3.733vw;

                }

                .icon-like::before{
                    font-size: 5.333vw;
                }

                .username{
                    opacity: .7;
                    width: 40vw;
                    margin-left: 2.667vw;
                    font-size: 3.733vw;
                }
                
            }
        }
    }
    .coverimg{
        position: relative;
        margin: 0 2.667vw;

        .hot{
                position: absolute;
                right: 0.75px;
                top: 3px;
                border: 1.001px solid rgba(109, 109, 109,0.4);
                border-radius: 12px;
                background-color: rgba(109, 109, 109,0.4);
                font-size: 12px;

            }
    }
     .coverimg>img{
        width: 21.333vw;
        height: 21.333vw;
        border-radius: 2.133vw;
       
    }
    .title .user img{
        width: 6.667vw;
        height: 6.667vw;
        border-radius: 50%;
    }
    .top{
        display: flex;
        position: fixed;
        z-index: 1;
        justify-content: space-between;
        align-items: center;
        padding: 2.667vw;
        width: 375px;
        height: 13.333vw;
  
        .left{
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
                font-size: 3.733vw;
                margin-left: 1.867vw;
            }
            .icon-back::before{
                font-size: 6.667vw;
            }
            .icon-yinle::before{
                font-size: 5.333vw;
                position: relative;
                right: -14.667vw;
                top: 0.267vw;
            }
        }
        .right{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon-checkmore::before{
                font-size: 14.667vw;
            }

            .search{
                font-size: 6.667vw;
                margin-right: 2.667vw;
            }
        }
        
    }

    .about{
        position: absolute;
        top: 22.667vw;
        right: 5.333vw;
        border: #bbb 0.267vw solid;
        width: 5.333vw;
        height: 5.333vw;
        opacity: .8;
        border-radius: 50%;
        transform: rotate(90deg);
        z-index: 1;
    }

    .icon-next::before{
        position: relative;
        left: 0.267vw;
        top: 0.267vw;
    }
    .describe{
        position: absolute;
        left: 3.2vw;
        bottom: 25.333vw;
    }

    .bottom{
        position: absolute;
        bottom: 2.667vw;
        left: 0.533vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 375px;
        padding: 5.333vw;

        .share{
            border: 0.267vw solid #bbb;
            width: 21.333vw;
            height: 9.333vw;
            border-radius: 9.333vw;
            text-align: center;
            line-height: 9.333vw;
            color: #fff;
            opacity: .7;
            font-size: 3.467vw;
        }

        .van-icon-share-o::before{
            font-size: 5.867vw;
        }
        .command{
            border: 0.267vw solid #bbb;
            width: 21.333vw;
            height: 9.333vw;
            border-radius: 9.333vw;
            text-align: center;
            line-height: 9.867vw;
            color: #fff;
            opacity: .7;
            font-size: 3.467vw;
        
        }

        .van-icon-chat-o::before{
            font-size: 5.867vw;
        }
        .love{
            border: 0.267vw solid #bbb;
            width: 21.333vw;
            height: 9.333vw;
            border-radius: 9.333vw;
            text-align: center;
            line-height: 7.667vw;
            color: #fff;
            opacity: .7;
            font-size: 3.467vw;
        
        }

        .love::before{
            font-size: 25px;
        }

        .icon-musiclist::before{
            font-size: 8vw;
            position: relative;
            top: 1.333vw;
            // bottom: 0.267vw;
        }


    }
</style>