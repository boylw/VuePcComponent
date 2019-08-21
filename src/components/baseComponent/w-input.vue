<template>
    <input :type="type" :value="inputValue" @input="inputHandle" @change="inputChange($event)" :class="[type=='file' ? '' :'defaultInput']">
</template>

<script>
    export default {
        name: 'w-input',
        inject: ['from'],
        props: {
            value: {
                required: true,
                defaultValue: ''
            },
            type: {
                defaultValue: 'text'
            }
        },
        data() {
            return {
                inputValue: this.value
            }
        },
        methods: {
            inputHandle(e) {
                this.inputValue = e.target.value;
                this.$emit('input', this.inputValue);
                // 通知formitem 做校验功能
                this.$parent.$emit('doValidate');
            },
            inputChange(e) {
                this.$emit('change', e)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .defaultInput {
        width: 300px;
        height: 30px;
        border: 1px solid #ececec;
        box-sizing: border-box;
        padding: 0 10px;
        border-radius: 4px;
    }
    input:focus {
    & {
      outline-color: $primary01;
    }
  }
</style>