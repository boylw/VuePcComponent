<template>
  <div class="w-checkbox-box">
    <input
      type="checkbox"
      :id="id"
      @change="$emit('change', $event.target.checked)"
      :checked="checked"
      class="w-checkbox"
    >
    <label :for="id" class="w-checkbox-label"></label>
    <span class="label-txt">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "w-checkbox",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean,
    id: {
        default: 1
    }
  },
  data() {
    return {
      
    };
  }
};
</script>

<style lang="scss" scoped>
.w-checkbox-box {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  .w-checkbox-label {
    box-sizing: border-box;
    position: relative;
    padding: 0;
    width: 17px;
    height: 17px;
    border: 1px solid #dddddd;
    display: inline-block;
  }
  .w-checkbox:checked + .w-checkbox-label::before {
    display: block;
    content: "\2714";
    text-align: center;
    background: $primary01;
    color: white;
    width: 15px;
    height: 15px;
    font-size: 12px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  .w-checkbox {
    display: none;
  }
  .label-txt {
    margin-left: 5px;
    color: #000;
    font-size: 14px;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .w-checkbox:checked + .label-txt {
    color: $primary01;
  }
}
</style>