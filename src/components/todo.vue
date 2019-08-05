<template>
    <router-link :to="to">
        <div class="mui-table">
            <div class="mui-table-cell mui-col-xs-9">
                <slot></slot>
                <h5 class="mui-ellipsis">{{todo.BiaoTi}}</h5>
                <p class="mui-h6 mui-ellipsis" v-if="todo.ShenQingBM!=''">{{todo.ShenQingBM}}/{{todo.ShenQingR}}</p>
            </div>
            <div class="mui-table-cell mui-col-xs-3 mui-text-right mui-text-bottom">
                <span class="mui-h6">{{todo.ShenQingSJ}}</span>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "todo",
        props: {
            todo: {
                type: Object,
                required: true
            },
            to: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
.mui-text-bottom {
    vertical-align: bottom;
}
h5{
    color: black;
}
</style>