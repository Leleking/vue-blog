<template>
  <div id="app">
    
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  
}
</script>
