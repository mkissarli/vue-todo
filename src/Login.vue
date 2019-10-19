<template>
  <div id="login" class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': noPassword }"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        />
        <p class="text-red-500 text-xs italic" v-bind:class="{ 'visible': noPassword }">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click='doLogin(username, password)'
        >Sign In</button>
        <!--<a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
        </a>-->
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import userApi from './services/user';
import Api from './services/api';

@Component
export default class Login extends Vue {
  noPassword: true;

  async doLogin(username: string, password: string){
    if(password == ""){
      noPassword = true;
    } else {
      var response = await userApi.loginUser(username, password);
      var token = response.data.data.loginUser.token;
      try { Api.headers['Authorization'] = token;}
      catch { };
      console.log(response);
      console.log(token);
      this.$store.dispatch("getTodos")
    }
  }
}
</script>

<style>
#login {
  text-align: center;
  margin-top: 60px;
}
</style>
