<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>

import Register from "./components/Conversor.vue";


export default {
  name: "App",
  components: {
    Register
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
