<template>
    <!-- 表单提交组件,model为数据模型,rules为校验规则 -->
  <form>
    <slot></slot>
  </form>
</template>

<script>
    export default {
        name: 'w-form',
        provide() {
            return { // 将表单的实例传递给后代
                from: this
            };
        },
        props: {
            model: {
                required: true,
                type: Object
            },
            rules: {
                type: Object
            }
        },
        created () {
            this.filds = []; // 将需要校验的子组件实例汇总
            this.$on('formItemAdd', item => this.filds.push(item));
        },
        methods: {
            async validate(callback) {
                const tacks = this.filds.map(item => item.doValidate())  // 得到一个结果集合(返回了将要校验的Promise)
                let results = await Promise.all(tacks);
                let ret = true;
                results.forEach(valid => {
                    if (!valid) {
                        ret = false
                    }
                })
                callback(ret);
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>