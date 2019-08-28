<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo 
      v-for="item in todos"
      v-bind:todoItem="item"
      v-bind:key="item.id"
      ></todo>
    <todoAdder></todoAdder>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Todo from './components/todo.vue';
import TodoAdder from './components/newTodo.vue';

import { TodoItem } from './interfaces/todoItem';

@Component({
  components: {
    Todo,
    TodoAdder
  },
})
export default class App extends Vue {
  private items: TodoItem[] = [
    {
      id: 0,
      text: 'Testing!!!!',
      isCurrent: true,
    },
    {
      id: 1,
      text: 'And what!!!!',
      isCurrent: true,
    },
    {
      id: 2,
      text: 'Ya Boi!!!!',
      isCurrent: true,
    },
    {
      id: 3,
      text: 'Tipsy!!!!',
      isCurrent: true,
    },
  ]
  get todos () {
    return this.$store.state.todos;
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
