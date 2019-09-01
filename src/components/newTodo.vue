<template>
	<div class="todo-adder flex mb-4 justify-center">
        <div class="w-full md:w-1/2 lg:w-1/3">
            <h3 class="font-bold font-mono text-xl font-extrabold tracking-wide text-gray-700"> ADD A NEW BOI </h3>
            <div class="flex mb-4 w-full h-12 text-center justify-center">
                <input
                    class="font-bold py-3 w-4/6 h-12 px-8 focus:shadow-outline focus:bg-blue-100" 
                    type="text"
                    placeholder="New todo"
                    v-model="nT"
                    @keydown.enter="newTodo(nT)">
    	        <button class="btn btn-blue w-2/6" type="submit" @click="newTodo(nT);">
                    Add todo
                </button>
            </div>
        </div>
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


<style>
  .btn {
    @apply font-bold align-middle px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>
