<template>
 <div>
 <!-- <HomeHeaderComponent></HomeHeaderComponent> -->
<headerComponent></headerComponent>
<router-view></router-view>
  <footerComponent></footerComponent>
 </div>
  
</template>

<script>

import headerComponent from "./components/Header.vue";

import footerComponent from "./components/footer.vue";
// import HomeHeaderComponent from "./components/Home_Header.vue";

export default {
  name: 'App',
  components: {
    headerComponent,
    footerComponent,
    // HomeHeaderComponent
  },
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
