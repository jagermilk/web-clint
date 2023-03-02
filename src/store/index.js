import { createStore } from 'vuex'

export default createStore({
  //状态
  state(){
    return {
      userID:'',
    }
  },
  //事件
  mutations:{
    changeuserID(payload){
        this.userID=payload
    }
  },
  //派发状态操作
  actions:{}
})