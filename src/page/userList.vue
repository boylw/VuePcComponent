<template>
  <div>
    <router-view></router-view>
    <div v-show="showPage">
      <w-panel>用户列表</w-panel>
      <w-base-card
        :totalNumber="card.totalNumber"
        :newNumber="card.newNumber"
        :totalCompany="card.totalCompany"
        :totalProject="card.totalProject"
        :customerInto="card.customerInto"
      ></w-base-card>
      <div class="indexBanner-list">
        <div class="indexBanner-list-header">
          <input type="text" class="search-list" v-model="list.search">
          <w-button @click="goDetail(1)">搜索</w-button>
          <span class="select-lable">是否绑定手机号：</span>
          <div class="select-search">
            <w-select v-model="selectList.value">
              <w-option :options="selectList.options"></w-option>
            </w-select>
          </div>
        </div>
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
                  <w-button type="text" @click="goDetail(item.id)">[详情]</w-button>
                </td>
              </tr>
            </w-table-body>
          </w-table>
          <w-pagination
            class="pagination"
            :totalPage="totalPage"
            url="/data/user/search"
            @refreshList="refreshList"
          ></w-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userList",
  data() {
    return {
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
      card: {
        totalNumber: 800,
        newNumber: 10,
        totalCompany: 36,
        totalProject: 15,
        customerInto: 2
      },
      list: {
        search: ""
      },
      tableData: [],
      totalPage: 0,
      showPage: true
    };
  },
  created() {
    this.listHandel();
  },
  methods: {
    async listHandel() {
      let { data } = await this.Http.$post({
        url: "/data/user/search",
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
    },
    refreshList(list) {
      this.tableData = list.data || [];
      this.totalPage = list.total;
    },
    goDetail(id){
      console.log(id);
      this.$router.push({
        name:'userDetail',
        params:{
          id:id
        }
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.fullPath == to.matched[0].path) {
      this.showPage = true;
    } else {
      this.showPage = false;
    }
    next();
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
  .select-search {
    display: inline-block;
  }
  .select-lable {
    margin-left: 30px;
  }
}
</style>