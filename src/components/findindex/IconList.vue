<template>
  <div class="list">
    <div class="iconlist">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-meirituijian"></use>
        </svg>
        <span>每日推荐</span>
    </div>
    <div class="iconlist">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-radio"></use>
        </svg>
        <span>私人FM</span>
    </div>
    <div class="iconlist">
        <i class="iconfont icon-icon-"></i>
        <span class="single">歌单</span>
    </div>
    <div class="iconlist">
        <i class="iconfont icon-paixingbang"></i>
        <span class="single paihangbang">排行榜</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"IconList"
}
</script>

<style lang="less" scoped>
    .list{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 10vw;
        font-size: 3.733vw;
        .iconlist{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .icon{
                width: 7vw;
                height: 10vw;
            }

            .icon-icon-:before{
                font-size: 8vw;
                color: #ff6700;
            }

            .icon-paixingbang:before{
                font-size: 7vw;
                color: skyblue;
            }
            .single{
                margin-top: 2.4vw;
            }
            .paihangbang{
                margin-bottom: -1.067vw;
            }
        }
    }
</style>