<template>
  <div>
    <!-- 标题 -->
    <w-panel>首页幻灯片列表</w-panel>

    <!-- 通用数据 -->
    <w-base-card
      :totalNumber="card.totalNumber"
      :newNumber="card.newNumber"
      :totalCompany="card.totalCompany"
      :totalProject="card.totalProject"
      :customerInto="card.customerInto"
    >用户列表</w-base-card>

    <!-- 列表 -->
    <div class="indexBanner-list">
      <div class="indexBanner-list-header">
        <input type="text" class="search-list" v-model="list.search">
        <w-button>搜索</w-button>
        <w-button class="new-server" @click="showNewServer">新建服务</w-button>
      </div>
      <div class="tableBanner-list">
        <w-table :tableData="tableData">
          <w-table-header>
            <w-table-header-item label="序号"></w-table-header-item>
            <w-table-header-item label="服务分类名称"></w-table-header-item>
            <w-table-header-item label="是否禁用"></w-table-header-item>
            <w-table-header-item label="备注"></w-table-header-item>
            <w-table-header-item label="操作"></w-table-header-item>
          </w-table-header>
          <w-table-body>
            <tr v-for="item in tableData" :key="item.id">
              <td>
                <p>{{ item.id }}</p>
              </td>
              <td>
                <p>{{ item.name }}</p>
              </td>
              <td>
                <p>{{ item.disabled == false ? '否' : '是' }}</p>
              </td>
              <td>
                <p>--</p>
              </td>
              <td>
                <w-button type="text" @click="doHandel( item.id )">[删除]</w-button>
              </td>
            </tr>
          </w-table-body>
        </w-table>
        <w-pagination class="pagination" :totalPage="list.totalPage" url="/data/supervision/slide/search"></w-pagination>
      </div>
    </div>

    <!-- 弹窗 -->
    <w-dialog :show="dialogContral.showDialog">
      <div
        class="public_modal harame-dialog"
        id="confirmDialog"
        style="width: 400px; height: auto; top: 100px; left: 761px; display: block;"
      >
        <div class="public_modal_header">
          <span>提示:</span>
          <i class="delete spritis-s spritis-s-0093"></i>
        </div>
        <div
          class="public_modal_content content"
          style="height: auto; padding: 40px;"
        >首页幻灯片删除之后将无法恢复！您确定要删除么?</div>
        <div class="public_modal_footer" style="position: static;">
          <div class="modal_footer_one">
            <span class="footer_one_cancel fl cancel" @click="closeDialog">取消</span>
            <span class="footer_one_confirm fr delete confirm" @click="closeDialog">确定</span>
          </div>
        </div>
      </div>
    </w-dialog>

    <w-dialog :show="dialogContral.newServer">
      <w-from :model="rulesFrom" :rules="rules" ref="wFrom" class="w-form">
        <h2>新建服务</h2>
         <w-fromitem label="幻灯片图片">
          <w-upload @getFiles="readFiles" multiple="false"></w-upload>
        </w-fromitem>
        <w-fromitem label="幻灯片名称" prop="name">
          <w-input v-model="rulesFrom.name"></w-input>
        </w-fromitem>
        <w-fromitem label="链接" prop="link">
          <w-input v-model="rulesFrom.link"></w-input>
        </w-fromitem>
         <w-fromitem label="描述">
          <w-input v-model="rulesFrom.remark"></w-input>
        </w-fromitem>
        <w-fromitem>
          <w-button @click="closeNewServer()">关闭</w-button>
          <w-button @click="sumbitNewServer()" class="submitNewServer">新建服务</w-button>
        </w-fromitem>
      </w-from>
    </w-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "indexBanner",
  data() {
    return {
      card: {
        totalNumber: 7997,
        newNumber: 11,
        totalCompany: 12,
        totalProject: 48,
        customerInto: 5
      },
      list: {
        search: "",
        totalPage: 0
      },
      tableData: [],
      dialogContral: {
        showDialog: false,
        newServer: false
      },
      rulesFrom: {
        name: "",
        link: "",
        file: null,
        remark: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入名称" }
        ],
        link: [
          { required: true, message: "请输入连接" }
        ]
      },
    };
  },
  created() {
    this.listHandel();
  },
  methods: {
    ...mapActions(["updateDialog"]),
    async listHandel() {
      let { data } = await this.Http.$post({
        url: "/data/supervision/slide/search",
        data: {
          size: 10,
          number: 0
        },
        contentType: "application/json"
      });
      this.tableData = data.data;
      this.list.totalPage = data.total;
    },
    doHandel(id) {
      this.dialogContral.showDialog = true;
    },
    closeDialog() {
      this.dialogContral.showDialog = false;
    },
    showNewServer() {
      this.dialogContral.newServer = true;
    },
    readFiles(fileList) {
      console.log("====================================");
      console.log(fileList);
      console.log("====================================");
    },
    sumbitNewServer() {
      this.$refs.wFrom.validate(res => {
        if (res) {
          alert("检验通过，可以提交");
          this.rulesFrom.name = '';
          this.rulesFrom.link = '';
          this.rulesFrom.remark = '';
          this.rulesFrom.file = null;
        } else {
          alert("请检查您的填写");
        }
      });
    },
    closeNewServer() {
      this.dialogContral.newServer = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.indexBanner-list {
  background: #fff;
  overflow: hidden;
  margin: 0 20px;
  margin-bottom: 16px;
  padding: 20px 20px;

  .new-server {
    float: right;
  }

  .tableBanner-list {
    margin-top: 40px;
  }

  .pagination {
    margin-top: 20px;
  }

  .search-list {
    width: 300px;
    height: 30px;
    border: 1px solid #ececec;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px;
    border-radius: 4px;
  }
}

.harame-dialog {
  position: fixed;
  z-index: 1001;
  width: 90%;
  border: 1px solid #c9cacb;
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
  .public_modal_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text_color_3);
    height: 46px;
    padding: 13px 20px;
    border-bottom: 1px solid var(--line_color);
    box-sizing: border-box;
    -moz-border-radius: 4px 4px 0 0;
    -webkit-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
    position: relative;
    span {
      display: inline-block;
      vertical-align: top;
      font-size: 16px;
      height: 57px;
      line-height: 57px;
    }
    i {
      width: 18px;
      height: 18px;
      cursor: pointer;
      background: url("../assets/images/spritis-s.png") no-repeat;
    }
  }
  .public_modal_content content {
    text-align: center;
    line-height: 24px;
    color: var(--text_color_3);
    overflow: hidden;
  }
  .public_modal_footer {
    padding-bottom: 30px;
    box-sizing: border-box;
    background: #ffffff;
    .modal_footer_one {
      width: 260px;
      text-align: center;
      overflow: hidden;
      margin: 0 auto;
      span {
        position: relative;
        display: inline-block;
        vertical-align: top;
        color: #ffffff;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        background: var(--main_color);
        cursor: pointer;
      }
      .footer_one_cancel {
        background: #cccccc;
      }
      .footer_one_confirm {
        @include bg_color($primary01);
      }
      .fr {
        float: right;
      }
      .fl {
        float: left;
      }
    }
  }
}

.w-form {
  width: 520px;
  background: #fff;
  padding: 20px;
  text-align: left;
  box-sizing: border-box;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -260px;
  border-radius: 20px;
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .submitNewServer {
    margin-left: 120px;
  }
}
</style>