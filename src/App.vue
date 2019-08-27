<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo v-bind:todoItem="item"></todo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todo, { TodoItem } from './components/todo.vue';

@Component({
  components: {
    Todo,
  },
})
export default class App extends Vue {
  private item: TodoItem = {
    text: 'Testing!!!!',
    isCurrent: true,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
