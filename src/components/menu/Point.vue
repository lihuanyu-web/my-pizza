<template>
  <div id="Point">
    <h3 class="mt-5">点餐</h3>
    <table class="table">
  <thead class="thead bg-secondary text-white">
    <tr>
      <th scope="col">尺寸</th>
      <th scope="col">价格（元）</th>
      <th scope="col">加入</th>
    </tr>
  </thead>
  <template v-if="newponint.length>0">
    <tbody v-for="(item,index) in newponint" :key="index">
    <tr class="p-3 mb-2 h4">
      <td scope="row" colspan="3">{{item.name}}</td>
    </tr>
    <tr class="p-3 mb-2 ">
      <th scope="row" colspan="3">{{item.miaoshu}}</th>
    </tr>
    <tr v-for="(item1,index1) in item.sizes" :key="index1" class="p-3 mb-2 ">
      <th scope="row" class="align-middle">{{item1.size}}</th>
      <td class="align-middle">{{item1.price}}</td>
      <td><button  class="btn btn-primary but" data-toggle="tooltip" data-placement="top" title="最多添加10件商品" @click="send(item,item1)">+</button></td>
    </tr>
  </tbody>
  </template>
  <template v-else>
    <tbody>
      <tr>
        <td colspan="3"><img src="../../../static/1.gif" alt="" class="imgs"></td>
      </tr>
      <tr>
        <td colspan="3" style="border:none"><p class="h4 text-danger">赶快去点餐吧~~~</p></td>
      </tr>
      <tr>
         <td colspan="3" style="border:none"><button class="btn btn-outline-dark btn-block " @click="diancan">去点餐</button></td>
      </tr>
    </tbody>
  </template>
</table>
  </div>
</template>

<script>
  name:'Point'
  import axios from 'axios'
  export default {
    props:['newponint'],
    data(){
      return{

      }
    },
    methods:{
     send(item,item1){
       this.$emit('point',{item:item,item1:item1})
     },
     diancan(){
       this.$router.push('/admin')
     }
    },
    updated () {
       $(function () {
         console.log($('.but'))
       $('.but').tooltip()
    })
    }
  }
</script>

<style scoped>
.imgs{width: 20rem;height: 20rem;}
</style>
