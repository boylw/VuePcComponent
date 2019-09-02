<template>
  <div id="app">
    <w-header>
      <w-select v-model="select.value" class="w-select-color">
        <w-option :options="select.options"></w-option>
      </w-select>
    </w-header>

    <w-slider></w-slider>
    <div class="pageConent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      select: {
        value: "选择换肤",
        options: [
          {
            id: 1,
            label: "theme1"
          },
          {
            id: 2,
            label: "theme2",
            disabled: true
          },
          {
            id: 3,
            label: "theme3"
          },
          {
            id: 4,
            label: "theme4"
          }
        ]
      }
    };
  },
  watch: {
    select: {
      handler(newValue) {
        window.document.documentElement.setAttribute(
          "data-theme",
          newValue.value
        );
      },
      deep: true
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 80px;
  .w-select-color {
    position: absolute;
    right: 20px;
    top: 10px;
  }
  .pageConent {
    position: absolute;
    left: 220px;
    top: 60px;
    right: 0;
    bottom: 0;
    background: #f3f3f4;
    min-width: 1400px;
    overflow-y: auto;
  }
}
</style>
