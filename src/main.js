import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('assets/img/common/placeholder.png')
});

//给Vue原型添加$bus属性  对应的是一个 Vue 实例  作为事件总线
Vue.prototype.$bus = new Vue()

//安装toast自定义的插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
