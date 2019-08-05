<template>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="to">
            <span :class="['zmui-icon', icon]"></span>
            <div class="mui-media-body">{{text}}</div>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "grid",
        props: {
          to: {
              type: String,
              required: true
          },
          icon: {
              type: String,
              required: true
          },
          text: {
              type: String,
              required: true
          }
        },
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
.zmui-icon {
    font-size: 1.6em;
}
</style>