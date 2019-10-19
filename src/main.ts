import Vue from 'vue';
Vue.config.productionTip = false;

import '@/assets/css/tailwind.css'
import App from './views/App.vue';

import VueRouter from 'vue-router';
import router from './helpers/router';
import store from './helpers/store';

import Api from './services/api';

Vue.use(VueRouter)

new Vue({
  router,
  store,
  methods: {
    getTodos: async function () {
      return this.$store.dispatch("getTodos");
    }
  },
  beforeMount() {
    try { Api.headers['Authorization'] = '';}
    catch { };
    this.getTodos();
  },
  created() {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  },
  render: h => h(App)
}).$mount('#app')
