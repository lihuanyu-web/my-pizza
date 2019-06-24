<template>
  <div id="Position">

    <div class="container-fluid bg1">
      <div class="container bg2">
        <div class="row">
          <div class="col-12">
            <div class="mt-4">当前城市： <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="p ml-4">切换城市</span><city-selector  field="city" placeholder="北京市" :city-list="cityList" v-model="cityId" class="city-list"></city-selector></div>
            <div class="guanjian mt-4">餐厅关键字：<input type="text" placeholder="输入餐厅地址或餐厅名称" class="serch" v-model="info"> <button  @click="serchmap"></button></div>
            <div class="list"><span>旅游购物游乐场</span><span>交通枢纽</span><span>早餐</span><span>礼品卡</span><span>支付宝</span></div>
            <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
          </div>
        </div>
          <!-- 页面内容地图 -->
        <div class="container bg2 mt-3 map">
          <div class="row">
            <div class="col-4">
              <div id="panel" class="mt-5"></div>
            </div>
            <div class="col-8">
              <ul class="scroll">
                <li class="one">热门活动</li>

                  <li class="two1">
                     <transition name="fade">
                     <div  v-show="flag==1"><span class="h3">·</span>{{textArr1[0]}}</div>
                      </transition>
                    </li>
                  <li class="two1">
                    <transition name="fade">
                    <div  v-show="flag==2"><span class="h3">·</span>{{textArr1[1]}}</div>
                    </transition>
                    </li>

                <li class="two2">
                     <transition name="fade">
                     <div  v-show="flag==1"><span class="h3">·</span>{{textArr2[0]}}</div>
                      </transition>
                    </li>
                  <li class="two2">
                    <transition name="fade">
                    <div v-show="flag==2"><span class="h3">·</span>{{textArr2[1]}}</div>
                    </transition>
                    </li>
              </ul>
              <div id="container" class="mt-5 container" ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {citySelector} from "vue2-city-selector";
import cityList from 'china-city-data';
import Vue from 'vue';
name:'Position'
  export default {
    data(){
      return{
        info:'',
        textArr1:['必胜客六一季>>','必胜客六一季>>'],
        textArr2:['必胜客下午茶>>','必胜客下午茶>>'],
        flag:1,
        cityId: '',
        cityname: '',
        cityList
      }
    },
    watch:{
      cityId(){

        console.log(typeof this.cityList)
        console.log(this.cityId)
        if(this.cityId==110100 || this.cityId==120100 || this.cityId==310100 || this.cityId==500100){
          var id = this.cityId.replace(/100$/,'000')
        }else{
          var id = this.cityId
        }
        this.placeSearch.setCity(id)
        this.serchmap()
      }
    },
    components: {
        citySelector
    },
    mounted(){
      this.getmap()
      this.run()
    },
    methods:{
      getmap(){
        var that =this
        var map = new AMap.Map('container', {
        zoom:11,//级别
        center: [116.560369,39.86927],//中心点坐标
        viewMode:'3D',//使用3D视图
          pitch: 60,
        rotation: -35,
         // 隐藏默认楼块
        features: ['bg', 'road', 'point'],
        mapStyle: 'amap://styles/light',

         layers: [
            new AMap.TileLayer(),//高德默认标准图层
            // 卫星
            new AMap.TileLayer.Satellite(),
            // 路网
            new AMap.TileLayer.RoadNet(),
             new AMap.TileLayer.Satellite(),
            // 楼块图层
            new AMap.Buildings({
                zooms: [16, 18],
                zIndex: 10,
                heightFactor: 2//2倍于默认高度，3D下有效
            })

        ],

       });
       AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        that. placeSearch = new AMap.PlaceSearch({
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            city: "010", // 兴趣点城市
            citylimit: false,  //是否强制限制在设置的城市内搜索
            map: map, // 展现结果的地图实例
            panel: "panel", // 结果列表将在此容器中进行展示。
            autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        that.placeSearch.search('必胜客');
    });

      AMap.plugin(['AMap.ToolBar','AMap.Driving','AMap.Autocomplete', 'AMap.ControlBar','AMap.MapType'],function(){//异步同时加载多个插件
      var toolbar = new AMap.ToolBar();
      map.addControl(toolbar);
      var driving = new AMap.Driving();//驾车路线规划
      driving.search(/*参数*/)
      // 添加 3D 罗盘控制
        map.addControl(new AMap.ControlBar());

        // mapType= new AMap.MapType({defaultType:2,showRoad:true});
        // mapObj.addControl(mapType);
        map.addControl(new AMap.MapType({
           position: 'lb'
        }));
  });
   AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {


        //图层切换控件
        map.addControl(new BasicControl.LayerSwitcher({
            position: 'rb'
        }));
    });
  },

    serchmap(value){

        this.placeSearch.search(this.info);
    },
    run(){
    var  timer1 = setInterval(()=>{
           this.flag = Math.ceil(Math.random() * 2)
      },1000)
    },
    },
  }
</script>

<style scoped>
.bg1{background-color: #fff1d7;}
.bg2{background: #fff8ed;}
.serch{width: 15rem; height: 2rem; border-radius: 2rem;border:1px solid #834418;vertical-align: middle;margin-top: 0.5rem;color: #834418;outline:none;padding-left: 1rem; font-size: 12px;}
.guanjian button{width: 10rem;height: 2.4rem;display: inline-block;background: url(../../static/refer_btn.png) no-repeat;vertical-align: -1.2rem;cursor: pointer;outline: none;border: none;}
.list span{font-size: 12px;color: #834418;margin-left: 2rem;cursor: pointer;}
.list{margin-left: 4rem;}
.list span:hover{background: crimson;color: #fff;}
.p{font-size: 12px;cursor: pointer;}
.mt-4{color:  #834418;}
.scroll{position: relative; height:3rem;}
.scroll li{float: left;margin-right: 5rem;}
.one,li{list-style: none; vertical-align: 100px;}
.scroll li span{vertical-align: -0.3rem;}
.two1,.two2{font-size: 12px}
#container {
          width: 45rem;
          height: 30rem;
        }
#panel{width: 20rem;height: 30rem; }
.map{height: 30rem;}
.two1{position: absolute;left: 12rem;}
.two2{position: absolute;left: 24rem;}
.fade-enter-active,.fade-leave-active{
     transition: all 0.5s linear;
    }
.fade-enter{
     opacity: 0;
     transform: translateY(1rem)
}
.fade-leave-to{
      opacity: 0;
      transform: translateY(-1rem)
}
.city{width: 100%;height: 100%;background: rgba(0, 0, 0, .5);z-index: 9999;position: fixed;top: 0;left: 0;}
.citylist{width: 40rem;height: 20rem;background: #ffffff;position: absolute;top: 50%;left: 50%;margin-top: -10rem;margin-left: -20rem;}
.city-list{width: 10rem;margin-top: 2rem;margin-left: 1rem;display: inline-block; position: absolute;top: -10px;left: 136px;}
.box-city{margin-left: 1rem;}
.vcp-panel{width: 40rem;height: 20rem;overflow: hidden;}

</style>
