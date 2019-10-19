<template>
  <div id="login" class>
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto justify-center w-full max-w-xs"
    >
      <h2>Login</h2>
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
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': (noPassword || errorLoggingIn || errorSigningUp) }"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        />
        <p
          class="hidden"
          v-bind:class="{'invisible': (!noPassword || !errorLoggingIn || !errorSigningUp)}"
        >You discovered an easter egg.</p>
        <p
          class="text-red-500 text-xs italic"
          v-bind:class="{ 'hidden': !noPassword }"
        >Please choose a password.</p>
        <p
          class="text-red-500 text-xs italic"
          v-bind:class="{ 'hidden': !errorLoggingIn}"
        >Username or password are incorrect.</p>
        <p
          class="text-red-500 text-xs italic"
          v-bind:class="{ 'hidden': !errorSigningUp}"
        >That user already exists.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="doLogin(username, password)"
        >Login</button>
        <button
          type="button"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="doSignup(username, password)"
        >Signup!</button>
        </a>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import userApi from "../services/user";
import Api from "../services/api";

@Component
export default class Login extends Vue {
  noPassword: boolean = false;
  errorLoggingIn: boolean = false;
  errorSigningUp: boolean = false;

  async doLogin(username: string, password: string) {
    if (password === undefined || password.trim() === "") {
      this.noPassword = true;
    } else {
      var response = (await userApi.loginUser(username, password)).data.data
        .loginUser;
      var token = response.token;
      console.log(response);
      if (response.success) {
        this.errorLoggingIn = false;
        this.errorSigningUp = false;
        this.noPassword = false;

        try {
          Api.headers["Authorization"] = token;
        } catch {}
        this.$store.dispatch("getTodos");

        this.$router.push({ path: "/todos" });
      } else {
        this.errorLoggingIn = true;
        this.errorSigningUp = false;
        this.noPassword = false;
      }
    }
  }

  async doSignup(username: string, password: string) {
    if (password === undefined || password.trim() === "") {
      this.noPassword = true;
    } else {
      var response = (await userApi.addUser(username, password)).data.data
        .addUser;
      var token = response.token;
      if (response.success) {
        this.errorLoggingIn = false;
        this.errorSigningUp = false;
        this.noPassword = false;

        try {
          Api.headers["Authorization"] = token;
        } catch {}
        this.$store.dispatch("getTodos");

        this.$router.push({ path: "/todos" });
      } else {
        this.errorLoggingIn = false;
        this.errorSigningUp = true;
        this.noPassword = false;
      }
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
