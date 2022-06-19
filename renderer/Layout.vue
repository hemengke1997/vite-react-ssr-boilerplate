<template>
  <div class="layout">
    this is layout
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  console.log('this is layout')
</script>

<style scoped>
  .layout {
    display: flex;
  }

  .main {
    color: red;
  }
</style>
