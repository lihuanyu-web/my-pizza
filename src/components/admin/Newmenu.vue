<template>
  <div id="Newmenu" class="text-center mt-5">
    <h3 class="text-light bg-success bordr">菜单管理</h3>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">序号</th>
      <th scope="col">品种</th>
      <th scope="col">详情</th>
      <th scope="col">删除</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-cenert" v-for="(menu,index) in newmenu" :key="index">
      <th scope="row" class="align-middle">{{index+1}}</th>
      <td class="align-middle">{{menu.name}}</td>
      <td class="align-middle"><button class="btn btn-success" @click="chakan(index)">查看详情</button></td>
      <td><button  class="btn btn-danger" @click='deletemenu(menu,index)'>删除</button></td>
    </tr>

  </tbody>
</table>
    <div class="box" v-show="flag==false">
      <div class=" xiangqing">
        <div class="img"><img class=" timg" src="../../../static/1.jpg" alt="Card image cap"></div>
        <div class="text">
          <h5>{{name1}}</h5>
          <p>{{text}}</p>
          <h4 class="text-danger">{{price1}}元/{{size1}}</h4>
          <h5><button type="button" class="btn btn-success" @click="dingcan">开始订餐</button></h5>
        </div>
          <div class="tuichu"><svg class="icon" aria-hidden="true" ><use xlink:href="#icon-guanbi"  @click="tuichu"></use></svg></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
 name:'Newmenu'
  export default {
    data(){
      return{
        // newmenu:[]
        flag:true,
        i:'',
        name1:'',
        text:'',
        size1:'',
        price1:''
      }
    },
    mounted(){
      axios.get('/LHY-pizza.json')
        .then(res=>{
          const result =[]
          for(let key in res.data){
            const menu = res.data[key]
            menu.id = key
            result.push(menu)
          }
           this.$store.commit('setmenuItem',result)
        })
    },
    methods:{
      deletemenu(menu,index){
        console.log(menu.id)
        axios.delete('/LHY-pizza/'+ menu.id+'.json')
        .then(res=>{
          // location.reload()
          this.$store.commit('deletIteme',index)
        })
      },
      chakan(i){
        console.log(i)
        console.log(this.newmenu[i].name)
        this.flag=false
        this.name1=this.newmenu[i].name
        this.text=this.newmenu[i].miaoshu
        this.size1=this.newmenu[i].sizes[1].size
        this.price1=this.newmenu[i].sizes[1].price

      },
      tuichu(){
         this.flag=true
      },
      dingcan(){
        this.$router.push('/menu')
      }
    },
    computed:{
      newmenu(){
        return this.$store.getters.getMenuItem
      }
    }

  }

</script>

<style scoped>
.bordr{border-radius: 0.5rem;}
.xiangqing{width: 50rem; height: 26rem; position: absolute;left: 50%;top: 50%;margin-top: -15rem;margin-left: -25rem;z-index: 99; background: #fff;padding-top: 3rem;}
.img{width: 21rem;height: 26rem;float: left; padding: 1rem;}
.timg{width: 20rem;}
.text{width: 27rem;height: 26rem;float: left;padding-right: 2rem;padding-left: 1rem;}
.text h5{text-align: left;margin-top: 1rem; font-weight: bold;}
.text h5 button{padding: 0.5rem 1.5rem;}
.text p{text-align: left;margin-top: 4rem;font-size: 1rem;height: 5rem;}
.text h4{text-align: left;margin-top: 4rem;}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
}
.box{width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: rgba(0, 0, 0, .4);z-index: 9999;}
</style>
