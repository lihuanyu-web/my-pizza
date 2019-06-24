<template>
  <div id="About" class="container">
    <div class="row">
      <div class="col-4 mt-4">
        <nav>
          <router-link to="/about/act"  class="list-group-item list-group-item-primary text-center mt-4">热门活动</router-link>
          <router-link to="/about/cont"  class="list-group-item list-group-item-warning text-center mt-4">联系我们</router-link>
          <router-link to="/about/order"  class="list-group-item list-group-item-danger text-center mt-4">历史订单</router-link>
          <router-link to="/about/deli"  class="list-group-item list-group-item-success text-center mt-4">快递信息</router-link>
        </nav>
      </div>
      <div class="col-8">
         <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
  background: #007bff;
   color: #fff;
   text-decoration: none;
   border-radius: 5px;
}
</style>
