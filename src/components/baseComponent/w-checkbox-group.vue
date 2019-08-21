<template>
  <div class="checkbox-group">
    <w-checkbox v-for="(item, index) in checkList" :key="index" :id="item.id" v-model="item.checked">{{item.label}}</w-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    checkList: {
      default: [],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox-group {
    display: inline-flex;
    align-items: center;
}
</style>