<template>
  <div id="Seccess" class="container mt-5">
    <div class="card text-center">
      <div class="card-header bg-success text-white">恭喜您注册成功a(*^▽^*)</div>
      <div class="card-body">
        <h5 class="card-title text-danger">恭喜您成为木屋披萨小店的尊贵会员</h5>
        <p class="card-text">{{time}}秒自动跳转到登录页面</p>
        <a href="#" class="btn btn-primary" @click="Jump">点击跳转到登录页</a>
      </div>
      <div class="card-footer  bg-success text-white">首次订购有优惠哦a(๑*◡*๑)</div>
    </div>
  </div>
</template>

<script>
name: "Seccess";
export default {
  data(){
    return{
      time:10
    }
  },
  mounted(){
    this.run()
  },
  methods:{
    Jump(){
      this.$router.push('/longin')
    },
    run(){
      var n = this.time
    var timer =  setInterval(()=>{
       this.time = n--
       if(n<=0){
        this.$router.push('/longin')
         clearInterval(timer)
      }
      },1000)
   }
  }
};
</script>

<style scoped>

</style>
