import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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
      path: '/',
      name: 'count',
      component: Count
    }
  ]
})
