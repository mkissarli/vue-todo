import VueRouter from 'vue-router';

import Login from '../views/Login.vue';
import Todos from '../views/Todos.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      redirect: '/login'
    },
    { path: '/login',  component: Login },
    { path: '/todos',  component: Todos }
  ]
})