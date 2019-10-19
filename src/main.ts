import Vue from 'vue';
import App from './App.vue';
import store from './store';

import axios from 'axios';
axios.defaults.headers.common["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbGlrIiwiaWQiOiI1ZGE4NzhlYmZlZTU5MzQyYjBlMzllMWUiLCJpYXQiOjE1NzEzMjIwOTF9.8V3iVf2Ax7X4g7UImx5moxhXtXyk274S_j1c-HedBTg";

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import Todos from './Todos.vue';
import Login from './Login.vue';
import Signup from './Signup.vue';

import Api from './services/api';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      redirect: '/login'
    },
    { path: '/login',  component: Login },
    { path: '/signup', component: Signup },
    { path: '/todos',  component: Todos }
  ]
})

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
