<template>
  <img alt="Vue logo" src="./images/1.svg" />
  <img alt="Vue xxxx" src="./images/2.svg" />

  <QQQQ />
  <HelloWorld msg="qewqewq-x!!--" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import QQQQ from '@/components/QQQQ.vue'

  console.log('xxx')

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
    margin-top: 60px;
  }
</style>
