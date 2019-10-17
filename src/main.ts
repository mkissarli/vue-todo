import Vue from 'vue';
import App from './App.vue';

import store from './store';

import axios from 'axios';
axios.defaults.headers.common["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbGlrIiwiaWQiOiI1ZGE4NzhlYmZlZTU5MzQyYjBlMzllMWUiLCJpYXQiOjE1NzEzMjIwOTF9.8V3iVf2Ax7X4g7UImx5moxhXtXyk274S_j1c-HedBTg";

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  methods: {
    getTodos: async function () {
      return this.$store.dispatch("getTodos");
    }
  },
  beforeMount() {
    this.getTodos();
  },
}).$mount('#app');
