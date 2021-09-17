<template>
  <mytitle :mytitle="setTitle"/>
</template>

<script>
import Mytitle from './components/mytitle.vue'

export default {
  name: 'App',
  data() {
    return {
      setTitle: 'Send from base'
    }
  },
  components: {
    Mytitle,
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
