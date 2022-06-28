<template>
  <div>template</div>
  <HelloWorld msg="222" />
  <img class="div" src="./images/test.png" alt="" />
  <img class="ignore-test" src="./images/test.png" alt="" />
  <div class="tw-text-xs tw-w-[4px]">21321</div>
</template>

<script lang="ts" setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  }
</script>

<style scoped lang="less">
  .div {
    width: 800px;
  }

  .ignore-test {
    width: 800px;
  }
</style>
