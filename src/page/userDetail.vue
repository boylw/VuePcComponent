<template>
  <div>
    <w-panel>用户详情</w-panel>
    <w-detail-card
      :name="card.name"
      :number="card.number"
      :registerDate="card.registerDate"
      :enterpriseName="card.enterpriseName"
      :projectNum="card.projectNum"
      :selectPM="selectPM"
    ></w-detail-card>
    <div class="detail-tab-list">
      <w-list-tab :list="tabList" :fnoptions="tabFn">
        <div class="content-box" slot="0">
          <div class="echarts_box" >
          <div v-if="this.echartsData.length == 0" class="list_empty"></div>
          <div class="echarts_data"></div>
        </div>
        </div>
        
        <div class="content-box" slot="1">
          <div class="tableBanner-list">
            <w-table :tableData="tableData">
              <w-table-header>
                <w-table-header-item label="id"></w-table-header-item>
                <w-table-header-item label="用户"></w-table-header-item>
                <w-table-header-item label="绑定手机号"></w-table-header-item>
                <w-table-header-item label="是否关注公众号"></w-table-header-item>
                <w-table-header-item label="对接PM"></w-table-header-item>
                <w-table-header-item label="注册时间"></w-table-header-item>
                <w-table-header-item label="操作"></w-table-header-item>
              </w-table-header>
              <w-table-body>
                <tr v-for="item in tableData" :key="item.id">
                  <td>
                    <p>{{ item.id }}</p>
                  </td>
                  <td>
                    <p>{{ item.nickname }}</p>
                  </td>
                  <td>
                    <p>{{ tableShowText(item.cellphoneNumber) }}</p>
                  </td>
                  <td>
                    <p>--</p>
                  </td>
                  <td>
                    <p>--</p>
                  </td>
                  <td>
                    <p>{{ item.registrationTime }}</p>
                  </td>
                  <td>
                    <w-button type="text">[详情]</w-button>
                  </td>
                </tr>
              </w-table-body>
            </w-table>
            <w-pagination class="pagination" :totalPage="totalPage"></w-pagination>
          </div>
        </div>
        <div class="content-box" slot="2">
          <div class="list_empty">3</div>
        </div>
        <div class="content-box" slot="3">
          <div class="list_empty">4</div>
        </div>
      </w-list-tab>
    </div>
  </div>
</template>

<script>
export default {
  name: "userList",
  data() {
    return {
      tabList: [
        {
          id: 0,
          name: "关系链路"
        },
        {
          id: 1,
          name: "报价订单"
        },
        {
          id: 2,
          name: "优惠券"
        },
        {
          id: 3,
          name: "参与的活动"
        }
      ],
      tabFn: [
        { runFn: () => console.log("click tab1") },
        { runFn: () => console.log("click tab2") }
      ],
      selectList: {
        value: "请选择",
        options: [
          {
            id: "",
            label: "全部"
          },
          {
            id: "true",
            label: "是"
          },
          {
            id: "false",
            label: "否"
          }
        ]
      },
      selectPM: {
        value: "默认",
        options: [
          {
            id: "",
            label: "默认"
          },
          {
            id: "1",
            label: "PM1"
          },
          {
            id: "2",
            label: "PM2"
          }
        ]
      },
      card: {
        name: "测试",
        number: 18888888888,
        registerDate: 36,
        enterpriseName: 15,
        projectNum: 2
      },
      list: {
        search: ""
      },
      tableData: [],
      totalPage: 0,
      tab: {
        currentTab: "Home",
        tabs: ["Home", "Posts", "Archive"]
      },
      echartsData:[]
    };
  },
  async created() {
    this.listHandel();
  },
  methods: {
    async listHandel() {
      let { data } = await this.Http.$post({
        url: "/data/user/search1",
        data: {
          size: 10,
          number: 0
        },
        contentType: "application/json"
      });
      this.tableData = data.data;
      this.totalPage = data.total;
    },
    tableShowText(data) {
      if (data == "" || data == undefined) {
        return "--";
      }
      return data;
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-tab-list {
  background: #fff;
  overflow: hidden;
  margin: 0 20px;
  margin-bottom: 16px;
  // padding: 0 20px 20px 20px;

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
  .select-search {
    display: inline-block;
  }
  .select-lable {
    margin-left: 30px;
  }
  .content-box{
    min-height: 560px;
  }
  .echarts_box {
    background: #fff;
    overflow: hidden;
    margin-bottom: 16px;
    
  }
  .list_empty {
      width: 100%;
      height: 320px;
      margin-top: 30px;
      background: url(../assets/images/list-empty.png) no-repeat center center;
    }
}
.base-card {
  .w-select {
    width: 30px;
    .w-select-showInfo {
      text-align: center;
      border: none;
    }
  }
}
</style>