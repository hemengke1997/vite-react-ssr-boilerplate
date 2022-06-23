<template>
  <div class="layout">
    this is layout
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  //
  const ext = '*([a-zA-Z0-9])'

  const x = 'subpage'

  const n = {
    xx: () => import(`../src/pages/${x}/index.page.vue`),
  }
  console.log(n)

  console.log(import.meta.importGlob(['/**/*.page.*([a-zA-Z0-9])']))

  console.log(`this is layout ${Math.random()}`)
</script>

<style scoped>
  .layout {
    display: flex;
  }

  .main {
    color: red;
  }
</style>
