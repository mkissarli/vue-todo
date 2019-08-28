<template>
	<div class="todo-adder">
        <h3> ADD A NEW BOI </h3>
        <input type="text" placeholder="New todo" v-model="nT" @keydown.enter="newTodo(nT)">
	    <br />
	    <br />
	    <button type="submit" @click="newTodo(nT);">
            Add todo
        </button>
    </div>    
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

    import { TodoItem } from '../interfaces/todoItem';
    
	@Component
	export default class TodoAdder extends Vue {
		  @Prop() 
              private todoItem!: TodoItem;
              private nT!:       String;
          
          newTodo(nT: String){
              this.$store.dispatch('addTodo', nT);
          }
	}
</script>
