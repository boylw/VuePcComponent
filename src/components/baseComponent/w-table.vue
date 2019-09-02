<template>
  <table class="w-table">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: "w-table",
  provide() {
    return {
      table: this
    };
  },
  props: {
    tableData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.w-table {
  width: 100%;
  border-collapse: collapse;
  position: relative;
  border-spacing: 0;
}
</style>