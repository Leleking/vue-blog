// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './router/routes.js'
import store from './store.js'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    if(JSON.parse(window.localStorage.getItem('authUser'))){
  const authUser = JSON.parse(window.localStorage.getItem('authUser'))
  if(authUser && authUser.access_token){
    console.log('we have permission')
    next()
  }
}else{
  console.log('we have permission')
  next({name:'login'})
}
  }

  next()
 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h=> h(App)
})
