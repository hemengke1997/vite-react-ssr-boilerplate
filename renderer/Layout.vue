<template>
  <div class="layout">
    this is layout
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
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
