<template>
  <div id="Inquire" class="container">
    <div id="carouselExampleIndicators" class="carousel slide mt-1 ml-5" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-60" src="'../../static/banner3.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-60" src="../../static/banner4.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-60" src="../../static/banner5.jpg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-60" src="../../static/banner6.jpg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-60" src="../../static/banner7.jpg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-60" src="../../static/banner8.jpg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-60" src="../../static/banner9.jpg" alt="Third slide">
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">上一页</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">下一页</span>
      </a>
    </div>
      <div class="row pl-3">
            <div class="card mt-4 ml-5" style="width: 18rem;" v-for="(obj,index) in objs" :key="index">
            <img class="card-img-top" :src="obj.src" alt="Card image cap">
            <div class="card-body">
            <p class="card-text">{{obj.name}}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center"><span class="text-white bg-dark p-2 align-middle liuyi">六一特价：</span><span class="text-danger h4 ml-2">{{obj.price}}</span></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$('.carousel').carousel({
  interval: 200
})
name: "Inquire";
export default {
      data(){
        return{
          objs:[
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
            {src:'https://img.4008123123.com/resource/VersionP/phdi/339_297643.jpg',name:'韩式烤肉比萨',price:'38.00'},
          ]
        }
      }

    };
</script>

<style scoped>
/* .active{background: black} */
/* img{margin-right: -2rem;} */
.liuyi{border-radius: 8px;}
</style>
