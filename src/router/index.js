import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/vue/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    {
      path: '/',
      name: 'home',
      component: resolve => require.ensure([], () => resolve(require('@/vue/home')), 'home')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: resolve => require.ensure([], () => resolve(require('@/vue/timeline')), 'timeline')
    },
    {
      path: '/singleItem',
      name: 'singleItem',
      component: resolve => require.ensure([], () => resolve(require('@/components/singleItem')), 'singleItem')
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require.ensure([], () => resolve(require('@/vue/index')), 'index')
    }
  ]
})
