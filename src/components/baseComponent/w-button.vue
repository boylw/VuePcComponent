<template>
    <!-- 按钮: 包含文字按钮和非文字按钮 type:{按钮类型选择项['default','waring','text']} disabeled:{是否可以点击[true,false]} -->
  <div class="wbtn">
    <div
      :class="['w-button', propsType, propsDisabled == 'true' ? 'disable': '']"
      v-if="propsType != 'text'"
      @click="handleClick"
    >
      <slot></slot>
    </div>
    <span
      :class="['w-button', propsType, propsDisabled == 'true' ? 'disable': 'able','btn-text']"
      v-if="propsType == 'text'"
      @click="handleClick"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>

export default {
  name: "w-button",
  props: {
    type: {
      type: String,
      default: "default" 
    },
    disabeled: {
      type: String,
      default: 'false'
    }
  },
  data() {
    return {
      propsType: this.type,
      propsDisabled: this.disabeled
    };
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  },
};
</script>


<style lang="scss" scoped>

.wbtn {
  display: inline-block;
}

.w-button {
    display: inline-block;
    text-align: center;
    align-items: center;
    padding: 6px 15px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
}
.default {
    @include bg_color($primary01);
    color:$btn-primaryC;
    min-width: 60px;
    min-height: 30px;
    box-sizing: border-box;
    font-size: 12px;
}

.btn-text {
  @include color($primary01);
      padding: 0 5px 0 0;
  &.able:hover {
    color: crimson;
  }
}

.warning {
    background: $btn-warning;
    color:$btn-primaryC;
    min-width: 60px;
    min-height: 30px;
    box-sizing: border-box;
    font-size: 12px;
}

.disable {
  cursor: not-allowed;
}
</style>
