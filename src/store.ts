import Vue from 'vue'
import Vuex from 'vuex'

//import TodoModel from './model/todoModel';

import Todo from './components/todo.vue';
import { TodoItem } from './interfaces/todoItem';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      todos: Array<TodoItem>(),
    },

    getters: {
      currentTodos: state =>{
        return state.todos.filter(todo => todo.isCurrent)
      },
      doneTodos: state => {
        return state.todos.filter(todo => !(todo.isCurrent))
      }
    },
  
    mutations: {
      addTodo(state, text: String) {
        var value = <TodoItem>{
          id: (state.todos).length,
          text: text,
          isCurrent: true
        };
        state.todos.push(value);
      },

    },
    actions: {
      addTodo(context, text: String) {
        context.commit('addTodo', text);
      },
      switchTodoStatus(contex, item: TodoItem){

      }
    }
  });

  