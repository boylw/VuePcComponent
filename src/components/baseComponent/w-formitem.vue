<template>
    <!-- 表单组件表单项,label为每一项标题,prop为是否需要校验设置项 -->
    <div class="from-item">
        <label class="from-item-label" ref="label">{{label}}</label>
        <slot></slot>

        <transition name="fade">
            <p v-show="validateStatus == 'error'" class="error" ref="error">{{errorMessage}}</p>
        </transition>
    </div>
</template>

<script>
    import schema from 'async-validator';
    export default {
        name: 'w-formitem',
        inject: ['from'],
        provide () {
            return {fromitem : this}
        },
        props: ["label", "prop"],
        data() {
            return {
                validateStatus: '',
                errorMessage: ''
            }
        },
        created () {
           this.fetchValidate();
        },
        methods: {
            doValidate() {
                return new Promise(resolve => {
                    // 在这里做校验 (异步校验)
                    if (this.prop) {
                        const descriptor = {
                            [this.prop]: this.from.rules[this.prop]
                        };
                        let validator = new schema(descriptor);
                        validator.validate({[this.prop]: this.from.model[this.prop]}, errors => {
                            if (errors) {
                                this.validateStatus = 'error';
                                this.errorMessage = errors[0].message;
                                this.$refs.error.previousElementSibling.classList.add('errorOutLine');
                                resolve(false);
                            } else {
                                this.validateStatus = '';
                                this.errorMessage = '';
                                this.$refs.error.previousElementSibling.classList.remove('errorOutLine');
                                resolve(true);
                            }
                        })
                    }
                })
            },
            fetchValidate() {
                this.$on('doValidate',this.doValidate);
            }
        },
        mounted () {
            if (this.prop) {
                // 我在已经挂载完毕后,让父亲派发一个事件,并把自己发出去
                this.$parent.$emit('formItemAdd', this);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .error {
        color: red;
        margin: 10px 0 10px 10px;
    }

    .errorOutLine {
        border-color: red;
        &:focus {
            outline-color: red !important;
        }
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }

    .from-item {
        min-height: 60px;
        display: flex;
        align-items: center;
    }

    .from-item-label {
        margin-right: 20px;
        text-align: right;
        min-width: 70px;
        display: inline-block;
    }
</style>