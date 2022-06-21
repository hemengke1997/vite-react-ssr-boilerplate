<template>
  <QQQQ />
  <HelloWorld msg="this is index" />
  <div>this is index</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import QQQQ from '@/components/QQQQ.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld,
      QQQQ,
    },
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
