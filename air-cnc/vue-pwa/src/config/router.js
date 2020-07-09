import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {path:'/', name:'Login', component:Login},
  {path:'/list', name:'List', component:() => import(/* webpackChunkName:"list" */'../views/List')},
  {path:'/book/:spotId', name:'Book', props:true, component:() => import(/* webpackChunkName:"book" */'../views/Book')}
]

const router = new VueRouter({mode:'history', base:process.env.BASE_URL, routes})

export default router
