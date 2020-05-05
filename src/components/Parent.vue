<template>
  <div id="parent">
    <h1>{{ msg }}</h1>
    <child-foo></child-foo>
  </div>
</template>

<script>
import ChildComponent from './Child.vue'

export default {
  name: 'HelloWorld',
  components: {
    childFoo: ChildComponent
  },
  data() {
    return {
      msg: 'Foo bar message'
    }
  
  }
}
</script>

<style scoped>
  #parent {
  }
</style>
