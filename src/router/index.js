import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => {
        require(['@/components/Index'], resolve)
      }
    },
    {
      path: '/timer',
      name: 'Timer',
      component: resolve => {
        require(['@/components/Timer/timer'], resolve)
      }
    },
    {
      path: '/movie',
      name: 'Movie',
      component: resolve => {
        require(['@/components/Movie/movie.vue'], resolve)
      }
    }
  ]
})
