<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  data(){
    return{
      title:'欢迎来到木屋披萨a٩(๑>◡<๑)۶ '
    }
  },
  components:{
    Header
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#city {
    /* opacity: 0; */
    background: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: -63px;;
    top: -3px;
    font-size: 20px;
    color:  #834418;
    border: none;
    cursor: pointer;
}
.vcp-panel{
      position: absolute !important;
    top: 36px !important;
    left: 21px !important;
}
</style>
