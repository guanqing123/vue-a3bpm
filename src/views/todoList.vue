<template>
    <div id="todoList">
        <div style="position: relative">
            <div class="page navbar js_show">
                <div class="page__bd" style="height: 100%;">
                    <div class="weui-tab">
                        <div class="weui-tab__panel">
                            <div class="list-block">
                                <ul id="lists" class="list-container lists" v-for="todo in todos">
                                    <li v-if="todo.DanJuLeiXing==='1'">
                                        <a class='listItem' :rwid='todo.RenWuID' :jd='todo.DangQianJD'>
                                            <i><span style='color:#1e90ff' class="iconfont">&#xe721;</span></i>
                                            <div class="listsInfo">
                                                <h4>{{todo.BiaoTi}}</h4>
                                                <div class="clearfix">
                                                    <span v-if="todo.ShenQingBM!=''">{{todo.ShenQingBM}}/{{todo.ShenQingR}}</span>
                                                    <time class="fr">{{todo.ShenQingSJ}}</time>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li v-if="todo.DanJuLeiXing==='2'">
                                        <a class='zxApply' :rwid='todo.RenWuID' :jd='todo.DangQianJD'>
                                            <i><span style='color:#34dbe4' class=\"iconfont\">&#xe637;</span></i>
                                            <div class="listsInfo">
                                                <h4>{{todo.BiaoTi}}</h4>
                                                <div class="clearfix">
                                                    <span v-if="todo.ShenQingBM!=''">{{todo.ShenQingBM}}/{{todo.ShenQingR}}</span>
                                                    <time class="fr">{{todo.ShenQingSJ}}</time>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li v-if="todo.DanJuLeiXing==='3'">
                                        <a class='listItem' :rwid='todo.RenWuID' :jd='todo.DangQianJD'>
                                            <i><span style='color:#fe75ff' class=\"iconfont\">&#xe653;</span></i>
                                            <div class="listsInfo">
                                                <h4>{{todo.BiaoTi}}</h4>
                                                <div class="clearfix">
                                                    <span v-if="todo.ShenQingBM!=''">{{todo.ShenQingBM}}/{{todo.ShenQingR}}</span>
                                                    <time class="fr">{{todo.ShenQingSJ}}</time>
                                                </div>
                                            </div>
                                        </a>
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
    export default {
        name: "todo-list",
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$http.get('http://127.0.0.1:8000/src/data/dblist.json').then(res => {
                    // debugger
                    vm.todos = res.body.list
                })
            })
        },
        data () {
            return {
                todos: []
            }
        }
    }
</script>

<style scoped>

</style>