<template>
  <div class="upload-box">
    <div class="show-file-info" v-if="fileList.length != 0">
      <div
        class="file-info-box"
        v-for="(item, index) in showList"
        :key="index"
        @mouseenter="enterImg"
        @mouseleave="leaveImg"
      >
        <img :src="item" alt>
        <p class="delete-img" v-show="showDelete">
          <s class="delete-icon" @click="deleteImgList(index)"></s>
        </p>
      </div>
    </div>
    <!-- 文件上传组件 1. 支持上传单文件,多文件,上传展示 -->
    <div class="file">
      <input
        type="file"
        :multiple="multiples"
        class="upload-input"
        @change="changeFile"
        ref="fileInput"
      >
      <i class="upload-icon"></i>
      <i class="upload-txt">上传图片</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    multiple: {
      default: "false"
    }
  },
  data() {
    let multiples = this.$props.multiple;
    return {
      fileList: [],
      showList: [],
      multiples,
      showDelete: false
    };
  },
  methods: {
    changeFile(e) {
      console.log("=================e.target.files.length===================");
      console.log(e.target.files.length);
      console.log("====================================");
      for (let key = 0; key < e.target.files.length; key++) {
        let hasAble = false;
        const element = e.target.files[key];
        this.readFiles(element);
        this.fileList.map(item => {
          if (item.name == element.name) {
            hasAble = true;
          }
        });
        if (!hasAble) {
          this.fileList.push(element);
        }
      }
      // 是否允许多文件上传
      this.fileList =
        (this.multiples == "false" && this.fileList.length == 1) ||
        this.multiples == "true"
          ? this.fileList
          : this.fileList.slice(this.fileList.length - 1);

      // 派发一个事件,告诉它我已经选好文件了
      this.$emit("getFiles", this.fileList);
      e.target.value = "";
    },
    readFiles(file) {
      const readFile = new FileReader();
      readFile.onload = event => {
        // 图片过滤处理
        let hasAble = false;
        this.showList.map(item => {
          if (item.name == file.name) {
            hasAble = true;
          }
        });
        if (!hasAble) {
          this.showList.push(readFile.result);
        }
        // 是否允许多文件上传
        this.showList =
          (this.multiples == "false" && this.showList.length == 1) ||
          this.multiples == "true"
            ? this.showList
            : this.showList.slice(this.showList.length - 1);
      };
      readFile.readAsDataURL(file);
    },
    enterImg() {
      this.showDelete = true;
    },
    leaveImg() {
      this.showDelete = false;
    },
    deleteImgList(index) {
      this.fileList.splice(index, 1);
      this.showList.splice(index, 1);
    }
  },
  watch: {
    showList(newValue, oldValue) {
      return newValue;
    }
  }
};
</script>

<style lang="scss" scoped>
.upload-box {
  display: flex;
  align-items: center;
}
.file {
  display: inline-block;
  height: 100px;
  width: 100px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  position: relative;
  .upload-input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 35px;
    opacity: 0;
    z-index: 2;
    width: 100px;
    cursor: pointer;
  }
  .upload-icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 35px;
    z-index: 1;
    background: url("../../assets/images/add_icon.png") no-repeat center center;
    cursor: pointer;
  }
  .upload-txt {
    position: absolute;
    top: 65px;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 35px;
    color: #797474;
    font-size: 14px;
  }
}
.show-file-info {
  height: 100px;
  min-width: 80px;
  margin-right: 10px;
  display: flex;
  .file-info-box {
    width: 100px;
    height: 100%;
    margin-right: 10px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .delete-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba($color: #000000, $alpha: 0.2);
      z-index: 20;
      .delete-icon {
        width: 12px;
        height: 12px;
        position: absolute;
        top: 10px;
        right: 10px;
        background: url("../../assets/images/close.png") no-repeat center;
        cursor: pointer;
      }
    }
  }
}
</style>