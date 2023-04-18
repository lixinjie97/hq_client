// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import Bus from './components/Bus'
import Clinic from './components/Clinic'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home,
  meta: {
    title: '首页'
  }
}, {
  path: '/bus',
  component: Bus,
  meta: {
    title: '班车时刻表'
  }
}, {
  path: '/clinic',
  component: Clinic,
  meta: {
    title: '卫生所值班安排表'
  }
}]

const router = new VueRouter({
  /* mode: 'history', */
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
