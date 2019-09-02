<template>
  <!-- <w-select>
            <w-option v-for=""></w-option>
  </w-select>-->
  <div class="w-select" :id="id">
    <input
      type="text"
      ref="selectInput"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="w-select-showInfo"
      readonly
      @blur="blurHandler"
      @focus="focusHandler"
    >
    <i :class="['w-select-icon',up == true ? 'up' : '']" ref="WSelectIcon"></i>
    <transition name="fade">
      <div class="select-option-box" v-show="showSelectInfo">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "w-select",
  provide() {
    return {
      select: this
    };
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      required: true,
      default: "",
      type: String
    }
  },
  data() {
    return {
      up: false,
      showSelectInfo: false,
      id: null,
      selectValue: this.value
    };
  },
  methods: {
    focusHandler() {
      this.up = true;
      this.showSelectInfo = true;
    },
    blurHandler() {
      this.up = false;
      this.showSelectInfo = false;
    },
    changeSelect(selectItem) {
      this.id = selectItem.id || null;
      this.selectValue = selectItem.value || "";
      this.$nextTick(() => {
        this.updateValue(this.$refs.selectInput)
      });
    },
    updateValue(e) {
      e.value = this.selectValue;
      this.$emit("input", this.selectValue);
    }
  }
};
</script>

<style scoped lang="scss">
.w-select {
  width: 240px;
  height: 40px;
  box-sizing: border-box;
  position: relative;
  .w-select-showInfo {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    cursor: pointer;
    &:focus {
       @include border_color($primary01);
    }
  }
  .w-select-icon {
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 12px;
    width: 12px;
    height: 12px;
    transition: all 0.5s;
    background: url("../../assets/images/select-icon.png") no-repeat center;
    &.up {
      transition: all 0.5s;
      transform: rotate(180deg);
    }
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .select-option-box{
    z-index: 11;
    position: absolute;
    width: 100%;
  }
}
</style>