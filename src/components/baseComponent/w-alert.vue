<template>
<div>
    <div class="overall">
        <div class="alert-dialog" v-if="showAlertNew">
            <div class="alert-box">
            <div class="alert-box-h">
                <span>{{title}}</span>
                <i class="alert-h-close" @click="closeAlterNew"></i>
            </div>
            <div class="alert-content">{{content}}</div>
            <w-button type="default" @click="closeAlterNew">确定</w-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "w-alert",
  props: {
    title: {
      defaultValue: "提示"
    },
    content: {
      required: true
    }
  },
  data() {
    return {
        showAlertNew: false
    };
  },
  methods: {
      closeAlterNew() {
          this.showAlertNew = false
      },
      initNewType () {
          this.showAlertNew = true // new 的时候进行状态更改
      }
  }
};

</script>

<style lang="scss" scoped>
.alert-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 1000;
  .alert-box {
    position: absolute;
    width: 400px;
    height: auto;
    text-align: center;
    top: 200px;
    left: 50%;
    margin-left: -200px;
    display: block;
    background: #fff;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    padding-bottom: 40px;
    .alert-box-h {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text_color_3);
      height: 58px;
      padding: 20px;
      border-bottom: 1px solid var(--line_color);
      box-sizing: border-box;
      position: relative;
      .alert-h-close {
        width: 18px;
        height: 18px;
        cursor: pointer;
        background: url("../../assets/images/spritis-s.png") no-repeat 0 -94px;
      }
    }
    .alert-content {
      height: auto;
      padding: 40px;
      text-align: center;
      line-height: 24px;
      color: #333333;
      overflow: hidden;
    }
  }
}
</style>