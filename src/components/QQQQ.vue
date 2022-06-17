<template>
  <a>{{ count }}</a>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'QQQQ',

    setup: () => {
      const count = ref(0)
      return { count }
    },
  })
</script>

<style scoped>
  a {
    color: green;
  }
</style>
