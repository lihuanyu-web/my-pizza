<template>
  <div id="Home" class="container-fluid pl-0 pr-0 wow fadeInUp" data-wow-duration =“2s”>
    <div class="swiper-container" id="swiper0">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../static/l1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../static/l2.png" alt=""></div>
          <div class="swiper-slide"><img src="../../static/l3.png" alt=""></div>
          <div class="swiper-slide"><img src="../../static/l4.png" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    </div>
    <div class="box text-center p-4 wow  rotateIn" data-wow-duration ='2s' data-wow-offset ='10' data-wow-iteration="1">
      <img src="../assets/logo.png" alt="logo" ><br><br>
      <span class="text-white h4 mt-5">欢迎来到木屋披萨</span><br>
      <button type="button" class="btn btn-danger btn-block mt-3" @click="tiaoz">立即点餐</button>
    </div>
    <div class="container text-center">
      <div class="row mt-5">
        <p class="col-12 wow  bounceInUp" data-wow-duration ='2s' data-wow-offset ='10'><img src="../../static/news.png" class="wih" ></p>
      </div>
<!-- 新闻轮播 -->
    <div class="row mt-5 ">
      <div class="col-5  wow  slideInLeft"  data-wow-duration ='2s' data-wow-offset ='10'>
        <div class="text-left big-box">
          <div class="swiper-container" id="swiper1">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(newimg,index) in newimgs" :key="index">
                    <div class="card box1" style="width: 18rem;">
                       <img class="card-img-top" :src="newimg.src" alt="Card image cap">
                       <div class="card-body">
                       <h5 class="card-title text-danger">{{newimg.name}}</h5>
                       <p class="card-text">{{newimg.content}}</p>
                       <a href="#" class="btn btn-primary">查看详情</a>
                     </div>
                    </div>
                  </div>
              </div>
              </div>
              <div class="bg-box"></div>
               <div class="swiper-pagination page"></div>
               <div class="h5 text-white num">0{{id}}</div>
          </div>

      </div>

<!-- 右侧新闻 -->
      <div class="col-7 wow  slideInRight" ta-wow-duration ='2s' data-wow-offset ='10'>
        <h3 class="text-left">2019年度媒体报道</h3>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-left mt-2" v-for="(list,index) in newslist" :key="index">
            <i><img :src="list.src"  alt=""></i><span class="neir">{{list.name}}</span>
          <span class="badge badge-primary badge-pill">{{list.num}}</span>
          </li>
      </ul>
      </div>
     </div>
          <div class="row mt-5">
        <p class="col-12 wow  bounceInUp" data-wow-duration ='2s' data-wow-offset ='10'><img src="../../static/his.png" class="wih" ></p>
         </div>
          <Order class="order"></Order>
          <div class="row mt-5">
        <p class="col-12 wow  bounceInUp" data-wow-duration ='2s' data-wow-offset ='10'><img src="../../static/hd.png" class="wih" ></p>
         </div>
          <Activity class="Activity"></Activity>
          <div class="row mt-5">
        <p class="col-12 wow  bounceInUp" data-wow-duration ='2s' data-wow-offset ='10'><img src="../../static/kuidi.png" class="wih" ></p>
         </div>
          <Delivery class="Delivery"></Delivery>
    </div>
    <div class="card text-white bg-danger fanhui" style="max-width: 5rem;" id="back">
        <div class="card-header text-center "><span class=" h2 iconfont icon-fanhuidingbu"></span></div>
        <div class="card-body">
        <p class="card-title ">返回顶部</p>
     </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import "../assets/dist/css/swiper.min.css"
import Order from './about/Order'
import Activity from './about/Activity'
import Delivery from './about/Delivery'
export default {
  name: 'Home',
  data () {
    return {
      id:1,
      newimgs:[
        {src:require('../../static/n2.jpg'),name:'专业食品安全检测团队进驻点评 从此舌尖安全有他们',content:'外卖订餐平台对合作商户的食品安全监察力度再次加码。近日'},
        {src:require('../../static/n3.jpg'),name:'舌尖上的电影：《流行世界的美食》之披萨',content:'《流行世界的美食》是BBC制作的美食系列纪录片，豆瓣评分8.2。'},
        {src:require('../../static/n4.jpg'),name:'享尼依格罗意式美食，赏世界冠军披萨魅力',content:'大家好！这里是《素素这周吃了啥》特别福利第二期招募'},
        {src:require('../../static/n5.jpg'),name:'大胃王直播吃82寸大披萨，吃完网友发现猫腻：娱乐果然不能太认真',content:'如今随着网络越来越发达，催生出了许多新鲜的职业。'},
        {src:require('../../static/n6.jpg'),name:'必胜客曾是披萨界的扛把子，为何现在生意惨淡？网友：自己作的',content:'随着世界文化大交流，国内外的饮食文化也'},
        {src:require('../../static/n7.jpg'),name:'姑娘一次吃完八十寸大的披萨，看到桌子上的杯子，难怪她能吃完',content:'俗话说的好，一口吃不成胖子，但是对于大胃王来说'}
      ],
      newslist:[
        {src:require('../../static/number1.png'),name:'保障骑手安心无忧送餐路 美团外卖首发《骑手生活安全...',num:'1'},
        {src:require('../../static/number2.png'),name:'MINISO名创优品正式入驻美团闪购 时尚单品30分钟送达',num:'7'},
        {src:require('../../static/number3.png'),name:'专业食品安全检测团队进驻美团点评 从此舌尖安全有他',num:'9'},
        {src:require('../../static/number4.png'),name:'Trustdata发布2018上半年外卖份额数据 美团饿了么百...',num:'11'},
        {src:require('../../static/number5.png'),name:'美团上线闪购业务 以“快”破局助力零售升级检测团队进',num:'22'},
        {src:require('../../static/number6.png'),name:'美团城市新青年 外卖骑手正能量图鉴全部报道零售升半',num:'15'}
      ],

    }
  },
  components:{
    Order,
    Activity,
    Delivery
  },
  mounted(){
    this.swiperimg1()
    this.swiperimg2()
},
methods:{
  tiaoz(){
    this.$router.push('/admin')
  },
  swiperimg1(){
    var swiper0 = new Swiper('#swiper0',{
        loop: true,
        effect : 'fade',
       // 如果需要分页器
      pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },

    })
    swiper0.el.onmouseover = function(){
     swiper0.autoplay.stop();
    },
    swiper0.el.onmouseout = function(){
     swiper0.autoplay.start();
    }
  },
  swiperimg2(){
    var that=this
    var swiper1 = new Swiper('#swiper1',{
        //  direction : 'vertical',
        effect : 'cube',
         loop: true,

       // 如果需要分页器
      pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
    on:{
      slideChange:function(){
        //console.log(this.activeIndex)
        var ind = this.activeIndex
        if(ind>6){ind=1}
        if(ind<1){ind=6}
        that.id=ind
        console.log(that.id)
      }
    }
    })
  },
}
}
var  wow = new WOW({
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
 })
  wow.init();
  // window.onload = function(){
  //   var Back = document.getElementById('back')
  //   window.onscroll = function(){
  //     var maxtop = document.documentElement.scrollTop
  //     console.log(maxtop)
  //     if(maxtop>=500){
  //         Back.style.display="block"
  //     }else{
  //       Back.style.display="none"
  //     }
  //     Back.onclick = function(){
  //     document.documentElement.scrollTop=0
  //   }
  //   }
  // }
// new WOW().init();
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .swiper-slide img{height: 100%;} */
/* .swiper-slide{width: 100%;} */
.box{width: 25rem;height: 25rem;background: rgba(10, 218, 233, 0.699);position: absolute;top: 5rem;left: 5rem;z-index: 999;border-radius: 10px;}
.wih{width: 15rem;}
.box1{height: 25rem; width: 10rem; }
.big-box{height: 25rem; width: 18rem;position: relative;}
.bg-box{height: 25rem; width: 18rem; background: orange; position: absolute;top:1.8rem;left: 2rem;border-radius: 0.5rem;}
.page{width: 8px; position: absolute;top: 16rem; right: -1rem;}
i img{width: 1.8rem;}
/* .neir{margin-left: -8rem;} */
li{border:none;cursor: pointer;}
li:hover{font-size: 1.2rem;font-weight: bold;}
.order{display: flex;}
.fanhui{position: fixed;bottom: 4rem;right: 4rem;cursor: pointer;display: none;}
.num{position: absolute;left: 18.2rem;bottom: 8.5rem;}
</style>
