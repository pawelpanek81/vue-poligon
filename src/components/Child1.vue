<template>
  <div class="border">
    <span>Child1</span>
    <child2 :wiad="msg" @halo="przekaz($event)"></child2>
  </div>
</template>

<script>
import Child2 from './Child2.vue'

export default {
  name: 'Child1',
  components: {
    Child2
  },
  props: ['msg'],
  methods: {
    przekaz(co) {
      this.$emit('przekaz', co)
    }
  }
}
</script>

