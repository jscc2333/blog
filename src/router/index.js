import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/views/blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [{
    path: '/',
    name: 'BLog',
    component: Blog,
  }],
})
