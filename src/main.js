import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach((router) => {
  iView.LoadingBar.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
