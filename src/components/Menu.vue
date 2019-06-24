<template>
  <div id="Menu" class="container text-center">
    <div class="row">
      <div class="col-7"><Point :newponint="newponint" @point="receive"></Point></div>
      <div class="col-5"><Shopcart :newshop="newshop"></Shopcart></div>
    </div>
  </div>
</template>

<script>
import Shopcart from './menu/Shopcart'
import Point from './menu/Point'
import axios from 'axios'
export default {
  name: 'Menu',
  data () {
    return {
      newponint:[],
      newshop:[]
    }
  },
  components:{
    Shopcart,
    Point
  },
  mounted(){
    axios.get('/LHY-pizza.json')
    .then(res=>{
      for(let key in res.data){
        this.newponint.push(res.data[key])
      }

      console.log(this.newponint)
    })
  },
  methods:{

    receive(value){
      let Num ={
        name:value.item.name,
        size:value.item1.size,
        price:value.item1.price,
        number:1
      }
    const judge = this.newshop.filter(item=>{
        return item.name===value.item.name && item.size===value.item1.size
      })
      if(judge.length>0){
        console.log('当前商品已存在')
        if(judge[0].number>=10){
          judge[0].number=10
        }else{
          judge[0].number++
        }
      }else{
        this.newshop.push(Num)
      }
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
