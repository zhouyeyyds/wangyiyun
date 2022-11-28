import { createStore } from 'vuex'

export default createStore({
  state: {
    isplay:false,
    isshowdetail:false,
    ispoplist:false,
    //是否弹出歌单列表
    moduleindex:0,
    isshowcommend:false,
    isshowlyric:false,
    islogin:false,
  },
  getters: {
  },
  mutations: {
    changeplaystate(state){
      // 改变播放状态
      state.isplay=!state.isplay
    },

    changeshowdetail(state){
      // 是否显示音乐详情页
      state.isshowdetail=!state.isshowdetail;
    },

    changepoplist(state){
      // 是否弹出歌词列表
      state.ispoplist=!this.ispoplist;
    },

    changeplaymodule(state){
      state.moduleindex=(state.moduleindex+1)%3
    },

    changeshowcommend(state){
      state.isshowcommend=!state.isshowcommend;
    },

    changeshowlyric(state){
      state.isshowlyric=!state.isshowlyric
    },
    changelogin(state){
      state.islogin=!state.islogin;
    }
    
  },
  actions: {
  },
  modules: {
  }
})
