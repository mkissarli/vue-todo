<template>
  <div id="app" class="container mx-auto h-full">
    <div>
      <router-link to="/signup">signup</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/todos">Todos</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

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
