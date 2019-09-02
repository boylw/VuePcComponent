<template>
  <div class="w-slider">
    <ul class="w-slider-ul">
      <router-link
        v-for="(item, index) in showList"
        :key="index"
        tag="li"
        :to="{path:item.link}"
        class="w-slider-li"
      >{{item.value}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "w-slider",
  data() {
    return {
      showList: [], // 最后展示
      // 下面应该为请求的数据
      sliderList: [
        {
          selectFrameId: 1,
          list: [
            {
              id: 1,
              value: "公用组件",
              link: "/ui"
            },
            {
              id: 2,
              value: "用户列表",
              link: "/userList"
            },
            {
              id: 3,
              value: "首页幻灯片",
              link: "/indexBanner"
            }
          ]
        },
        {
          selectFrameId: 2,
          list: [
            {
              id: 1,
              value: "公用组件2",
              link: "/test"
            },
            {
              id: 2,
              value: "index2",
              link: "/index"
            }
          ]
        }
      ]
    };
  },
  async created() {
    this.getShowList();
  },
  methods: {
    getShowList() {
      let selectFramId = this.selectFramId;
      this.sliderList.map(item => {
        if (item.selectFrameId == selectFramId) {
          this.showList = item.list;
          this.$router.push({
            path: this.showList[0].link || "/"
          });
        }
      });
      this.showList.map(item => {
        item.link = item.link == null || item.link == "" ? "/" : item.link;
      });
    }
  },
  computed: {
    selectFramId() {
      return this.$store.state.frame.selectFrameId;
    }
  },
  watch: {
    selectFramId(newValue, oldValue) {
      this.getShowList();
    }
  }
};
</script>

<style lang="scss" scoped>
.w-slider {
  position: fixed;
  left: 0;
  width: 220px;
  top: 60px;
  bottom: 0;
  background: url("../../assets/images/bg.png") no-repeat center;
  .w-slider-ul {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    .w-slider-li {
      width: 100%;
      box-sizing: border-box;
      height: 50px;
      color: #a7b1c2;
      padding-left: 25px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: $txt-primaryT;
      }
    }
    .router-link-exact-active.router-link-active {
      color: $txt-primaryT;
      background: rgba($color: #0f1122, $alpha: 0.8);
    }
  }
}
.router-link-active {
  color: #fff !important;
  background: rgba(15, 17, 34, 0.8);
}
</style>