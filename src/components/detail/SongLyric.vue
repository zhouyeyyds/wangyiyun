<template>
  <div class="songlyric" @click="changeshowlyric" >
    <ul ref="lyr">
        <li v-for="item,index in allkeyobj" :key="index" class="lyric" >
            <span :class="{active:currenttime>=item.num&&currenttime<allkey[index+1]}">{{item.song}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';
import pubsub from "pubsub-js"
export default {
    props:["musiclist"],
    data() {
        return {
            lyric:[],
            currenttime:0,
            allkey:[],
            allkeyobj:[],
        }
    },
    methods:{
       ...mapMutations(["changeshowlyric"]),

       getlyric(){
            axios.get(` http://localhost:3000/lyric?id=${this.musiclist.id}`).then((res)=>{
                this.lyric=res.data.lrc.lyric;
                this.filterlyric(res.data.lrc.lyric);
            })
            
       },
       filterlyric(lyric){
            if(!lyric) return
            // 如果获得歌词为空 则直接返回

            var lyc=[];
            var lyricarr=lyric.split("\n");
            // split用于字符串的分割  被分割的字符串会返回一个数组 
            var reg=/\[\d*:\d*(\.|:)\d*]/g;
            // 定义匹配规则
            for(var i=0;i<lyricarr.length;i++)
            // 遍历每一个被分割的字符串组成的数组
            {
                var timearr=lyricarr[i].match(reg);
                // 匹配歌词的时间

                if(!timearr)  continue;

                // 然后获取歌词
                var content=lyricarr[i].replace(timearr,"")
                
                // 处理时间把时间化为毫秒
                var t=timearr[0];
                var min=parseInt(t.match(/\[\d*/i).toString().slice(1));
                var sec=parseInt(t.match(/\:\d*/i).toString().slice(1));

                var totaltime=min*60+sec;
                // 总的毫秒数
                lyc[totaltime]=content;
                // 让毫秒数来充当索引 存储在该时间对应的歌词

            }

            // this.lyric=lyc;
            this.getallkey(lyc)
       },

       getallkey(arr){
            for(var i=0;i<arr.length;i++){
                if(arr[i]){
                    // 这里做了一个判断 如果歌词为空 就不保存
                    this.allkey.push(i)
                    // 另外用一个数组来存放索引 为动态显示每一条歌词做铺垫
                    this.allkeyobj.push({num:i,song:arr[i]})
                    // 一个数组存放索引和歌词
                }
            }
       },
       getcurenttime(_,curtime){
            this.currenttime=curtime;
       },
       
    },
    mounted(){
        this.getcurenttime()
        pubsub.subscribe("getcurtime",this.getcurenttime)
        this.getlyric()
    },
}
</script>

<style lang="less" scoped>
    ul{
        width: 100vw;
        height: 122vw;
        overflow: scroll;
        padding:  15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
    }

    .lyric{
       margin-bottom: 3px;


       span{
        display: flex;
        height: 30px;
       }
    }

    .active{
        color:#fff;
    }

    
</style>