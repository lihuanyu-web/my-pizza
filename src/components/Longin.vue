<template>
  <div id="Longin" class="container text-center">
    <img src="../assets/logo.png"  alt="" class="mt-5">
   <h3 class="text-warning mt-2">欢迎登录木屋披萨</h3>
   <div class="row text" >
       <div class="col-3"></div>
       <div class="col-6 text-left mt-3 text-danger text" v-show="flag==1">{{msg}}</div>
    </div>
   <form action="">
     <div class="form-group row mt-4">
       <label for="inputEmail3" class="col-3 col-form-label text-right">用户名：</label>
        <div class="col-6">
          <input type="email" class="form-control" id="inputEmail3" placeholder="请输入用户名" v-model="username">
       </div>
     </div>
     <div class="form-group row mt-4">
       <label for="inputEmail3" class="col-3 col-form-label text-right">密码：</label>
        <div class="col-6">
          <input type="email" class="form-control" id="inputEmail3" placeholder="请输入密码" v-model="password">
       </div>
     </div>
     <div class="row">
       <div class="col-3"></div>
       <button type="submit" class="btn btn-primary col-6 but" @click.prevent="onLongin">立即登录</button>
     </div>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Longin',
  data () {
    return {
      flag:'',
      msg:'',
      username:'',
      password:''
    }
  },
  methods:{
    onLongin(){
      axios.get('./LHY-user.json')
      .then(res=>{
        // console.log(res)
        const arr = []
        for(let key in res.data){
          arr.push(res.data[key])
        }
       const veri = arr.filter((item)=>{
          return item.username===this.username
        })
      const veri1 = arr.filter((item)=>{
        return item.password===this.password
      })
        if(this.username==''){
          this.flag=1
          this.msg="用户名不能为空"
        }else if(veri.length<=0){
          this.flag=1
          this.msg="您还没有注册，请注册后再登录"
        }else if(this.password==""){
          this.flag=1
          this.msg="密码不能为空"
        }else if(veri1.length<=0){
           this.flag=1
          this.msg="密码输入不正确请重新输入"
        }else{
          this.$store.dispatch('setUser',veri[0].username)
          this.$router.push('/')
        }
      })


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{width: 8rem;}
  .but{width: 10rem;}
  .text{height: 2rem;}
</style>
