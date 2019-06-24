<template>
  <div id="Shopcart">
    <h3 class="mt-5">购物车</h3>
    <table class="table">
  <thead class="thead bg-info text-white">
    <tr>
      <th scope="col">数量</th>
      <th scope="col">种类</th>
      <th scope="col">价格（元）</th>
    </tr>
  </thead>
  <template  v-if="newshop.length>0">
    <tbody>
    <tr v-for="(shop,index) in newshop" :key="index" class="p-3 mb-2 ">
      <th scope="row">
        <button class="btn btn-success but align-middle" @click="Less(shop,index)">-</button>
        <input type="number" class="inpu1 align-middle" v-model="shop.number">
        <button class="btn btn-success but align-middle" @click="shop.number>=10?10:shop.number++">+</button>
      </th>
      <td>{{shop.name}}-{{shop.size}}</td>
      <td>{{shop.price}}</td>
    </tr>
    <tr class="p-3 mb-2 text-danger">
      <td colspan="3" class="text-right"><span>商品总件数：</span><span class="h3">{{Totalnum}}</span></td>
    </tr>
    <tr class="p-3 mb-2  text-danger">
      <td colspan="3" class="text-right"><span>商品总金额：</span> <span class="h3">{{Totalmon}}</span> </td>
    </tr>
  </tbody>
  </template>
  <template v-else>
    <tbody>
      <tr>
        <th colspan="3">
          <img src="../../../static/timg.gif" alt="" class="img-thumbnail">
        </th>
      </tr>
      <tr>
        <td colspan="3" style="border:none"><img src="../../../static/zuo.jpg" alt="" class="imgs"><span class="align-middle ml-4">购物车空了吧!左侧可以添加哦~~</span></td>
      </tr>
    </tbody>
  </template>
</table>
  </div>
</template>

<script>
  name:'Shopcart'
  export default {
    props:['newshop'],
    methods:{
      Less(shop,index){
        if(shop.number<=1){
          this.newshop.splice(index,1)
        }else{
          shop.number--
        }
      }
    },
    computed:{
      Totalnum(){
      return  this.newshop.reduce((prev,next)=>{
          return prev + next.number
        },0)
      },
      Totalmon(){
      return  this.newshop.reduce((prev,next)=>{
          return prev + Number(next.number*next.price)
        },0)
      }
    }
  }
</script>

<style scoped>
.inpu1{width: 3rem;}
.but{padding: 0;width: 1.9rem;height: 1.9rem !important; }
.imgs{width: 5rem;height: 5rem;}
</style>
