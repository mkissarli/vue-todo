<template>
  <div id="todos">
    <h1 class="font-bold font-mono text-4xl font-extrabold tracking-wide text-gray-700">Todos</h1>
    <todo v-for="item in currentTodos" v-bind:todoItem="item" v-bind:key="item.id"></todo>
    <h1 class="font-bold font-mono text-4xl font-extrabold tracking-wide text-gray-700">Done</h1>
    <todo v-for="item in doneTodos" v-bind:todoItem="item" v-bind:key="item.id"></todo>
    <todoAdder></todoAdder>

    <confirm v-if="deleteHappening"></confirm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Todo from "./components/todo.vue";
import TodoAdder from "./components/newTodo.vue";
import Confirm from "./components/confirm.vue";

import { TodoItem } from "./interfaces/todoItem";

@Component({
  components: {
    Todo,
    TodoAdder,
    Confirm
  }
})
export default class Todos extends Vue {
  get doneTodos() {
    return this.$store.getters.doneTodos;
  }
  get currentTodos() {
    return this.$store.getters.currentTodos;
  }
  get deleteHappening() {
    return this.$store.getters.deleteHappening;
  }
}
</script>

<style>
#todos {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body,
#todos {
  height: 100%;
  width: 100%;
  @apply bg-gray-200;
}
</style>
