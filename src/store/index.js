import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    menuItems:[],
    loginUser:localStorage.getItem('loginUser'),
    islogin:localStorage.getItem('islogin')
  },
  getters:{
    getMenuItem:state=>state.menuItems,
    getLoginuser:state=>state.loginUser,
    getIslogin:state=>state.islogin
  },
  mutations:{
    //增加一条数据
    pushmenuItem(state,data){
      state.menuItems.push(data)
    },
    //获取所有数据
    setmenuItem(state,data){
      state.menuItems=data
    },
    //删除一条数据
    deletIteme(state,data){
      state.menuItems.splice(data,1)
    },
    UserStatus(state,data){
      if(data){
        state.islogin=true
        state.loginUser=data
        localStorage.setItem('islogin',true)
        localStorage.setItem('loginUser',data)
      }else{
        state.islogin=false
        state.loginUser=null
        localStorage.clear()
      }
    }
  },
  actions:{
    setUser({commit},veri1){
      commit('UserStatus',veri1)
    }
  },

})
