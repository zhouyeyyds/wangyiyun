<template>
  <div class="searchindex">
    <div class="top">
        <div class="header">
            <span class="icon-back iconfont back" @click="back"></span>
            <!--左边返回按钮 -->
            <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            input-align="center"
            class="searchbox"
            @search="find"
            />
            <!-- 搜索框 -->
            <p @click="find">搜索</p>
            <!-- 右边搜索文字 -->
        </div>
        <div class="nav" v-show="!issearch">
            <span>
                <van-icon name="manager" class="singer"/>
                <p>歌手</p>
            </span>
            <span>
                <van-icon name="music" class="musicstyle"/>
                <p>曲风</p>
            </span><span>
                <van-icon name="send-gift" class="special" />
                <p>专区</p>
            </span><span>
                <i class="icon-yuyin1 iconfont identity"></i>
                <p>识曲</p>
            </span>
        </div>
        <div class="bar" v-show="issearch">
            <span class="current">综合</span>
            <span>单曲</span>
            <span>歌单</span>
            <span>视频</span>
            <span>歌词</span>
            <span>歌手</span>
        </div>
    </div>
    <div class="searchabout" v-show="!issearch">
        <div class="history" v-show="!isempty">
            <!-- 搜索历史 -->
            <div class="title">
                <p>历史</p>
                <van-icon name="delete-o" class="delete" @click="deletehistorylist"/>
                <!-- 删除 -->
                <van-popup v-model:show="isshow" round>
                    <div class="pop">
                        <p>确定清空全部历史记录 ?</p>
                        <span class="choice">
                            <span @click="cancle">取消</span>
                            <span @click="clearall">清空</span>
                        </span>
                    </div>
                </van-popup>
            </div>
            <div class="content">
                <span v-for="item,index in historylist" :key="index" @click="search(item)">
                {{item}}
                </span>
            </div>
        </div>
        <div class="recommand">
            <!-- 推荐歌曲 -->
            <div class="title">
                <p>推荐</p>
                <van-icon name="replay" class="refresh"/>
                <!-- 刷新 -->
            </div>
            <div class="content">
                <span>哪里都是你哪里都是你</span>
            </div>
        </div>
    </div>
    <Composite :list="list" v-show="issearch"></Composite>
  </div>
</template>

<script>
import {findmusicapi}  from "@/request/api/search"
import Composite from "@/components/search/Composite.vue"
import { reactive, toRefs } from 'vue';
export default {
    components:{
        Composite
    },
    // setup写法
    setup(){
        //数据
        let data=reactive({
            value:"",
            historylist:JSON.parse(localStorage.getItem("historylist")),
            isempty:true,
            isshow:false,
            list:[],
            issearch:false,
        })

        //方法
        function find(){
            if(data.value!='')
            // 判读输入的字符串是否为空 如果空 就什么都不执行
            {
                data.isempty=false;
                data.historylist.unshift(data.value)
                // 数组去重
                data.historylist=[...new Set(data.historylist)]
                localStorage.setItem("historylist",JSON.stringify(data.historylist));
                searchmusic();
                data.issearch=true;
            }
        }

        function deletehistorylist(){
            data.isshow=true
            // 点击删除的时候 弹出提示框
        }
        function cancle(){
            data.isshow=false;
            // 点击取消 提示框消失
        }
        function clearall(){
            data.isshow=false;
            // 点击确认 提示框消失 
            data.historylist=[];
            localStorage.setItem("historylist",JSON.stringify(data.historylist));
            // 搜索历史列表为空
            data.isempty=true;
        }
        function searchmusic(){
            findmusicapi(data.value).then((res)=>{
                data.list=res.data.result
            })
        }
        function back(){
            if(!data.issearch){
                // 如果不是在搜索中 就回退到上一个页面
                $router.go(-1)
            }
            data.issearch=false
        }
        
        function search(value){
            data.value=value;
            searchmusic()
            data.issearch=true;
        }

        return{
        ...toRefs(data),
        find,deletehistorylist,cancle,clearall,back,search
    }
        
    },

}
</script>

<style lang="less" scoped>
    .searchindex{
        padding: 0 2.667vw ;
        font-size: 3.733vw;
        background-color: rgba(228, 228, 228,.3);
    }
    .top{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100vw;
        padding: 0 2.667vw ;
        z-index: 2;
        background-color: #fff;
       
    }

     .header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .back::before{
            font-size: 8vw;
        }

        .searchbox{
            flex: 1;
        }
    }

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2.667vw;
        margin-top: 1.867vw;
        margin-bottom: 2.667vw;

        span{
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 14.667vw;
            .singer::before{
                font-size: 5.333vw;
                color: red;
            }
            .musicstyle::before{
                font-size: 5.333vw;
                color: red;
            }
            .special::before{
                font-size: 5.333vw;
                color: red;
            }.identity::before{
                font-size: 5.333vw;
                color: red;
            }
        }
    }

    .history,
    .recommand{
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 550;
            margin-bottom: 1.333vw;
        }

        .delete::before{
            font-size: 4.8vw;
            opacity: .6;
        }
        .refresh::before{
            font-size: 4.8vw;
            opacity: .6;
        }

        .content{
            span{
                display: inline-block;
                background-color: #fff;
                height: 6.667vw;
                text-align: center;
                line-height: 6.667vw;
                border-radius: 3.2vw;
                padding: 0 4vw;
                font-size: 3.467vw;
                opacity: .7;
                margin:  1.333vw   ;
            }
        }
    }

    .searchabout{
        margin-top: 25vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1.333vw 2.667vw;
        
    }

    .pop{
        width: 80vw;
        height: 20vw;
        padding: 2.667vw;
        font-size: 3.2vw;
        font-weight: 400;
        color: rgb(168, 166, 166);
        p{
            margin-bottom: 5.333vw;
        }

        .choice{
            margin-left: 49.333vw;
            color: red;

            span:first-child{
                margin-right: 8vw;
            }
        }
    }

    .bar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 3.2vw;
        padding: 2.667vw;
    }
    .current{
        border-bottom: 0.267vw solid #ff6700;
    }

</style>