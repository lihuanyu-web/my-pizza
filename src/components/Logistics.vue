<template>
  <div id="Logistics" class="container-fluid">
    <div class="row">
        <img src="../../static/banner1.jpg" class="img-fluid col-12 max-width: 100% height: auto" alt="Responsive image">
    </div>
    <div class="row">
    <div class="col-2">
      <div class="form-group mt-5">
        <label for="exampleFormControlTextarea1">快递查询</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
       <button type="button" class="btn btn-success">查询</button>
       <div class="card mt-5" style="width: 13rem;">
       <img class="card-img-top" src="../../static/sto_weixin.jpg" alt="Card image cap">
       <div class="card-body">
       <p class="card-text">关注申通微信公众平台随时随地，寄件查询</p>
  </div>
</div>
    </div>
      <div class="col-8">
        <ul class="list-group mt-5">
          <li class="list-group-item pai">
            <div class="card text-white bg-secondary  ">
              <div class="card-header">物流状态</div>
              <div class="card-body">
              <h5 class="card-title">物流单号：6611696628020</h5>
              <p class="card-text">尊敬的客户：您的快件 6611696628020 已到达 北京市！</p>
            </div>
        </div>
          </li>
          <li class="list-group-item list-group-item-primary">
            <span>2019-05-29-星期三</span>
            <span></span>
          </li>
          <li class="list-group-item list-group-item-secondary text-danger">
            <span>07:48:41</span>
            <span class="iconfont icon-paijian">北京朝阳康城公司(010-53516690)-业务员胡宪勇(15011355591)-派件中 </span>
          </li>
          <li class="list-group-item list-group-item-warning" v-for="(wuliu,index) in wulius" :key="index">
            <span>{{wuliu.time}}</span>
            <span class="iconfont icon-wuliu">{{wuliu.text}} </span>
          </li>
        </ul>
      </div>
      <div class="col-2">
        <img src="../../static/w1.png" alt="..." class="img-thumbnail mt-5">
        <img src="../../static/w2.png" alt="..." class="img-thumbnail">
        <img src="../../static/w3.png" alt="..." class="img-thumbnail">
      </div>
    </div>
  </div>
</template>

<script>
name:'Logistics'
  export default {
    data(){
      return{
        wulius:[
          {time:'07:03:41',text:' 北京转运中心-已发往-北京市内分拨中心'},
          {time:'00:12:15',text:'已到达-北京转运中心'},
          {time:'2019-05-27-星期一',text:''},
          {time:'05:30:42',text:'广东深圳转运中心-已发往-北京转运中心'},
          {time:'05:16:25',text:'广东深圳福田转运中心-已发往-广东深圳转运中心'},
          {time:'02:57:10',text:'已到达-广东深圳转运中心'},
          {time:'02:30:58',text:'已到达-广东深圳福田转运中心'},
          {time:'2019-05-26-星期日',text:''},
          {time:'22:46:32',text:'华南市场部六十部(0755-82903888)-HQ华强南马竟杰(0755-61860999)-已收件'},
        ]
      }
    }
  }
</script>

<style scoped>
.pai{padding: 0;}
</style>
