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
</template>

<script>
    import todo from '../components/todo.vue'
    export default {
        name: "todo-list",
        components: {
            "todo": todo
        },
        data () {
            return {
                todos: []
            }
        },
        created() {
            let self = this
            this.$http.get('static/data/dblist.json').then(res => {
                self.todos = res.body.list
            })
        }
    }
</script>

<style lang="css" scoped>
@import "../assets/styles/iconfont.css";
</style>