<template>
  <div class="div">
    <a>{{ count }}</a>
  </div>
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

<style scoped lang="less">
  .div {
    a {
      color: red;
    }
  }
</style>
