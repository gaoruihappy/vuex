import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mixin from '@/components/mixin'
import Count from '@/components/count'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mixin',
      name: 'mymixin',
      component: Mixin
    },
    {
      path: '/',
      name: 'count',
      component: Count
    }
  ]
})
