import Vue from 'vue';
import App from './App.vue';
import install from '@/server/install';
import store from './store/store';
import walert from './server/alert';
import wnotice from './server/notice';
import router from './router/router';
import Http from './axios';
import axiosInerceptors from './axios/interceptors';

Vue.config.productionTip = false;
Vue.prototype.$alert = walert.alert;
Vue.prototype.$notice = wnotice.notice;
Vue.prototype.Http = Http;

Vue.use(install);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
