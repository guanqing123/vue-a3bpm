<template>
    <div id="todoList">
        <div style="position: relative">
            <div class="page navbar js_show">
                <div class="page__bd" style="height: 100%;">
                    <div class="weui-tab">
                        <div class="weui-tab__panel">
                            <div class="list-block">
                                <ul id="lists" class="list-container lists" v-for="todo in todos">
                                    <!--1:报销单 ,2:执行申请 ,3:资金申请-->
                                    <li v-if="todo.DanJuLeiXing==='1'">
                                        <todo :to="{name:'bxcomp',params:{todo:todo}}" :todo="todo">
                                            <i><span class="iconfont icon-baoxiao"></span></i>
                                        </todo>
                                    </li>
                                    <li v-if="todo.DanJuLeiXing==='2'">
                                        <todo :to="{name:'zxcomp',params:{todo:todo}}" :todo="todo">
                                            <i><span class="iconfont icon-zhixing"></span></i>
                                        </todo>
                                    </li>
                                    <li v-if="todo.DanJuLeiXing==='3'">
                                        <todo :to="{name:'zjcomp',params:{todo:todo}}" :todo="todo">
                                            <i><span class="iconfont icon-zijin"></span></i>
                                        </todo>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="dialogDefined" style="display: none">
                <div class="dialogInfo">
                    <h4>切换单位</h4>
                    <ul class="dw">

                    </ul>
                </div>
                <div class="dialogBg"></div>
            </div>
        </div>
    </div>
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
@import "../assets/fonts/iconfont.css";
</style>