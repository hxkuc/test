import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainWindow',
      component: require('@/components/public/mainWindow.vue').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/backGround',
      name: 'backGround',
      component: require('@/components/backGround').default
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/components/home').default
    },
    {
      path: '/dataWindow',
      name: 'dataWindow',
      component: require('@/components/dataWindow').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/login').default
    },
    {
      path: '/register',
      name: 'register',
      component: require('@/components/register').default
    },
    {
      path: '/answer',
      name: 'answer',
      component: require('@/components/answer').default
    },
    {
      path: '/answering',
      name: 'answering',
      component: require('@/components/answering').default
    },
    {
      path: '/finishAnswer',
      name: 'finishAnswer',
      component: require('@/components/finishAnswer').default
    },
    {
      path: '/setting',
      name: 'setting',
      meta: {
        title: '设置'
      },
      component: require('@/components/setting').default
    }
  ]
})
