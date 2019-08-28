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
      ADD_TODO(state, text: String) {
        var idVal: Number = state.todos.length;
        //alert(state.todos.length);
        //if(state.todos.length) { idVal = state.todos.length } else { idVal = 0;}
        var value = <TodoItem>{
          id: idVal,
          text: text,
          isCurrent: true
        };
        state.todos.push(value);
      },
      TOGGLE_TODO: (state, id: Number) => {
        var item = state.todos.find(todo => todo.id === id);
        if(item){
          item.isCurrent = !item.isCurrent;
        };
      },
      EDIT_TODO: (state, params: {id: Number, text: String}) => {
        var item = state.todos.find(todo => todo.id === params.id);
        if(item){
          item.text = params.text;
        }
      },
      DELETE_TODO: (state, payload) => {
        var index = state.todos.findIndex(todo => todo.id === payload);
        state.todos.splice(index, 1);
      }
    },
    actions: {
      addTodo(context, text: String) {
        context.commit('ADD_TODO', text);
      },
      toogleTodo(context, id: Number){
        context.commit('TOGGLE_TODO', id);
      },
      editTodo(context, params: { id: Number, text: String }){
        context.commit('EDIT_TODO', params);
      },
      deleteTodo(context, id: Number){
        context.commit('DELETE_TODO');
      } 
    }
  });

  