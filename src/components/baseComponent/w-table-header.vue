<template>
  <thead class="w-table-header">
    <tr>
      <slot></slot>
    </tr>
  </thead>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.w-table-header {
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  font-size: 14px;
  color: #333333;
  font-weight: bold;
  background: #f2f2f2;
}
</style>