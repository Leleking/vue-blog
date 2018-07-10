<template>
  <div id="app">
    <navbar><span v-if="logout" slot="logout">logout</span></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import navbar from  './components/pages/partials/navbar'
export default {
  name: 'App',
  components: {
    HelloWorld,
    navbar
  },
  data(){
    return{
      logout: false
    }
  }
  
}
</script>
