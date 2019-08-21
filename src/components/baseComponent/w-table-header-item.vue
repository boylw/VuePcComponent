<template>
    <th class="w-table-th">{{label}} <slot></slot></th>
</template>

<script>
    export default {
        inject: ['table'],
        props: {
            label: { // 
                type: String,
                default: ''
            }
        },

    }
</script>

<style lang="scss" scoped>
.w-table-th {
    text-align: left;
  padding:0 0 0 20px;
  border-collapse:collapse;

}
</style>