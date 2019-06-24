import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 一级路由
import Home from '../components/Home'
import Admin from '../components/Admin'
import Menu from '../components/Menu'
import Longin from '../components/Longin'
import Regester from '../components/Regester'
import About from '../components/About'
import Position from '../components/Position'
// 二级路由
import Activity from '../components/about/Activity'
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import Order from '../components/about/Order'
import Newpizza from '../components/admin/Newpizza'
import Newmenu from '../components/admin/Newmenu'
// 三级路由
import Address from '../components/about/contact/Address'
import Person from '../components/about/contact/Person'
import Tel from '../components/about/contact/Tel'

import Seccess from '../components/Seccess'
import Inquire from '../components/Inquire'
import Logistics from '../components/Logistics'


export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/about',
      name:'About',
      component:About,
      redirect:'/about/act',
      children:[
        {
          path:'/about/act',
          name:'Activity',
          component:Activity
        },
        {
          path:'/about/cont',
          name:'Contact',
          component:Contact,
          redirect:'/about/person',
          children:[
            {
              path:'/about/addr',
              name:'Address',
              component:Address
            },
            {
              path:'/about/person',
              name:'Person',
              component:Person
            },
            {
              path:'/about/tel',
              name:'Tel',
              component:Tel
            }
          ]
        },
        {
          path:'/about/deli',
          name:'Delivery',
          component:Delivery
        },
        {
          path:'/about/order',
          name:'Order',
          component:Order
        },
      ]
    },
    {
      path:'/longin',
      name:'Longin',
      component:Longin
    },
    {
      path:'/regester',
      name:'Regester',
      component:Regester
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      // beforeEnter:(to, from, next) => {
      //   if(localStorage.getItem('loginUser')=='lihuaiyu@qq.com'){
      //     next()
      //   }else{
      //     alert('对不起您没有管理权限')
      //   }
      // },
      children:[
        {
          path:'/pizza',
          name:'Newpizza',
          component:Newpizza
        },
        {
          path:'/newmenu',
          name:'Newmenu',
          component:Newmenu
        }
      ]
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu
    },
    {
      path:'/about/sec',
      name:'Seccess',
      component:Seccess
    },
    {
      path:'/in',
      name:'Inquire',
      component:Inquire
    },
    {
      path:'/about/stics',
      name:'Logistics',
      component:Logistics
    },
    {
      path:'/position',
      name:'Position',
      component:Position
    }
  ],

  // mode:'history'
  base:'/community/'
})
