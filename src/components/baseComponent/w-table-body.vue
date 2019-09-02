<template>
  <tbody class="w-table-body">
    <slot></slot>
    <div v-if="this.table.tableData.length == 0" class="empty-table-div">
      <img src="../../assets/images/list-empty.png" alt class="empty-table">
    </div>
  </tbody>
</template>

<script>
export default {
  inject: ["table"]
};
</script>

<style lang="scss" scoped>
.w-table-body tr {
  height: 50px;
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
.w-table-body tr:nth-child(2n) {
  background-color: #f2f2f2;
}

.empty-table-div {
  width: max-content;
  height: 300px;
  .empty-table {
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -106px;
  }
}
</style>