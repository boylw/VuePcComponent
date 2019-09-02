<template>
  <div class="panel-router">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.panel-router {
  height: 40px;
  margin: 15px 15px;
  padding: 0 0 0 20px;
  line-height: 40px;
  font-size: 14px;
  font-family: "微软雅黑";
  background: #ffffff;
  /* font-weight: bold; */
  border-radius: 4px;
  margin-bottom: 16px;
}
</style>