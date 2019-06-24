<template>
  <div id="Activity">
    <div class="row mt-5">
    <div class="card ml-2" style="width: 30%;" v-for="(activity,index) in activitys" :key="index">
      <img class="card-img-top" :src=" activity.src" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title text-dark">{{activity.name}}</h5>
        <p class="card-text text-success">{{activity.text}}</p>
      </div>
      <button  class="btn btn-outline-success" @click="inqu">查询活动</button>
    </div>
    </div>
  </div>
</template>
<script>
  name:'Activity'
  export default {

    data(){
      return{
        activitys:[
          {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297642.jpg',name:'黄金夏威夷风光比萨',text:'五一七天乐，越吃越快活'},
        {src:'https://img.4008123123.com/resource/VersionP/phdi/209_122463.jpg',name:'海鲜至尊比萨',text:'只要大胆尝试，下一个幸运儿就是你'},
        {src:'https://img.4008123123.com/resource/VersionP/phdi/23_3089.jpg',name:'炙烤澳洲牛肉比萨',text:'只有你想象不到的优惠哦~'}
        ]
      }
    },
    methods:{
      inqu(){
        this.$router.push('/in')
      }
    }
  }
</script>

<style scoped>
.btn{
  width:100%;
}
</style>
