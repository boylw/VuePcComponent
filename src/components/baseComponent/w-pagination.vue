<template>
  <div class="w-page">
    <div class="w-box-bottom">
      <div class="bottom_right pr">
        <em class="count-num">共{{totalPage}}页</em>
        <span class="page-turn pr">
          <ul>
            <li class="page-num" @click="startNum">
              <span class="Cpage_bar_lps Cpage_bar pr startPage">
                <i class="Cpage_bar_lp1" style="left:-3px;"></i>
                <i class="Cpage_bar_lp1" style="left: 2px;"></i>
              </span>
            </li>

            <li class="page-num" @click="prevNum">
              <span class="Cpage_bar_lps Cpage_bar pr prev">
                <i class="Cpage_bar_lp2"></i>
              </span>
            </li>

            <li class="page-num" v-for="i in showNum" :key="i" @click="goPageHandel(i)">
              <span :class="[currentNum == i ? 'activeNum' : '']">{{i}}</span>
            </li>

            <li class="page-num" @click="nextPage($event)">
              <span class="Cpage_bar_rps Cpage_bar pr next">
                <i class="Cpage_bar_rp2"></i>
              </span>
            </li>

            <li class="page-num" @click="endPage">
              <span class="Cpage_bar_rps Cpage_bar pr endPage">
                <i class="Cpage_bar_rp1" style="left:-3px;"></i>
                <i class="Cpage_bar_rp2" style="left: 2px;"></i>
              </span>
            </li>
          </ul>
        </span>
        <em class="count-num">当前{{currentNum}}页</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "w-pagination",
  props: {
    totalPage: {
      type: Number,
      default: 0
    },
    url: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {
      currentNum: 1,
      showNum: [],
      defaultPag: 5
    };
  },
  created() {
    this.initPage();
  },
  methods: {
    initPage() {
      let arrayNum = [];
      for (let i = 0; i < this.defaultPag && i < this.totalPage; i++) {
        arrayNum.push(i + 1);
      }
      this.showNum = arrayNum;
    },
    nextPage(e) {
      if (this.currentNum < this.totalPage) {
        ++this.currentNum;
      }
      if (
        this.currentNum > this.defaultPag - 2 &&
        this.showNum[this.defaultPag - 1] < this.totalPage
      ) {
        let arr = [];
        for (let i = 0; i < this.showNum.length; i++) {
          arr.push(this.showNum[i] + 1);
        }
        this.showNum = arr;
      } else {
        event.preventDefault();
      }
      this.ajaxHandel();
    },
    endPage() {
      if (this.currentNum < this.totalPage) {
        this.currentNum = this.totalPage;
        if (this.totalPage - this.defaultPag > 0) {
          let arr = [];
          for (
            let i = 0, j = this.totalPage - this.defaultPag;
            i < this.defaultPag;
            i++, j++
          ) {
            arr.push(j + 1);
          }
          this.showNum = arr;
        }
      }
      this.ajaxHandel();
    },
    startNum() {
      this.currentNum = 1;
      let arr = [];
      for (let i = 0; i < this.defaultPag && i < this.totalPage; i++) {
        arr.push(i + 1);
      }
      this.showNum = arr;
      this.ajaxHandel();
    },
    prevNum() {
      if (this.currentNum > 1) {
        --this.currentNum;
      }
      if (this.currentNum >= 3) {
        let arr = [];
        for (
          let i = 0, j = this.currentNum - 2;
          i < this.defaultPag;
          i++, j++
        ) {
          if (j <= this.totalPage) {
            arr.push(j);
          }
        }
        this.showNum = arr;
      } else {
        event.preventDefault();
      }
      this.ajaxHandel();
    },
    goPageHandel(i) {
      this.currentNum = i;
      this.ajaxHandel();
    },
    async ajaxHandel() {
      let { data } = await this.Http.$post({
        url: this.$props.url,
        data: {
          size: 10,
          number: this.currentNum
        },
        contentType: "application/json"
      });
      this.$emit('refreshList', data);
    }
  },
  watch: {
    showNum(newValue, oldValue) {
      return newValue;
    },
    totalPage(newValue) {
      this.initPage();
      return newValue;
    }
  }
};
</script>

<style lang="scss" scoped>
.w-page {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-box-bottom {
  height: 48px;
  margin: 0 15px 15px 15px;

  .bottom_right {
    float: right;
    width: 450px;
    height: 100%;
    .count-num {
      font-size: 14px;
      color: #999999;
      margin: 0 10px;
      letter-spacing: 5px;
    }
    .page-turn {
      display: inline-block;
      height: 25px;
      top: 8px;

      .Cpage_bar_lps {
        font-size: 12px;
        cursor: pointer;
        color: #666666;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        display: inline-block;
        width: 25px;
        height: 25px;
        border: 1px solid #ececec;
        border-right: 0;
        line-height: 24px;
        text-align: center;

        .Cpage_bar_lp1,
        .Cpage_bar_lp2 {
          position: absolute;
          display: inline-block;
          width: 25px;
          height: 25px;
          left: 0;
          background: url("../../assets/images/_lp.png") no-repeat center center;
        }
      }

      .page-num {
        float: left;
        width: 25px;
        height: 25px;
        span {
          font-size: 12px;
          cursor: pointer;
          color: #666666;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          display: inline-block;
          width: 25px;
          height: 25px;
          border: 1px solid #ececec;
          border-right: 0;
          line-height: 24px;
          text-align: center;
        }
        .activeNum {
          @include bg_color($primary01);
          color: #fff;
          @include border_color($primary01);
        }

        .endPage {
          border-right: 1px solid #ececec;
        }
      }

      .Cpage_bar_rps {
        font-size: 12px;
        cursor: pointer;
        color: #666666;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        display: inline-block;
        width: 25px;
        height: 25px;
        border: 1px solid #ececec;
        border-right: 0;
        line-height: 24px;
        text-align: center;
        .Cpage_bar_rp2,
        .Cpage_bar_rp1 {
          position: absolute;
          display: inline-block;
          width: 25px;
          height: 25px;
          left: 0;
          background: url("../../assets/images/_rp.png") no-repeat center center;
        }
      }
    }
  }
}

.pr {
  position: relative;
}
</style>