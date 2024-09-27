<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
