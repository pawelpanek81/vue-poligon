<template>
  <div id="app">
    <div class="p-grid">
	    <div class="p-col-6 p-offset-3">
        <Parent/>
      </div>
    </div>
  </div>
</template>

<script>
import Parent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    Parent
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  background-color: rgb(3, 103, 112);
  color: white;
  font-size: 16px;
}
</style>
