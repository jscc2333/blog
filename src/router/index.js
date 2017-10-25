import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/views/blog'
import Message from '@/views/message'
import About from '@/views/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [{
    path: '/home',
    name: 'BLog',
    component: Blog,

  }, {
    path: '/message',
    name: 'Message',
    component: Message,
  }, {
    path: '/about',
    name: 'About',
    component: About,
  }],
})
