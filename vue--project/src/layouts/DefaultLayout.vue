<template>
    <div>
      <headerComponent></headerComponent>
      <router-view />
      <footerComponent></footerComponent>
    </div>
  </template>
  
  <script>
  import headerComponent from "../components/Header.vue";
  import footerComponent from "../components/footer.vue";
  export default {
    name: "DefaultLayout",
    components: {
      headerComponent,
      footerComponent,
    },
  };
  </script>

  <style>
</style>