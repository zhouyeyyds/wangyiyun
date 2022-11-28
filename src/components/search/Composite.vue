<template>
  <div class="composite">
    <div class="singlesong">
        <div class="top">
            <p>单曲</p>
            <span class="right">
                <span class="icon-bofang iconfont play"></span>
                <p>播放全部</p>
            </span>
        </div>
        <ul>
            <li v-for="item,index in list.songs" :key="item.id" @click="changeindex(index)">
                <div class="left">
                    <p class="songname">{{item.name}}</p>
                    <div class="detail">
                        <span class="yuanchang">原唱</span>
                        <span class="author">{{item.ar.name}}</span>
                        <span>-</span>
                        <span class="alblum">{{item.al.name}}</span>
                    </div>
                    <p class="origin">原唱 : 队长</p>
                </div>
                <div class="right">
                    <span class="icon-movie iconfont mv" v-show="item.mv"></span>
                    <span class="icon-checkmore iconfont more"></span>
                </div>
            </li>
        </ul>
        <div class="bottom">
            <p>查看全部{{list.songCount}}首单曲</p>
            <span class="icon-next iconfont all"></span>
        </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    props:["list"],
    // vue3的写法
    setup(props) {
        // 方法
        function changeindex(index){
            localStorage.setItem("songindex",index);
            localStorage.setItem("musiclist",JSON.stringify(props.list.songs))
            pubsub.publish("change",index)
            pubsub.publish("updatelyric",index)
        }

        // 返回一个对象出去
        return{
            changeindex,
        }
    }

    // vue2的写法
    // methods:{
    //     changeindex(index){
    //         localStorage.setItem("songindex",index);
    //         localStorage.setItem("musiclist",JSON.stringify(this.list.songs))
    //         pubsub.publish("change",index)
    //         pubsub.publish("updatelyric",index)
    //     }
    // },

}
</script>

<style lang="less" scoped>
    .composite{
        margin-top: 25vw;
        background-color: #fff;
        border-radius: 2.667vw;
        font-size: 3.467vw;
        padding-bottom: 16vw;
    }

    .singlesong{
        padding:  1.867vw 4vw;
    }

    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.267vw solid #e0e0e0;
        height: 10vw;


        .right{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 3.2vw;
            border: 0.267vw solid red;
            border-radius: 2.667vw;
            padding: 0 1.067vw;
            color: red;
        }

        .play::before{
            font-size: 3.733vw;
        }
    }

    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 18vw;
        border-bottom: #e0e0e0 0.267vw solid;
        padding: 1.333vw;

        .left{
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            .detail{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 3.2vw;

                span{
                    margin-right: 1.333vw;
                }

                .author{
                    color: #9f9f9f;
                }

                .yuanchang{
                    color: #fff;
                    background-color: red;
                    border-radius: 4vw;
                    font-size: 3.2vw;
                    padding: 0 0.533vw;
                    width: 9.067vw;
                    text-align: center;
                }
            }

            .origin{
                font-size: 3.2vw;
                color: #9f9f9f;
            }
        }

        .right{
            display: flex;
            align-items: center;
        }
    }

    li:last-child{
        margin-bottom: 2.667vw;
    }
    
    .bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 7vw;
    }

    .mv::before{
        font-size: 6.667vw;
    }

    .more::before{
        font-size: 8vw;
    }

</style>