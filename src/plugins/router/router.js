import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

let router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.use(VueRouter)
export default router