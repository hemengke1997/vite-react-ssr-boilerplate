<template>
  <div class="layout">
    this is layout
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
  }

  .main {
    color: red;
  }
</style>
