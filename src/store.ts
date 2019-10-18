import Vue from 'vue'
import Vuex from 'vuex'

//import TodoModel from './model/todoModel';

import Todo from './components/todo.vue';
import { TodoItem } from './interfaces/todoItem';


import userApi from "./services/user";
import todoApi from "./services/todo";

Vue.use(Vuex)

import axios from 'axios';
import api from './services/api';
//axios.defaults.headers.common["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbGlrIiwiaWQiOiI1ZGE4NzhlYmZlZTU5MzQyYjBlMzllMWUiLCJpYXQiOjE1NzEzMjIwOTF9.8V3iVf2Ax7X4g7UImx5moxhXtXyk274S_j1c-HedBTg";

export default new Vuex.Store({
  state: {
    todos: Array<TodoItem>(),
    deleteTodo: TodoItem,
    deleteHappening: Boolean(),
  },

  getters: {
    currentTodos: state => {
      return state.todos.filter(todo => todo.isCurrent)
    },
    doneTodos: state => {
      return state.todos.filter(todo => !(todo.isCurrent))
    },

    deleteHappening: state => {
      return state.deleteHappening;
    },

    todoBeingDeleted: state => {
      if (state.deleteHappening) {
        return state.deleteTodo;
      } else {
        return null;
      }
    }
  },

  mutations: {
    async ADD_TODO(state, text: string) {
      var idVal = (await todoApi.addTodo(text)).data.data.todo.id;
      //var idVal: Number = state.todos.length;
      //alert(state.todos.length);
      //if(state.todos.length) { idVal = state.todos.length } else { idVal = 0;}
      var value = <TodoItem>{
        id: idVal,
        text: text,
        isCurrent: true
      };
      state.todos.push(value);
    },
    async TOGGLE_TODO(state, id: Number) {
      await todoApi.toggleTodo((id).toString());
      var item = state.todos.find(todo => todo.id === id);
      if (item) {
        item.isCurrent = !item.isCurrent;
      };
    },
    async EDIT_TODO(state, params: { id: Number, text: string }) {
      todoApi.editTodo(params.id.toString(), params.text);
      var item = state.todos.find(todo => todo.id === params.id);
      if (item) {
        item.text = params.text;
      }
    },
    async DELETE_TODO(state) {
      await todoApi.deleteTodo(state.deleteTodo.id);
      var index = state.todos.findIndex(todo => todo.id === state.deleteTodo.id);
      state.todos.splice(index, 1);
    },
    ADD_TODO_FOR_DELETE(state, payload: TodoItem) {
      state.deleteHappening = true;
      state.deleteTodo = payload;
    },
    REMOVE_TODO_DELETE(state) {
      state.deleteHappening = false;
    },
    SET_TODOS(state, todos) { state.todos = todos; }
  },
  actions: {
    addTodo(context, text: String) {
      context.commit('ADD_TODO', text);
    },
    toogleTodo(context, id: Number) {
      context.commit('TOGGLE_TODO', id);
    },
    editTodo(context, params: { id: Number, text: String }) {
      context.commit('EDIT_TODO', params);
    },
    deleteTodo(context) {
      context.commit('DELETE_TODO');
    },
    addTodoForDelete(context, todo: TodoItem) {
      context.commit('ADD_TODO_FOR_DELETE', todo);
    },
    removeTodoDelete(context) {
      context.commit('REMOVE_TODO_DELETE');
    },
    async getTodos(context) {
      const todos = (await userApi.getTodos()).data.data.me.todos;
      console.log(todos);
      context.commit('SET_TODOS', todos);
    },
  }
});

