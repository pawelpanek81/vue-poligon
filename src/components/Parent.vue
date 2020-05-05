<template>
  <div class="border">
    <span>Parent</span>
    <child1 :msg="wiadomosc" @przekaz="alertFoo($event)"></child1>
  </div>
</template>

<script>
import Child1 from './Child1.vue'

export default {
  name: 'Parent',
  components: {
    Child1
  },
  data() {
    return {
      wiadomosc: 'Zrób to'
    }
  },
  methods: {  
    alertFoo(msg) {
      alert(msg);
    }
  }
}
</script>

<style>
  .border {
    border-style: solid;
    border-width: 1px;
    margin: 30px;
  }
</style>