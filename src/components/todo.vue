<template>
    <div>
        <router-link :to="to">
        <!--<a class='listItem' :rwid='todo.RenWuID' :jd='todo.DangQianJD'>-->
            <!--<i><span class="iconfont icon-baoxiao"></span></i>-->
            <slot></slot>
            <div class="listsInfo">
            <h4>{{todo.BiaoTi}}</h4>
                <div class="clearfix">
                    <span v-if="todo.ShenQingBM!=''">{{todo.ShenQingBM}}/{{todo.ShenQingR}}</span>
                    <time class="fr">{{todo.ShenQingSJ}}</time>
                </div>
            </div>
        </router-link>
    </div>
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

</style>