<template>
  <div class="overall" v-if="this.show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      required:true
    }
  },
  data() {
    return {
      
    }
  },
  created () {
  },
  methods: {
   
  }
  
};
</script>

<style lang="scss" scoped>
.overall {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 1000;
}
</style>