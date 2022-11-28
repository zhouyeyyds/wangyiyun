<template>
  <div>
    <div v-show="!isshowlyric" @click="changeshowlyric">
            <!-- 磁针 -->
        <img src="@/assets/needle-ab.png" class="needle" :class="{needleactive:isplay}">
        <div class="circle">
            <img :src="musiclist.al.picUrl" class="pic" :class="{picactive:isplay}">
        </div>
    </div>
    <SongLyric v-show="isshowlyric" :musiclist="musiclist"></SongLyric>
  </div>
</template>

<script>
import { mapState,mapMutations} from 'vuex';
import SongLyric from './SongLyric.vue';
export default {
    name:"DetailCenter",
    props:["musiclist"],
    data() {
        return {
           
        }
    },
    components:{
        SongLyric
    },
    computed:{
        ...mapState(["isplay","isshowlyric"])
    },
    methods:{
      ...mapMutations(["changeshowlyric"])
    }
}
</script>

<style lang="less" scoped>
    .needle{
        width: 20.8vw;
        transform: rotate(-30deg);
        position: absolute;
        left: 46%;
        top: 12.8vw;
        z-index: 2;
        transform-origin: 5.333vw 0vw;
    }

    .needleactive{
        
        // 可以设置选择的支点
        animation: down 2s  linear forwards;
    }

    .pic{
        width: 42.667vw;
        border-radius: 50%;
        position: absolute;
        left: 18%;
        top: 10%;
        
    }

    .picactive{
        animation: rotation 8s infinite linear;
    }

    .circle{
        position: relative;
        background: url("@/assets/cd.png") no-repeat;
        background-size: contain;
        width: 65vw;
        height: 106.667vw;
        left: 50%;
        top: 50%;
        transform: translate(-46%,18%);
    }

    @keyframes rotation {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);  
        }
    }

    @keyframes down {
        from{
            transform: rotate(-30deg);
        }
        to{
            transform: rotate(0);
        }
    }
</style>