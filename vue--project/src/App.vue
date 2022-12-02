<template>
  <div id="app">
    
    
   
    <headerComponent></headerComponent>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <footerComponent></footerComponent>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import headerComponent from'./components/Header.vue'
import footerComponent from './components/footer.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    headerComponent,
    footerComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
