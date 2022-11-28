<template>
  <!-- 歌单详情页 -->
  <div class="detail">
    <ItemMusicTop :playlist="playlist"></ItemMusicTop>
    <!-- 歌单顶部 -->
    <ItemMusicList :id="id"></ItemMusicList>
    <!-- 歌单列表 -->
  </div>
</template>

<script>
import axios from "axios";
import ItemMusicTop from "@/components/item/ItemMusicTop.vue"
import ItemMusicList from "@/components/item/ItemMusicList.vue"
export default {
    name:"MusicItem",
    components:{
      ItemMusicTop,ItemMusicList
    },
    data() {
      return {
        id:this.$route.query.id,
        // playlist:JSON.parse(sessionStorage.getItem("playlist"))
        playlist:[],
      }
    },
    methods:{
      getitem(){
        axios.get(`http://localhost:3000/playlist/detail?id=${this.id}`).then((res)=>{
          // console.log(res);
          this.playlist=res.data.playlist
          
        });

      },

    
    },
    mounted(){
      this.getitem()
    }

   
}
</script>

<style>

</style>