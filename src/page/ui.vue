<template>
  <div class="w-ui">
    <h3>按钮</h3>
    <div class="section">
      <w-button type="default">登记企业</w-button>

      <span class="mr-40"></span>

      <w-button type="warning">停用企业</w-button>

      <span class="mr-40"></span>

      <w-button type="default">搜索</w-button>

      <span class="mr-40"></span>

      <w-button type="text" disabeled="true">详情</w-button>
    </div>
    <!-- input -->

    <h3>from</h3>
    <div class="section">
      <w-from :model="rulesFrom" :rules="rules" ref="wFrom">
        <w-fromitem label="用户名" prop="name">
          <w-input v-model="rulesFrom.name"></w-input>
        </w-fromitem>

        <w-fromitem label="选择时间" prop="time">
          <w-input v-model="rulesFrom.time" id="dateTest"></w-input>
        </w-fromitem>

        <w-fromitem label="密码" prop="psw">
          <w-input v-model="rulesFrom.psw" type="password"></w-input>
        </w-fromitem>

        <w-fromitem label="头像">
          <w-upload @getFiles="readFiles" multiple="false"></w-upload>
        </w-fromitem>

        <w-fromitem label="数据">{{rulesFrom}}</w-fromitem>

        <w-fromitem>
          <w-button @click="sumbit()">登录</w-button>
        </w-fromitem>
      </w-from>
    </div>

    <!-- 弹窗 -->

    <h3>弹窗</h3>
    <div class="section">
      <!-- 确定弹窗 -->
      <w-button type="default" @click="showAlert">点击我有确定弹窗</w-button>
      <span class="mr-40"></span>
      <!-- 自动消失弹窗 -->
      <w-button type="warning" @click="showNotice">点击我有定时弹窗</w-button>
      <span class="mr-40"></span>
      <!-- 自定义弹窗 -->
      <w-button type="default" @click="showDialog">点击我有自定义弹窗</w-button>
      <w-dialog name="test" :show="show">
        <div class="box">
          <h1>你好测试一下自定义弹窗</h1>
          <w-button type="default" @click="closeDialog">关闭</w-button>
          <span class="mr-40"></span>
          <w-button type="default" @click="submitDialog">确定</w-button>
        </div>
      </w-dialog>
    </div>

    <h3>选框</h3>
    <div class="section">
      <w-checkbox v-model="checked">{{checked}}</w-checkbox>
      <w-checkbox v-model="checked">{{checked}}</w-checkbox>
      <w-checkbox-group :checkList="checkList"></w-checkbox-group>
    </div>

    <h3>下拉选择框 ------ {{select.value}}</h3>
    <div class="section">
      <w-select v-model="select.value">
        <w-option :options="select.options"></w-option>
      </w-select>
    </div>

    <!-- 列表 -->
    <h3>列表</h3>

    <div class="section">
      <w-table :tableData="tableData">
        <w-table-header>
          <w-table-header-item label="date"></w-table-header-item>
          <w-table-header-item label="name"></w-table-header-item>
          <w-table-header-item label="province"></w-table-header-item>
          <w-table-header-item label="city"></w-table-header-item>
          <w-table-header-item label="address"></w-table-header-item>
          <w-table-header-item label="zip"></w-table-header-item>
          <w-table-header-item label="操作"></w-table-header-item>
        </w-table-header>
        <w-table-body>
          <tr v-for="(item,index) in tableData" :key="index+8">
            <td>
              <p>{{ item.date }}</p>
            </td>
            <td>
              <p>{{ item.name }}</p>
            </td>
            <td>
              <p>{{ item.province }}</p>
            </td>
            <td>
              <p>{{ item.city }}</p>
            </td>
            <td>
              <p>{{ item.address }}</p>
            </td>
            <td>
              <p>{{ item.zip }}</p>
            </td>
            <td>
              <w-button type="text" @click="doHandel(index)">点击获取编号</w-button>
            </td>
          </tr>
        </w-table-body>
      </w-table>
    </div>

    <h3>分页</h3>
    <div class="section">
      <w-pagination :totalPage="8" url></w-pagination>
    </div>

    <h3>头部panel</h3>
    <w-panel>用户列表</w-panel>

    <h3>卡片</h3>
    <w-base-card
      :totalNumber="card.totalNumber"
      :newNumber="card.newNumber"
      :totalCompany="card.totalCompany"
      :totalProject="card.totalProject"
      :customerInto="card.customerInto"
    >用户列表</w-base-card>

    <h3>tab</h3>
    <w-list-tab :list="tabList">
        <div class="content-box" slot="0">
          <div class="">0</div>
        </div>
        <div class="content-box" slot="1">
          <div class="">1</div>
        </div>
      </w-list-tab>  
  </div>

</template>

<script>
import { mapActions } from "vuex";
import laydate from "layui-laydate";

export default {
  name: "ui",
  provide() {
    return {
      someValue: "s"
    };
  },
  data() {
    return {
      fileList: "",
      rulesFrom: {
        name: "",
        psw: "",
        file: null,
        time: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入名称" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符" }
        ],
        psw: [
          { required: true, message: "请输入密码" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符" }
        ],
        time: [{ required: true, message: "请选择开始时间" }]
      },
      timer: 2,
      checked: true,
      checkList: [
        {
          id: 0,
          label: "测试一下0",
          checked: true
        },
        {
          id: 2,
          label: "测试一下1",
          checked: false
        }
      ],
      select: {
        value: "哈哈",
        options: [
          {
            id: 1,
            label: "黄金糕"
          },
          {
            id: 2,
            label: "双皮奶",
            disabled: true
          },
          {
            id: 3,
            label: "蚵仔煎"
          },
          {
            id: 4,
            label: "龙须面"
          },
          {
            id: 5,
            label: "北京烤鸭"
          },
          {
            id: 6,
            label: "黄金糕"
          },
          {
            id: 7,
            label: "双皮奶",
            disabled: true
          },
          {
            id: 8,
            label: "蚵仔煎"
          },
          {
            id: 9,
            label: "龙须面"
          },
          {
            id: 10,
            label: "北京烤鸭"
          }
        ]
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      card: {
        totalNumber: 7997,
        newNumber: 11,
        totalCompany: 12,
        totalProject: 48,
        customerInto: 5
      },
      tabList: [
        {
          id: 0,
          name: "关系链路"
        },
        {
          id: 1,
          name: "报价订单"
        },
      ],
      show: false,

    };
  },
  components: {},
  mounted() {
    laydate.render({
      elem: "#dateTest",
      type: "datetime",
      done: value => {
        this.rulesFrom.time = value;
      }
    });
  },
  methods: {
    ...mapActions(["updateDialog"]),
    sumbit() {
      this.$refs.wFrom.validate(res => {
        console.log("====================================");
        console.log(res);
        console.log("====================================");
        if (res) {
          alert("提交成功");
        } else {
          alert("提交失败");
        }
      });
    },
    readFiles(fileList) {
      console.log("====================================");
      console.log(fileList);

      console.log("====================================");
    },
    showAlert() {
      this.$alert({
        title: "测试一下",
        content: "内容测试一下"
      });
    },
    showNotice() {
      this.$notice({
        content: "内容测试一下自动消失的弹窗",
        duration: 3
      });
    },
    showDialog() {
      alert(10);
      this.show = true;
    },
    closeDialog() {
      this.show = false;
    },
    submitDialog() {
      this.$notice({
        content: "服务器有误,请稍后再试",
        duration: 3
      });
    },
    chenge(e) {
      // this.checked = e;
    },
    doHandel(i) {
      this.$alert({
        content: "您点击的序号为:" + i,
        title: "点击列表行测试弹窗"
      });
    }
  },
  watch: {
    checked(newValue, oldValue) {
      console.log("====================================");
      console.log(newValue);
      console.log("====================================");
      return newValue;
    },
    show(newValue) {
      console.log("====================================");
      console.log(newValue);
      console.log("====================================");
      return newValue;
    }
  }
};
</script>

<style lang="scss" scoped>
.w-ui {
  padding: 30px;
  background: #f3f3f4;
  h3 {
    margin: 20px 0;
    color: #000000;
    // text-shadow: 2px 2px 2px aqua;
  }
  .section {
    background: #fff;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    // box-shadow: 2px 2px 1px $primary02;
    padding: 40px;
    /deep/ .mr-40 {
      margin-right: 40px;
    }
    h3 {
      margin-left: 20px;
    }
  }
}
</style>