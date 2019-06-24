// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import citySelector from 'vue2-city-selector'
Vue.use(citySelector)

Vue.config.productionTip = false
import axios from 'axios'
// import Swiper from 'swiper'
/* eslint-disable no-new */
axios.defaults.baseURL='https://wd8401393965sdcydf.wilddogio.com/'
// router.beforeEach((to, from, next) => {
//  if(localStorage.getItem('islogin')){
//    next()
//  }else{
//    if(to.path=='/' || to.path=='/about' || to.path=='/position' || to.path=='/regester' ||to.path=='/about/act'|| to.path=='/about/cont' || to.path=='/about/person' || to.path=='/about/addr' || to.path=='/about/tel' || to.path=='/about/addr' || to.path=='/about/addr' || to.path=='/about/addr' || to.path=='/longin'){
//      next()
//    }else{
//      if(confirm('您还未登录，请先登录')){
//        next('/longin')
//      }else{
//        next(false)
//      }
//    }
//  }

// })
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
