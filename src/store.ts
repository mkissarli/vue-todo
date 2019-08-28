import Vue from 'vue'
import Vuex from 'vuex'

//import TodoModel from './model/todoModel';

import TodoItem from './components/todo.vue';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      todos: Array<TodoItem>(),
    },
  
    mutations: {
      addTodo(state, todoItem: TodoItem) {
        state.todos.push(todoItem);
        console.log(todoItem);
      }
    },
    actions: {
      addTodo(context, todoItem: TodoItem) {
        context.commit('addTodo', todoItem);
      },
      switchTodoStatus(contex, item: TodoItem){

      }
    }
  });

  