<template>
  <tbody class="w-table-body">
    <slot></slot>
  </tbody>
</template>

<script>
export default {
  inject: ["table"]
};
</script>

<style lang="scss" scoped>
.w-table-body tr {
  height: 40px;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
}

.w-table-body tr:hover {
  background: #e6e6e6;
}

.w-table-body tr td {
  padding: 0 0 0 20px;
  font-size: 14px;
      max-width: 197px;

  p {
    max-width: 500px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap; 
  }
}
</style>