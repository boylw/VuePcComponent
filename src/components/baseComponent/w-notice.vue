<template>
  <div>
    <div class="overall">
      <div class="notice-dialog" v-if="showNoticeNew">
        <div class="notice-box">
          <div class="notice-box-h">
            <span>弹窗将在 {{timeClose}} 秒后关闭</span>
            <i class="notice-h-close" @click="closeNoticeNow"></i>
          </div>
          <div class="notice-content">{{content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "w-notice",
  props: {
    duration: {
      defaultValue: 2
    },
    content: {
      required: true
    }
  },
  data() {
    let time = this.duration;
    return {
      showNoticeNew: false,
      timeClose: time
    };
  },
  methods: {
    closeNoticeNew() {
      this.timer = setInterval(() => {
          this.timerOut();
      }, 1000);
    },
    initNewType() {
      this.showNoticeNew = true; // new 的时候进行状态更改,其他时间都不管
    },
    timerOut () {
        --this.timeClose;
        if (this.timeClose == 0) {
            this.showNoticeNew = false;
             clearInterval(this.timer);
             this.timeClose = this.duration
        }
    },
    closeNoticeNow() {
        this.showNoticeNew = false;
        clearInterval(this.timer);
        this.timeClose = this.duration;
    }
  }
};
</script>

<style lang="scss" scoped>
.notice-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 1000;
  .notice-box {
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
    .notice-box-h {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text_color_3);
      height: 58px;
      padding: 20px;
      border-bottom: 1px solid var(--line_color);
      box-sizing: border-box;
      position: relative;
      .notice-h-close {
        width: 18px;
        height: 18px;
        cursor: pointer;
        background: url("../../assets/images/spritis-s.png") no-repeat 0 -94px;
      }
    }
    .notice-content {
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