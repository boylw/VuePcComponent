<template>
  <div class="overall" v-if="this.$store.state.dialog.showDialog">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overall {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 1000;
}
</style>