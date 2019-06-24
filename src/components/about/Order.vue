<template>
  <div id="Order">
    <div class="row mt-5">
    <div class="card ml-2" style="width: 30%;" v-for="(order,index) in orders" :key="index">
      <img class="card-img-top" :src="order.src" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title text-warning">{{order.name}}</h5>
        <p class="card-text text-success">{{order.text}}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
name: "Order";
export default {
  data() {
    return {
      orders:[
        {src:'https://img.4008123123.com/resource/VersionP/phdi/72_12488.jpg',name:'黄金夏威夷风光比萨',text:'已完成支付'},
        {src:'https://img.4008123123.com/resource/VersionP/phdi/72_12484.jpg',name:'海鲜至尊比萨',text:'已完成支付'},
        {src:'https://img.4008123123.com/resource/VersionP/phdi/23_3083.jpg',name:'炙烤澳洲牛肉比萨',text:'已完成支付'}
      ]
    };
  }
};
</script>

<style scoped>
</style>
