<template>
  <div id="Regester" class="container text-center">
   <img src="../assets/logo.png"  alt="" class="mt-5">
   <h3 class="text-success mt-2">注册木屋披萨会员</h3>
   <div class="row text" >
       <div class="col-3"></div>
       <div class="col-6 text-left mt-3 text-danger text" v-show="flag==1" >{{msg}}</div>
    </div>
   <form action="">
     <div class="form-group row mt-4">
       <label for="inputEmail3" class="col-3 col-form-label text-right">邮箱：</label>
        <div class="col-6">
          <input type="email" class="form-control" id="inputEmail3" placeholder="请输入邮箱" v-model="users.username">
       </div>
     </div>
     <div class="form-group row mt-4">
       <label for="inputEmail3" class="col-3 col-form-label text-right">密码：</label>
        <div class="col-6">
          <input type="email" class="form-control" id="inputEmail3" placeholder="请输入密码" v-model="users.password">
       </div>
     </div>
     <div class="form-group row mt-4">
       <label for="inputEmail3" class="col-3 col-form-label text-right">确认密码：</label>
        <div class="col-6">
          <input type="email" class="form-control" id="inputEmail3" placeholder="请再次输入密码" v-model="users.repassword">
       </div>
     </div>
     <div class="row">
       <div class="col-3"></div>
       <button type="submit" class="btn btn-primary col-6 but" @click.prevent="onSubmit">立即注册</button>
     </div>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Regester',
  data () {
    return {
      flag:'',
      msg:'',
      users:{
        username:'',
        password:'',
        repassword:''
      }
    }
  },
  methods:{
    onSubmit(){
      let reg1 = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
      let reg2 = /^\w+$/

      if(this.users.username==''){
        this.flag=1
        this.msg="用户名不能为空"
      }else if(!reg1.test(this.users.username)){
        this.flag=1
        this.msg="您输入的邮箱格式不正确，请重新输入"
      }else if(this.users.password ==''){
        this.flag=1
        this.msg="密码不能为空"
      }else if(!reg1.test(this.users.username)){
        this.flag=1
        this.msg="您输入的密码格式不正确，请重新输入"
      }else if(this.users.repassword ==''){
        this.flag=1
        this.msg="再次输入密码不能为空"
      }else if(this.users.repassword!=this.users.password){
        this.flag=1
        this.msg="两次密码输入不一致，请重新输入"
      }else{
        axios.get('./LHY-user.json')
        .then(res=>{
          const arr = []
          for(var key in res.data){
            arr.push(res.data[key])
          }
          const trueUser = arr.filter(item=>{
            return item.username===this.users.username
          })
          if(trueUser.length>0){
            this.flag=1
            this.msg ="此用户名已经注册，请登录"
            this.$router.push('/login')
          }else{
            const formData = {
          username:this.users.username,
          password:this.users.password
        }
        axios.post('./LHY-user.json',formData)
        .then(res=>{
          this.flag=''
          this.$router.push('/about/sec')
        })
          }
        })
      }

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
