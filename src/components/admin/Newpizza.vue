<template>
  <div id="Newpizza" class=" mt-5">
    <h3 class="text-light bg-warning bordr text-center">添加新披萨</h3>
    <div class="err">
       <span class="text-left mt-4 text-danger" v-show="flag==1">{{msg}}</span>
    </div>
    <form>
    <div class="form-group row mt-2">
    <label for="colFormLabelSm" class="col-2 col-form-label col-form-label ext-right">披萨品种：</label>
    <div class="col-10">
      <input type="email" class="form-control form-control" id="colFormLabelSm" placeholder="请输入披萨种类" v-model="newpizza.name">
    </div>
    </div>
    <div class="form-group row mt-5">
    <label for="colFormLabelSm" class="col-2 col-form-label col-form-label text-right">商品描述：</label>
    <div class="col-10">
      <input type="email" class="form-control form-control" id="colFormLabelSm1" placeholder="请输入商品描述" v-model="newpizza.miaoshu">
    </div>
    </div>
    <h4 class="mt-3 text-left">尺寸价格</h4>

  <div class="form-row mt-3">
    <div class="form-group col-6 row">
      <label for="inputState" class="col-3 col-form-label col-form-label">尺寸：</label>
      <div class="col-9">
          <select id="inputState" class="form-control" v-model="newpizza.sizes[0].size">
            <option selected></option>
            <option>8寸</option>
            <option>10寸</option>
            <option>12寸</option>
            <option>14寸</option>
          </select>
      </div>
    </div>

    <div class="form-group col-6 row">
      <label for="inputState" class="col-3 col-form-label col-form-label">价格：</label>
      <div class="col-9">
           <input type="text" class="form-control" id="inputZip1" v-model="newpizza.sizes[0].price">
       </div>
      </div>
    </div>

  <div class="form-row mt-3">
    <div class="form-group col-6 row">
      <label for="inputState" class="col-3 col-form-label col-form-label ">尺寸：</label>
      <div class="col-9">
          <select id="inputState" class="form-control" v-model="newpizza.sizes[1].size">
            <option selected ></option>
            <option>8寸</option>
            <option>10寸</option>
            <option>12寸</option>
            <option>14寸</option>
          </select>
      </div>
    </div>

    <div class="form-group col-6 row">
      <label for="inputState" class="col-3 col-form-label col-form-label ">价格：</label>
      <div class="col-9">
           <input type="text" class="form-control" id="inputZip1" v-model="newpizza.sizes[1].price">
       </div>
      </div>
  </div>
  <button  class="btn btn-primary btn-block" @click.prevent="addpizza">添加披萨</button>
</form>
  </div>
</template>

<script>
 name:'Newpizza'
 import axios from 'axios'
  export default {
    data(){
      return{
        newpizza:{
          name:'',
          miaoshu:'',
          sizes:[{size:'',price:''},{size:'',price:''}]
        },
        flag:'',
        msg:''
      }
    },
    methods:{

      addpizza(){
        var formData = {
          name:this.newpizza.name,
          miaoshu:this.newpizza.miaoshu,
          sizes:[{size:this.newpizza.sizes[0].size,price:this.newpizza.sizes[0].price},{size:this.newpizza.sizes[1].size,price:this.newpizza.sizes[1].price}]
        }
         console.log(this.newpizza.sizes[0].size)
         console.log(this.newpizza.sizes[1].size)
        if(this.newpizza.name==''){
          this.flag=1
          this.msg='您未输入品类，请输入品类'
        }else if(this.newpizza.miaoshu==''){
          this.flag=1
          this.msg='您未输入描述，请输入描述'
        }else if(this.newpizza.sizes[0].size==''){
          this.flag=1
          this.msg='您未选择尺寸，请选择尺寸'
        }else if(this.newpizza.sizes[0].price==''){
          this.flag=1
          this.msg='您未输入价格，请输入价格'
        }else if(this.newpizza.sizes[1].size==''){
          this.flag=1
          this.msg='您未选择尺寸，请选择尺寸'
        }else if(this.newpizza.sizes[1].price==''){
          this.flag=1
          this.msg='您未输入价格，请输入价格'
        }else{
          this.flag='',
          axios.post('/LHY-pizza.json',formData)
        .then(res=>{
          console.log(res.data)
          // location.reload()
          formData.id=res.data.name
          this.$store.commit('pushmenuItem',formData)
        })
          this.newpizza={
          name:'',
          miaoshu:'',
          sizes:[{size:'',price:''},{size:'',price:''}]
          }
        }
      }
    }

  }
</script>

<style scoped>
.bordr{border-radius: 0.5rem;}
.err{height: 2rem !important;}
</style>
