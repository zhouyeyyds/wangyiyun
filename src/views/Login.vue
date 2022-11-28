<template>
  <div class="login">
    <div class="logo">
      <!-- logo区域 -->
      <img src="@/assets/img/logo.jpg" class="logoimg">
    </div>
    <div class="contend">
      <!-- 主要内容区域 -->
      <div class="acount">
        <!-- 账号 -->
        <input type="text" v-model="acount">
        <span class="icon-delete iconfont delacount" v-show="putacount" @click="acount=''"></span>
        <span class="trangle"></span>
        <!-- 绘制三角形 -->
      </div>

      <div class="password">
        <!-- 密码 -->
        <input type="password" class="password" v-model="password">
        <span class="icon-delete iconfont delpassword" v-show="putpassword" @click="password=''"></span>
      </div>

      <div class="agree">
        <!-- 同意服务 -->
        <van-icon name="passed" class="checkbefore" v-show="!ischeck" @click="ischeck=!ischeck"/>
        <van-icon name="checked" class="checked" v-show="ischeck" @click="ischeck=!ischeck"/>
        <p class="word">已阅读并同意服务协议和网易云隐私保护指引</p>
      </div>

      <div class="next">
        <!-- 下一步 提交登录申请-->
        <span class="iconfont icon-next" @click="login"></span>
        
      </div>
      <img :src="qrimg" class="qrimg">
      <div class="bottom">
        <!-- 底部切换登录方式 -->
        <p>手机号登录</p>
        <span>|</span>
        <p>新用户注册</p>
        <span>|</span>
        <p>更多选项</p>
        <span>|</span>
        <p>扫码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect} from 'vue';
import axios from 'axios';
export default {
  setup(){
    let ischeck=ref(false)
    let acount=ref("")
    let password=ref('')
    let putacount=ref(false)
    let putpassword=ref(false)
    let qrimg=ref("")
    var key;

    watchEffect(()=>{
      // 监视
      // ref的数据 在内部使用的时候要加上.value 
      // 在template模板中可以直接使用  即不要加.value
      if(acount.value.length)
      {
        putacount.value=true;
      }
      else
      putacount.value=false;
      if(password.value.length)
      {
        putpassword.value=true
      }
      else
      putpassword.value=false;
    })

    function getloginqrkey(){
      axios.get(`http://localhost:3000/login/qr/key`).then((res)=>{
        console.log(res,1);
        key=res.data.data.unikey;
      })
    }
      
    function getloginqrimg(){
      axios.get(`http://localhost:3000/login/qr/create?key=${key}`, {
            params: {
              qrimg: true,
              timestamp: new Date().getTime(),
              withCredentials: true
            }
          }).then((res)=>{
        console.log(res,2,res.data.data.qrimg);
        qrimg.value=res.data.data.qrimg;
      })
    }
    function login(){
      getloginqrkey()
      getloginqrimg()
      checklogin()
    }

    function checklogin(){
      timer=setInterval(()=>{
        axios.get(`http://localhost:3000/login/qr/check?key=${key}`).then((res)=>{
        console.log(res,3);
      })
      },3000)
    }


    return {
      ischeck,acount,password,putacount,putpassword,login,qrimg
    }
  }
}
</script>

<style lang="less" scoped>
  .contend{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 84vw;
    font-size: 3.2vw;
  }
  .bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
    
    span{
      opacity: .6;
    }
  }
  .logoimg{
    width: 100vw;
  }

  .next{
    border: 0.267vw solid skyblue;
    width: 16vw;
    height: 16vw;
    border-radius: 50%;
    text-align: center;
    line-height: 16vw;
    background-image: linear-gradient(rgb(21, 178, 239),rgb(121, 121, 204));
    color: #fff;
  }

  .agree{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .checked{
      color: rgb(80, 240, 80);
    }
  }

  input{
    outline: none;
    width: 80vw;
    height: 14.667vw;
    border-radius: 10.667vw;
    text-align: center;
    padding: 2.667vw;
    border: 0.267vw solid #bbb;
    background-color: rgb(245, 245, 245);
    font-size: 4.267vw;
  }

  .acount{
    position: relative;
    opacity: .9;
    .delacount::before{
      position: absolute;
      right: 9.333vw;
      top: 37%;
      opacity: .5;
    }
  }

  .password{
    position: relative;
    opacity: .9;
    .delpassword::before{
      position: absolute;
      right: 12vw;
      top: 37%;
      opacity: .5;
    }
  }

  .trangle{
    position: absolute;
    right: 4vw;
    top: 48%;
    width: 0;
    height: 0;
    border-top: 1.333vw solid #bbb;
    border-left: 1.333vw solid transparent;
    border-right: 1.333vw solid transparent;

  }
  
  .qrimg{
    width: 53.333vw;
  }

</style>