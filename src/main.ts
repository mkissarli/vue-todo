import Vue from 'vue';
import App from './App.vue';
import store from './store';

import axios from 'axios';
axios.defaults.headers.common["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbGlrIiwiaWQiOiI1ZGE4NzhlYmZlZTU5MzQyYjBlMzllMWUiLCJpYXQiOjE1NzEzMjIwOTF9.8V3iVf2Ax7X4g7UImx5moxhXtXyk274S_j1c-HedBTg";

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import Todos from './Todos.vue';

Vue.use(VueRouter)

const Login = {
  template: '<div style = "border-radius:20px;background-color:cyan;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 1</div>'
}

const Signup = {
  template: '<div>Sign up</div>'
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      redirect: '/login'
    },
    {path: '/login', component: Login},
    {path: '/todos', component: Todos}
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
    this.getTodos();
  },
  created() {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  },
  render: h => h(App)
}).$mount('#app')
