<template>
  <div class="w-header">
    <div class="w-header-logo">有条企服后台</div>
    <div class="w-header-frame">
      <transition-group tag="ul" class="header-frame-group">
        <li
          :class="['header-frame-item',selectId == item.id ? 'active-item' : '']"
          v-for="item in frameLise"
          :key="item.id"
          @click="changeFrameItem(item.id)"
        >{{item.value}}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      selectId: 1,
      frameLise: [
        {
          id: 1,
          value: "公用组件"
        },
        {
          id: 2,
          value: "公用组件2"
        }
      ]
    };
  },
  methods: {
      ...mapActions(['updateFrameId']),
    changeFrameItem(id) {
      this.selectId = id;
      console.log('====================================');
      console.log('我选择了header的id:' + id);
      console.log('====================================');
      this.updateFrameId(id);
      console.log('====================================');
      console.log(this.updateFrameId);
      console.log('====================================');
    }
  }
};
</script>

<style lang="scss" scoped>
.w-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: $primary01;
  font-family: "微软雅黑";
  box-sizing: border-box;
  z-index: 999;
  .w-header-logo {
    width: 220px;
    height: 100%;
    font-size: 20px;
    color: $txt-primaryT;
    background: transparent;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-weight: bold;
    margin-left: 20px;
  }
  .w-header-frame {
    position: absolute;
    left: 220px;
    right: 0;
    top: 0;
    height: 100%;
    margin-left: 40px;
    box-sizing: border-box;
    .header-frame-group {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      .header-frame-item {
        position: relative;
        font-size: 16px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        color: $txt-primaryT;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          font-weight: 600;
        }
      }
      .active-item {
        font-weight: bold;
        &::before {
          content: "";
          position: absolute;
          top: 52px;
          left: 50%;
          margin-left: -8px;
          border-top: 0;
          border-bottom: 8px solid $txt-primaryT;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          opacity: 1;
        }
      }
    }
  }
}
</style>