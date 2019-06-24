<template>
  <div id="Delivery">
    <div class="row mt-5">
    <div class="card ml-2" style="width: 30%;" v-for="(delivery,index) in deliverys" :key="index">
      <img class="card-img-top" :src="delivery.src" alt="Card image cap" style="width: 100%;height: 200px;">
      <div class="card-body">
        <h5 class="card-title text-dark">{{delivery.name}}</h5>
        <p class="card-text text-success">{{delivery.text}}</p>
        <button  class="btn btn-outline-primary" @click="Delive">快递查询</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  name:'Delivery'
  export default {

    data(){
      return{
        deliverys:[
          {src:'http://img1.imgtn.bdimg.com/it/u=3030631719,1394343644&fm=26&gp=0.jpg',name:'中通快递',text:'您的快递已到达北京市朝阳区'},
          {src:'http://img3.imgtn.bdimg.com/it/u=2008677029,3110607662&fm=26&gp=0.jpg',name:'顺丰速运',text:'您的快递昨天由广州揭阳发出'},
          {src:'http://img0.imgtn.bdimg.com/it/u=2730326877,3748093273&fm=26&gp=0.jpg',name:'中通快递',text:'您的快递正在派件请注意查收'},
        ]
      }
    },
    methods:{
      Delive(){
        this.$router.push('/about/stics')
      }
    }
  }
</script>

<style scoped>

</style>
