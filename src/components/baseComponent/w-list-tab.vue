<template>
  <div class="listTab">
    <div class="tab-header">
      <span
        class="title-item"
        :class="index === currentI? 'active' : ''"
        v-for="(item, index) in tabList"
        :key="index"
        @click="open(index)"
      >
        <span>{{item.name}}</span>

      </span>
    </div>


    <div class="tab-content">
      <slot :name="active"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-list-tab",
  data() {
    return {
      active: this.list[0][this.prop] || 0,
      tabList: this.list,
      runfn: this.fnoptions,
      currentI : 0
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    fnoptions: {
      type: Array,
      default() {
        return [];
      }
    },
    prop: {
      default: 'id'
    }
  },
  methods: {
    open(index) {
      this.currentI = index;
      this.active = this.list[index][this.prop];
      if (this.runfn[index]) {
        this.runfn[index].runFn();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.listTab {
  background: #ffffff;
  .tab-header {
    height: 50px;
    border-bottom: 1px solid #dddddd;
    .title-item {
      position: relative;
      margin-right: 5px;
      float: left;
      width: 140px;
      height: 40px;
      border-radius: 4px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
      color: #8093a1;
      span {
        font-size: 16px;
        display: inline-block;
        border-bottom: 2px solid;
        border-color: #ffffff;
        line-height: 48px;
        color: #b2b2b2;
      }
    }
    .title-item.active {
      background-color: white;
      border-radius: 4px 4px 0 0;
      color: #333333;
      span{
        color: $primary01;
        border-color: $primary01;
      }
    }
  }
  .tab-content{
    padding: 0 20px;
  }
}
</style>