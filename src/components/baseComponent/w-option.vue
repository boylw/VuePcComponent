<template>
  <div class="w-option">
    <div class="w-option-wrap">
      <ul class="w-option-ul">
        <li v-for="item in options" :key="item.id" class="w-option-li" @click="selectHandler({id:item.id,value:item.label})">
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["select"],
  props: {
    options: {
      required: true,
      default: []
    }
  },
  methods: {
      selectHandler(item) {
        //让它的父亲发起改变事件
        this.select.changeSelect(item);
      }
  },
};
</script>

<style lang="scss">
.w-option {
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 5px 0;
  .w-option-wrap {
    height: 100%;
    .w-option-ul {
      list-style: none;
      padding: 6px 0;
      margin: 0;
      box-sizing: border-box;
      .w-option-li {
        font-size: 14px;
        padding: 0 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          background-color: #f5f7fa;
        }
      }
    }
  }
}
</style>