import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainWindow',
      component: require('@/pages/MainWindow.vue').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/backGround',
      name: 'backGround',
      component: require('@/components/public/BackGround').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/pages/Login').default
    },
    {
      path: '/register',
      name: 'register',
      component: require('@/pages/Register').default
    },
    {
      path: '/answer',
      name: 'answer',
      component: require('@/pages/BeginAnswer').default
    },
    {
      path: '/answering',
      name: 'answering',
      component: require('@/pages/Answering').default
    },
    {
      path: '/finishAnswer',
      name: 'finishAnswer',
      component: require('@/pages/FinishAnswer').default
    },
    {
      path: '/setting',
      name: 'setting',
      meta: {
        title: '设置'
      },
      component: require('@/pages/Setting').default
    },
    {
      path: '/settingQuestion',
      name: 'settingQuestion',
      meta: {
        title: '出题'
      },
      component: require('@/pages/SettingQuestion').default,
      children: [
        {
          path: 'index',
          component: () => import('@/pages/SettingQuestionIndex')
        }
      ]
    }
  ]
})
