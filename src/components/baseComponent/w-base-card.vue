<template>
  <div class="base-card">
    <form class="base-form pr">
      <div class="base-panel">通用数据</div>
    </form>
    <div class="Cpanel_statistical_box">
      <div class="Cpanel_each_box">
        <p>总用户数</p>
        <div class="totalNumber">{{totalNumber}}</div>
      </div>
      <div class="Cpanel_line"></div>
      <div class="Cpanel_each_box">
        <p>今日新增用户</p>
        <div class="NewNumber">{{newNumber}}</div>
      </div>
      <div class="Cpanel_line"></div>
      <div class="Cpanel_each_box">
        <p>企业总数</p>
        <div class="totalCompany">{{totalCompany}}</div>
      </div>
      <div class="Cpanel_line"></div>
      <div class="Cpanel_each_box">
        <p>项目总数</p>
        <div class="totalProject">{{totalProject}}</div>
      </div>
      <div class="Cpanel_line"></div>
      <div class="Cpanel_each_box">
        <p>待更进客户</p>
        <div class="customerInto">{{customerInto}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 0
    },
    newNumber: {
      type: Number,
      default: 0
    },
    totalCompany: {
      type: Number,
      default: 0
    },
    totalProject: {
      type: Number,
      default: 0
    },
    customerInto: {
      type: Number,
      default: 0
    },
  },
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
    .Cpanel_each_box {
      text-align: center;
      vertical-align: top;
      display: inline-block;
      width: 320px;
      p {
            font-size: 14px;
      }
      div {
        font-size: 50px;
        @include color($primary01);
        padding-top: 12px;
      }
    }
    .Cpanel_line {
      display: inline-block;
      width: 1px;
      height: 40px;
      background: #dddddd;
      margin-top: 20px;
    }
  }
}
</style>