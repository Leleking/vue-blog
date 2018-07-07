import Vue from 'vue'
import App from '../App'
import login from '../components/auth/login'
import Home from '../components/pages/Home'

export const routes = [
    {path:'/login',component:login,name:'login'},
    {path:'/Home',component:Home,name:'Home',meta:{ requiresAuth: true}}
  ]