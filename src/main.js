import Vue from 'vue'
import App from './App.vue'



import VueRouter from 'vue-router'

import tabindex from "./views/index.vue"
import tabclassify from "./views/classify.vue"
import taborder from "./views/order.vue"
import tabmy from "./views/my.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: "/tabindex",
    component: tabindex
  },
  {
    path: "/tabclassify",
    component: tabclassify
  },
  {
    path: "/taborder",
    component: taborder
  },
  {
    path: "/tabmy",
    component: tabmy
  }
]
const router = new VueRouter({
  routes
});

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
