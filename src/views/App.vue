<template>
  <div id="app" class="container mx-auto h-full">
    <div>
      <router-view class=""></router-view>
    </div>
    <br />
    <p class="text-center text-gray-500 text-xs">
    &copy;2019 Malik Kissarli. All rights reserved.
  </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import userApi from "../services/user";
import Api from "../services/api";

@Component
export default class App extends Vue {
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

html,
body,
#app {
  height: 100%;
  width: 100vw;
  @apply bg-gray-200;
}
</style>
