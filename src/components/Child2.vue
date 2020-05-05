<template>
  <div class="border">
    <span>Child2</span>
    <div>
      <Button v-bind:label="wiad" @click="powiedzRodzicowi('Hej')"></Button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['wiad'],
  methods: {
    powiedzRodzicowi(tekst) {
      this.$emit('halo', 'Dzień dobry')
    }
  }
}
</script>


