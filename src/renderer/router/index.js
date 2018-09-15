import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexpage',
      component: require('@/components/IndexPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
