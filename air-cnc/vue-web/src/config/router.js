import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {path:'/', name:'Home', component:Login},
  {path:'/dashboard/:userId', name:'Dashboard', props:true, component:() => import(/* webpackChunkName:"dashboard" */'../views/Dashboard')},
  {path:'/new/:userId', name:'New', props:true, component:() => import(/* webpackChunkName:"new" */'../views/New')}
]

const router = new VueRouter({mode:'history', base:process.env.BASE_URL, routes})

export default router
