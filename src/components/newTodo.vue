<template>
	<div class="todo-adder">
        <h3> ADD A NEW BOI </h3>
        <input type="text" placeholder="New todo" v-model="nT">
	    <br />
	    <br />
	    <button type="submit" v-on:click="newTodo(nT);">Add todo</button>
    </div>    
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

    import { TodoItem } from '../interfaces/todoItem';
    
	@Component
	export default class TodoAdder extends Vue {
		  @Prop() 
			  private todoItem!: TodoItem;
          
          newTodo(nT: String){
              var value = <TodoItem>{
                  id: (this.$store.state.todos).length,
                  text: nT,
                  isCurrent: true
              };
              this.$store.commit("addTodo", value);
          }
	}
</script>
