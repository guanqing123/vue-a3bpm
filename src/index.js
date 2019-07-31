import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from  'vue-resource'
import App from './app.vue'

import createRouter from './config/router'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = createRouter()

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#root')