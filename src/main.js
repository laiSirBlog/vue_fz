// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import ViewUI from 'view-design';
import '../my-theme/index.less';
import 'view-design/dist/styles/iview.css';

axios.defaults.baseURL = 'http://localhost:8443/api'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ViewUI);

const RouterConfig = {
  routes: Routers
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
