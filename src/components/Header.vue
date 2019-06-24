<template>
  <div id="Header">
     <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link class="py-2" to="/">
          <span >木屋点餐系统</span><img src="../assets/logo (1).svg" alt="">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> -->
        </router-link>
        <router-link class="py-2 d-none d-md-inline-block linkwa" to="/" exact active-class="active">主页</router-link>
        <router-link class="py-2 d-none d-md-inline-block linkwa" to="/menu" active-class="active">菜单</router-link>
        <router-link class="py-2 d-none d-md-inline-block linkwa" to="/admin" active-class="active">管理</router-link>
        <router-link class="py-2 d-none d-md-inline-block linkwa" to="/about" active-class="active">关于我们</router-link>
        <router-link class="py-2 d-none d-md-inline-block linkwa" to="/position" active-class="active">餐厅查询</router-link>
        <template v-if="!islogin">
            <router-link class="py-2 d-none d-md-inline-block linkwa" to="/longin" active-class="active">登陆</router-link>
            <router-link class="py-2 d-none d-md-inline-block linkwa" to="/regester" active-class="active">注册</router-link>
        </template>
        <template v-else>
          <div class="mingz"><span class="text-primary bg-warning yonghu" @click="jinru">{{loginUser}}</span><span @click="tuichu"><button class="btn btn-outline-danger but1">退出当前登录</button></span></div>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {

    }
  },
  computed:{
    islogin(){
     return this.$store.getters.getIslogin
    },
    loginUser(){
     return this.$store.getters.getLoginuser
    }
  },
  methods:{
    tuichu(){
      if(confirm('您确定要退出吗？')){
        this.$store.dispatch('setUser',null)
        this.$router.push('/longin')
      }else{
        return false
      }
  },
  jinru(){
    this.$router.push('/admin')
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Header{
  background: rgba(0, 255, 102, 0.2);
  color: #333;
  text-decoration: none;
}
#Header div span{
  color: #333;
  text-decoration: none;
}
 svg{
   float: left;
 }
 .linkwa{
   padding: 10px 20px;
   color: #333;
  text-decoration: none;
 }
 .linkwa:hover{
   background: #007bff;
   color: #fff;
   text-decoration: none;
   border-radius: 5px;
 }
 img{
   width: 24px;
   height: 24px;
   float: left;
 }
 .active{
   background: #007bff;
   color: #fff;
   text-decoration: none;
   border-radius: 5px;
 }
 .but1{font-size: 12px;padding: 0.2rem;vertical-align: 1px;margin-left: 1rem;}
 .mingz{margin-top: 0.5rem;text-decoration:underline;}
 .yonghu{padding: 0.2rem; border-radius: 0.2rem;cursor: pointer;}
</style>
