<template>
  <div class="user">
    <!-- 顶部开始 -->
    <div class="top">
      <van-icon name="wap-nav" class="list"/>
      <span class="search iconfont icon-search" @click="$router.push('/search')"></span>
    </div>
    <!-- 顶部结束 -->

    <!-- 用户信息开始 -->
    <div class="message">
      <!-- 用户头像 -->
      <img src="@/assets/img/user.jpg" class="img">
      <div class="name">
        <!-- 名称部分 -->
        <p class="username">zhouyeyyds</p>
        <p class="vip">vip续费</p>
      </div>
      <div class="detail">
        <!-- 小字部分 -->
        <span> 
          <span class="num-guanzu">5</span> 关注
        </span>
        <span>|</span>
        <span>
          <span class="num-fens">4</span> 粉丝
        </span>
        <span>|</span>
        <span>
          Lv. <span class="level">7</span>
        </span>
      </div>
    </div>
    <!-- 用户信息结束 -->

    <!--最近播放等细节  -->
    <div class="main">
      <div class="head">
        <!-- 上面部分 -->
          <li>
            <!-- 最近播放 -->
            <van-icon name="play-circle" />
            <p>最近播放</p>
          </li>
          <li>
            <!-- 本地下载 -->
            <van-icon name="music" />
            <p>本地下载</p>
          </li>
          <li>
            <!-- 云盘 -->
            <span class="iconfont icon-meirituijian yunpan"></span>
            <p>云盘</p>
          </li>
          <li>
            <!-- 已购 -->
            <van-icon name="goods-collect" />
            <p>已购</p>
          </li>
      </div>
      <div class="center">
        <!-- 中间部分 -->
        
          <li>
            <!-- 我的好友 -->
            <van-icon name="friends" />
            <p>我的好友</p>
          </li>
          <li>
            <!-- 收藏和赞 -->
            <van-icon name="star" />
            <p>收藏和赞</p>
          </li>
          <li>
            <!-- 我的播客 -->
            <span class="iconfont icon-voiceprint boke"></span>
            <p>我的播客</p>
          </li>
          <li>
            <!-- 乐迷团 -->
            <van-icon name="invitation" />
            <p>乐迷团</p>
          </li>
      </div>
      <div class="tail">
        <!-- 底部 -->
        <van-icon name="plus" class="close"/>
        <p>音乐应用</p>
        <!-- 关闭按钮 -->
      </div>
    </div>
    <!-- 我的喜欢开始 -->
    <div class="favorite">
      <div class="left">
        <img src="@/assets/img/user.jpg">
        <span class="iconfont icon-jushoucanggift like"></span>
        <div class="text">
          <p class="music">我喜欢的音乐</p>
          <p class="num">15首</p>
        </div>  
      </div>
      <div class="model">
        <span class="iconfont icon-like "></span>
        <p>心动模式</p>
      </div>
    </div>
    <!-- 我的喜欢结束 -->

    <!-- 功能选择开始 -->
    <div class="func">
      <p class="active">创建歌单</p>
      <span>|</span>
      <p>收藏歌单</p>
      <span>|</span>
      <p>歌单助手</p>
    </div>
    <!-- 功能选择结束 -->

    <!-- 创建歌单开始 -->
    <div class="createlist">
      <div class="bar">
        <!-- 上面显示条 -->
        <div class="left">
          <p>创建歌单</p>
          <span>(2个)</span>
        </div>
        <div class="right">
          <van-icon name="plus" class="add"/>
          <van-icon name="ellipsis" class="more"/>
        </div>
      </div>
      <!-- 第一项开始 -->
      <li>
          <div class="left">
            <!-- 第一项左侧 -->
            <img src="@/assets/img/user.jpg">
            <!-- 图片 -->
            <div class="text">
              <!-- 文字描述 -->
              <p>小晕</p>
              <!-- 歌单名字 -->
              <span>18首</span>
              <!-- 歌曲数目 -->
            </div>
          </div>
          <span class="icon-checkmore iconfont "></span>
      </li>
      <!-- 第一项结束 -->

      <!-- 第二项开始 -->
      <li>
          <div class="left">
            <!-- 第一项左侧 -->
            <img src="@/assets/img/user.jpg">
            <!-- 图片 -->
            <div class="text">
              <!-- 文字描述 -->
              <p>zhouyeyyds的2022年度歌单</p>
              <!-- 歌单名字 -->
              <span>10首</span>
              <!-- 歌曲数目 -->
            </div>
          </div>
          <span class="icon-checkmore iconfont "></span>
      </li>
      <!-- 第二项结束 -->

      <!-- 第三项开始 -->

      <li>
        <div class="left">
            <!-- 第一项左侧 -->
            <img src="@/assets/img/user.jpg">
            <!-- 图片 -->
    
            <!-- 文字描述 -->
            <p>一键导入外部音乐</p>
          </div>
      </li>
      <!-- 第三项结束 -->

    </div>
    <!-- 创建歌单结束 -->

    <!-- 收藏歌单开始 -->
    <div class="shoucang">
      <div class="bar">
        <!-- 上面显示条 -->
        <div class="left">
          <p>收藏歌单</p>
          <span>(1个)</span>
        </div>
        <div class="right">
          <van-icon name="ellipsis" class="more"/>
        </div>
      </div>
      <!-- 第一项开始 -->
      <li>
          <div class="left">
            <!-- 第一项左侧 -->
            <img src="@/assets/img/user.jpg">
            <!-- 图片 -->
            <div class="text">
              <!-- 文字描述 -->
              <p>热歌榜</p>
              <!-- 歌单名字 -->
              <span>200</span>
              <!-- 歌曲数目 -->
              <span>首,by <span>网易云音乐</span></span>
            </div>
          </div>
          <span class="icon-checkmore iconfont "></span>
      </li>
      <!-- 第一项结束 -->
    </div>
    <!-- 收藏歌单结束 -->


    <!-- 歌单助手开始 -->

    <!-- 歌单助手结束 -->



  </div>
</template>

<script>
import { ref,reactive,computed,watch, toRefs } from 'vue';
export default {
   setup(){
    // 数据

    return{
  
    }
    
  }
}
</script>

<style lang="less" scoped>
  .user{
    // 整个模板区域
    background-color: #f7f7f5;
    padding: 2.667vw;
  }

  .top{
    // 顶部
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5.333vw;

    .list::before{
      font-size: 6.667vw;
      opacity: .6;
    }

    .search::before{
      font-size: 6.667vw;
    }
  }

  .message{
    // 用户信息区域
    position: relative;
    background-color: #fff;
    padding: 2.667vw;
    margin-bottom: 4vw;
    height: 24vw;
    font-size: 3.2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.333vw;
    box-shadow: 0 0.267vw 0.267vw rgb(237, 235, 235);
    justify-content: space-between;

    .img{
      position: absolute;
      left: 50%;
      top: -6.667vw;
      transform: translate(-50%,0);
      width: 13.333vw;
      height: 13.333vw;
      border-radius: 50%;
      
    }

    .name{
      margin-top: 6.667vw;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .username{
        font-size: 4vw;
        font-weight: 550;
      }

      .vip{
        border: 0.267vw solid #bbb;
        background-color: #bbb;
        color: #fff;
        border-radius: 4.267vw;
        margin-left: 1.333vw;
      }

      
    }

    .detail{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 36vw;
        color: rgb(121, 121, 121);
      }

    .vip::before{
      font-size: 6.667vw;
    }
  }
  .main{
    // 主要内容区域
    background-color: #fff;
    height: 44vw;
    margin-bottom: 4vw;
    border-radius: 2.667vw;
    padding: 5.333vw;

    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 17.333vw;
      font-size: 6.667vw;
      color: #f44542;

      p{
        font-size: 3.2vw;
        color: rgb(111, 110, 110);
      }
    }
  }
  .head{
    // 上面部分的图标
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.667vw;

    .yunpan::before{
      font-size: 6.667vw;
    }
  }
  .center{
    // 下面部分图标
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.667vw;
    padding-bottom: 2.667vw;
    border-bottom: 0.267vw solid rgb(219, 217, 217);

    .boke::before{
      font-size: 6.667vw;
    }
  }

  .tail{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.467vw;
  }

  .favorite{
    // 我的喜欢
    background-color: #fff;
    margin-bottom: 4vw;
    border-radius: 1.333vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 3.2vw;
    padding: 4vw;

    .left{
      position: relative;
      display: flex;
      align-items: center;
    }

    .like::before{
      position: absolute;
      left: 2.667vw;
      top: 2.933vw;
      font-size: 6.667vw;
      color: #fff;
    }

    img{
      width: 12vw;
      height:12vw;
      border-radius: 1.6vw;
      margin-right: 2.667vw;
    }

    .music{
      font-size: 3.733vw;
    }

    .num{
      color: rgb(144, 144, 144);
    }

    .model{
      display: flex;
      padding: 0 1.333vw;
      border: 0.267vw solid #bbb;
      border-radius: 2.667vw;

      .icon-like::before{
        font-size: 4.8vw;
      }
    }
  }

  .func{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0 9.333vw;
    font-size: 3.733vw;
    color: rgb(98, 98, 98);

    span{
      font-size: 3.2vw;
    }
  }

  .active{
    color: #000;
    font-weight: 550;
  }

  .createlist{
    padding: 4vw;
    background-color: #fff;
    border-radius: 2.667vw;
    margin-top: 4vw;

    .bar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      color: rgb(98, 98, 98);
      margin-bottom: 10px;

      .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .add::before{
        font-size: 18px;
        margin-right: 10px;
      }

      .more::before{
        font-size: 18px;
      }
    }

    
  }

  li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.667vw;

      .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:3.2vw;

        img{
        width: 13.333vw;
        height: 13.333vw;
        border-radius: 2.667vw;
        margin-right: 2.667vw;
      }

      }

      .text span{
        color: rgb(144, 144, 144);
      }

      .icon-checkmore::before{
    font-size: 8vw;
  } 
    }

  .shoucang{
    padding: 4vw;
    background-color: #fff;
    border-radius: 2.667vw;
    margin-top: 4vw;

    .bar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 3.467vw;
      color: rgb(98, 98, 98);
      margin-bottom: 2.667vw;

      .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .more::before{
        font-size: 4.8vw;
      }
    }
  }

  

</style>