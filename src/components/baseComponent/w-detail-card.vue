<template>
  <div class="base-card">
    <form class="base-form pr">
      <div class="base-panel">通用数据</div>
    </form>
    <div class="Cpanel_statistical_box">
      <div class="user_img">
        <i class></i>
      </div>
      <div class="Cpanel_each_box user_detail_info">
        <p>{{name}}</p>
        <div class>
          <span class="user_info_number">{{number}}</span>
          <w-button>修改手机号</w-button>
        </div>
      </div>
      <div class="Cpanel_line"></div>
      <div class="Cpanel_each_box">
        <p>对接PM</p>
        <w-select v-model="selectPM.value">
          <w-option :options="selectPM.options"></w-option>
        </w-select>
      </div>
      <div class="Cpanel_line"></div>
      <div class="Cpanel_each_box">
        <p>注册时间</p>
        <div class="registerDate">{{registerDate}}</div>
      </div>
      <div class="Cpanel_line"></div>
      <div class="Cpanel_each_box">
        <p>所属公司</p>
        <div class="enterpriseName">{{enterpriseName}}</div>
      </div>
      <div class="Cpanel_line"></div>
      <div class="Cpanel_each_box">
        <p>项目数</p>
        <div class="projectNum">{{projectNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: 0
    },
    registerDate: {
      type: Number,
      default: 0
    },
    enterpriseName: {
      type: Number,
      default: 0
    },
    projectNum: {
      type: Number,
      default: 0
    },
    selectPM: {
      value: {
        type: String,
        default: ""
      },
      option: {
        type: Array,
        default: [],
        required: true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.base-card {
  padding-bottom: 10px;
  background-color: #ffffff;
  margin: 0 16px;
  margin-bottom: 16px;
  .base-form {
    font-size: 14px;
    color: #333333;
    .base-panel {
      position: relative;
      padding: 15px 10px;
      margin: 20px;
      margin-bottom: 0;
      font-size: 16px;
      color: #333333;
      border-bottom: 1px solid #e7eaec;
      background-color: #ffffff;
    }
  }
  .Cpanel_statistical_box {
    height: 190px;
    font-size: 0;
    padding: 40px 20px 60px 20px;
    box-sizing: border-box;
    .user_img {
      width: 100px;
      display: inline-block;
      i {
        width: 80px;
        height: 80px;
        display: inline-block;
        border-radius: 50%;
        background: url(../../assets/images/text.png) no-repeat center;
        background-size: contain;
      }
    }

    .Cpanel_each_box {
      text-align: center;
      vertical-align: top;
      display: inline-block;
      width: 285px;
      p {
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        padding-bottom: 35px;
      }
      > div {
        font-size: 18px;
        // @include color($primary01);
      }
    }
    .Cpanel_line {
      display: inline-block;
      width: 1px;
      height: 40px;
      background: #dddddd;
      margin-top: 20px;
    }
    .user_detail_info {
      text-align: left;
      width: 330px;
      div {
        display: inline-block;
      }
      div > span {
        line-height: 30px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
      }
      .user_info_number {
        font-size: 14px;
        padding-right: 25px;
      }
    }
  }
}

</style>