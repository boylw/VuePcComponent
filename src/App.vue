<template>
  <div id="app">
    <w-header></w-header>
    <w-slider></w-slider>
    <div class="pageConent">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 80px;
  .pageConent {
    position: absolute;
    left: 220px;
    top: 60px;
    right: 0;
    bottom: 0;
    background: #f6f6f6;
  }
}
</style>
