<template>
    <div>
        <HomeHeaderComponent/>
        <router-view></router-view>
        <footerComponent></footerComponent>
    </div>

</template>

<script>

import HomeHeaderComponent from "../components/Home_Header.vue";
import footerComponent  from "../components/footer.vue";
export default {
  name: "HomeLayout",
  components: {
    HomeHeaderComponent,
    footerComponent,
  },
};
</script>

<style>

</style>