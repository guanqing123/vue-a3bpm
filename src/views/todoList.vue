<template>
    <div id="todoList" class="mui-content">
        <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
            <li class="mui-table-view-cell" v-for="todo in todos" :key="todo.DanJuBH">
                <todo v-if="todo.DanJuLeiXing==='1'" :todo="todo" :to="{name:'bxcomp',params:{todo:todo}}">
                    <span class="mui-media-object mui-pull-left mui-icon iconfont icon-shenqing"></span>
                </todo>
                <todo v-if="todo.DanJuLeiXing==='2'" :todo="todo" :to="{name:'zxcomp',params:{todo:todo}}">
                    <span class="mui-media-object mui-pull-left mui-icon iconfont icon-zhihangfankui"></span>
                </todo>
                <todo v-if="todo.DanJuLeiXing==='3'" :todo="todo" :to="{name:'zjcomp',params:{todo:todo}}">
                    <span class="mui-media-object mui-pull-left mui-icon iconfont icon-putongzijinchi"></span>
                </todo>
            </li>
        </ul>
    </div>

    <!--<div id="todoList">-->
        <!--<div style="position: relative">-->
            <!--<div class="page navbar js_show">-->
                <!--<div class="page__bd" style="height: 100%;">-->
                    <!--<div class="weui-tab">-->
                        <!--<div class="weui-tab__panel">-->
                            <!--<div class="list-block">-->

                                <!--<ul class="mui-table-view">-->
                                    <!--<li class="mui-table-view-cell mui-media">-->
                                        <!--<a href="javascript:;">-->
                                            <!--<i><span class="mui-media-object mui-pull-left mui-icon iconfont icon-zhihangfankui"></span></i>-->
                                            <!--<div class="mui-media-body">-->
                                                <!--幸福-->
                                                <!--<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>-->
                                            <!--</div>-->
                                        <!--</a>-->
                                    <!--</li>-->
                                    <!--<li class="mui-table-view-cell mui-media">-->
                                        <!--<a href="javascript:;">-->
                                            <!--<i><span class="iconfont icon-baoxiao"></span></i>-->
                                            <!--<div class="mui-media-body">-->
                                                <!--木屋-->
                                                <!--<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>-->
                                            <!--</div>-->
                                        <!--</a>-->
                                    <!--</li>-->
                                    <!--<li class="mui-table-view-cell mui-media">-->
                                        <!--<a href="javascript:;">-->
                                            <!--<i><span class="iconfont icon-baoxiao"></span></i>-->
                                            <!--<div class="mui-media-body">-->
                                                <!--CBD-->
                                                <!--<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>-->
                                            <!--</div>-->
                                        <!--</a>-->
                                    <!--</li>-->
                                <!--</ul>-->


                                <!--<ul id="lists" class="list-container lists" v-for="todo in todos">-->
                                    <!--&lt;!&ndash;1:报销单 ,2:执行申请 ,3:资金申请&ndash;&gt;-->
                                    <!--<li v-if="todo.DanJuLeiXing==='1'">-->
                                        <!--<todo :to="{name:'bxcomp',params:{todo:todo}}" :todo="todo">-->
                                            <!--<i><span class="iconfont icon-baoxiao"></span></i>-->
                                        <!--</todo>-->
                                    <!--</li>-->
                                    <!--<li v-if="todo.DanJuLeiXing==='2'">-->
                                        <!--<todo :to="{name:'zxcomp',params:{todo:todo}}" :todo="todo">-->
                                            <!--<i><span class="iconfont icon-zhixing"></span></i>-->
                                        <!--</todo>-->
                                    <!--</li>-->
                                    <!--<li v-if="todo.DanJuLeiXing==='3'">-->
                                        <!--<todo :to="{name:'zjcomp',params:{todo:todo}}" :todo="todo">-->
                                            <!--<i><span class="iconfont icon-zijin"></span></i>-->
                                        <!--</todo>-->
                                    <!--</li>-->
                                <!--</ul>-->

                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div id="dialogDefined" style="display: none">-->
                <!--<div class="dialogInfo">-->
                    <!--<h4>切换单位</h4>-->
                    <!--<ul class="dw">-->

                    <!--</ul>-->
                <!--</div>-->
                <!--<div class="dialogBg"></div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
</template>

<script>
    import todo from '../components/todo.vue'
    export default {
        name: "todo-list",
        beforeRouteEnter (to, from, next) {
            // next(vm => {
            //     debugger
            //     vm.$http.get('static/data/dblist.json').then(res => {
            //         vm.todos = res.body.list
            //     })
            // })
            next();
        },
        components: {
            "todo": todo
        },
        data () {
            return {
                todos: []
            }
        },
        created() {
            let _this = this
            this.$http.get('static/data/dblist.json').then(res => {
                //_this.todos = res.body.list
                _this.$set(_this,'todos', res.body.list)
            })
        }
    }
</script>

<style lang="css" scoped>
@import "../assets/styles/iconfont.css";
</style>