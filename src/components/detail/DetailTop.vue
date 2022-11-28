<template>
  <div>
    <div class="top">
        <span class="reback icon-back iconfont" @click="changedetailflag"></span>
        <div class="title">
            <span class="songname">{{musiclist.name}}</span>
            <span class="author">{{musiclist.ar[0].name}}</span>
        </div>
        <div class="right">
            <span class="live icon-watchseries iconfont"></span>
            <span class="share icon-fenxiang iconfont"></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"DetailTop",
    props:["musiclist"],
    methods:{
        changedetailflag(){
            this.$store.commit("changeshowdetail")
        }
    }

}
</script>

<style lang="less" scoped>
    .top{
        width: 100vw;
        height: 15vw;
        padding: 4vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .reback::before{
        font-size: 8vw;
        color: #fff;
        
    }

    .reback{
        transform: rotate(-90deg);
    }

    .title{
        display: flex;
        flex-direction: column;
        padding: 2.133vw 0;
        align-items: center;
        width: 50vw;
        height: 15vw;
        margin-left: 11.2vw;


        .songname{
            color: #fff;
            font-size: 4vw;
            opacity: .85;
        }

        .author{
            margin-top: 1.333vw;
            font-size: 3.467vw;
            opacity: .8;
        }
    }

    .right{
        width: 20vw;
        height: 15vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .live::before{
            font-size: 9.333vw;
            opacity: .7;

        }

        .share::before{
            font-size: 6.667vw;
            opacity: .9;
        }
    }
</style>