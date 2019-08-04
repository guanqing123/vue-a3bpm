<template>
    <div id="index">
        <!--头部轮播-->
        <div class="mui-slider">
            <div class="mui-slider-group">
                <!--第一个内容区容器-->
                <div class="mui-slider-item">
                    <!-- 具体内容 -->
                    <img src="../assets/images/header.jpg"/>
                </div>
            </div>
        </div>

        <!--九宫格-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <grid v-for="grid in grids" :key="grid.to" :to="grid.to" :icon="grid.icon" :text="grid.text"></grid>
            </ul>
        </div>
    </div>
</template>

<script>
    import grid from '../components/grid.vue'
    export default {
        name: "index",
        components: {
            grid: grid
        },
        data() {
            return {
                grids: [
                    {"icon":"iconfont icon-wodedaiban","text":"待办","to":"/todoList"},
                    {"icon":"iconfont icon-yiban","text":"已办","to":"/h"},
                    {"icon":"iconfont icon-shenqing","text":"报销","to":"x"},
                    {"icon":"iconfont icon-gengduo","text":"更多","to":"y"}
                ]
            }
        }
    }
</script>

<style scoped>
@import "../assets/styles/iconfont.css";
</style>