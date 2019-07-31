<template>
    <div id="index">
        <img class="launchImage" src="../assets/images/header.jpg">
        <div class="weui-cells__title"></div>
        <div class="weui-grids">
            <router-link to="/todoList" class="weui-grid js_grid">
                <div class="weui-grid__icon">
                    <i class="iconfont icon-daiban"></i>
                </div>
                <p class="weui-grid__label">
                    待办
                </p>
            </router-link>
            <a href="applyLists_yb.html" class="weui-grid js_grid">
                <div class="weui-grid__icon">
                    <i class="iconfont icon-yiban"></i>
                </div>
                <p class="weui-grid__label">
                    已办
                </p>
            </a>
            <a href="applyBX.html" class="weui-grid js_grid">
                <div class="weui-grid__icon">
                    <i class="iconfont icon-shenqing"></i>
                </div>
                <p class="weui-grid__label">
                    报销申请
                </p>
            </a>
            <a href="" class="weui-grid js_grid">
                <div class="weui-grid__icon">
                    <i class="iconfont icon-gengduo"></i>
                </div>
                <p class="weui-grid__label">
                    更多
                </p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }
    .launchImage {
        width: 100%;
    }
    @import "../assets/fonts/iconfont.css";
    .weui-grid__icon+.weui-grid__label{
        font-size:16px;
        margin-top:16px;
    }
</style>