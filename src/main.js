import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import mitt from 'mitt'
Vue.config.productionTip = false

// Vue.config.globalProperties.$bus=new mitt()
const app=new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
app.$bus=new mitt()


