<template>
  <div class="bottom">
    <div class="left" @click="changeshowdetail">
      <img :src="musiclist[index].al.picUrl" class="musicimg">
      <!-- 歌曲图片 -->
      <span class="songname">{{musiclist[index].name}}</span>
      <!-- 歌名 -->
      <span>-</span>
      <span class="author">{{musiclist[index].ar[0].name}}</span>
      <!-- 作者 -->
    </div>
    <div class="right">
      <span class="icon-play-circle iconfont play" @click="playmusic" v-show="!isplay"></span>
      <!-- 暂停时显示 -->
      <span class="icon-timeout iconfont play" @click="playmusic" v-show="isplay"></span>
      <!-- 播放时显示 -->
      <span class="icon-musiclist iconfont list" @click="changepoplist"></span>
      <!-- 获取歌单列表 -->
    </div>
    <audio :src="musicurl"  ref="audio"></audio>
    <!--歌曲详情页面 -->
    <van-popup v-model:show="isshowdetail"  position="bottom" :style="{ height: '100%' ,width:'100%'}">
      <MusicDetail :musiclist="musiclist[index]"></MusicDetail>
    </van-popup>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import MusicDetail from "@/components/item/MusicDetail.vue"
import pubsub from "pubsub-js"
import axios from 'axios';
export default {
    name:"FooterMusic",
    components:{
      MusicDetail,
    },
    data() {
      return {
        musiclist:JSON.parse(localStorage.getItem("musiclist")),
        index:0,
        songid:0,
        musicurl:'',
      }
    },
    computed:{
      ...mapState(["isplay","isshowdetail"]),

      ...mapMutations(["changeplaystate"]),

    },
    watch:{
      songid(){
        //监视id属性 当id变化时 自动播放歌曲
        this.$refs.audio.autoplay=true;
        if(this.$refs.audio.paused)
        // 只有当id改变 即索引改变 并且播放状态为暂停的时候才会切换播放状态
        {
          this.$store.commit("changeplaystate")
        };
      },

    },
    methods:{
      playmusic(_,){
        if(!this.isplay)
        // 如果播放状态为未播放
        {
          this.$refs.audio.play()

          this.$store.commit("changeplaystate")
          // 状态改变
        }

        else{
          // 如果状态是播放 就暂停
          this.$refs.audio.pause()
          // 然后改变状态
          this.$store.commit("changeplaystate")
        }
      },

      updateindex(_,index){
        this.index=index;
        this.songid=this.musiclist[index].id;
        console.log(this.index);
        // 每次每点击一次 就要重新从本地存储中更新音乐列表
        this.musiclist=JSON.parse(localStorage.getItem("musiclist"));
        this.getmusicurl()
      },

      changeshowdetail(){
        this.$store.commit("changeshowdetail")
      },

      ...mapMutations(["changepoplist"]),

      getmusicurl(){
        axios.get(` http://localhost:3000/song/url?id=${this.musiclist[this.index].id} `).then((res)=>{
          this.musicurl=res.data.data[0].url
        })
      },

      getaudio(){
        this.$refs.audio.addEventListener("timeupdate",this.curtimehandle)
      },

      removecurtime(){
        this.$refs.audio.removeEventListener("timeupdate",this.curtimehandle)
      },

      curtimehandle(){
        var currenttime=this.$refs.audio.currentTime;
        pubsub.publish("getcurtime",currenttime)
      },


    },
    mounted(){
      // 挂载的时候就开始订阅信息 每次点击列表 index就会改变
      pubsub.subscribe("change",this.updateindex)

      pubsub.subscribe("play",this.playmusic)

      this.getmusicurl();
  
      this.getaudio();
      
    },

    beforeDestroy() {
      this.removecurtime()
    },
}
</script>

<style lang="less" scoped>
    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 13vw;
        padding: 0 2.667vw;
        border: 1px solid #bbb;
        border-bottom-right-radius: 3.2vw;
        border-bottom-left-radius: 3.2vw;
        background-color: #fff;
    }

    .left{
      display: flex;
      align-items: center;
      width: 80vw;
      font-size: 3.2vw;
      opacity: .9;

      .musicimg{
        width: 9.333vw;
        height: 9.333vw;
        border-radius: 50%;
      }

      .songname{
        font-size: 3.733vw;
        margin-left: 5.333vw;
        margin-right: 1.333vw;

      }

      .author{
        margin-left: 1.333vw;
      }
    }

    .right{
      width: 20vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      opacity: .8;

      .play::before{
        font-size: 6.667vw;
      }

      .list::before{
        font-size: 9.333vw;
      }
    }
</style>