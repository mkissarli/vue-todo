<template>
	<div class="todo">
		<li>
			<span @click="onClick">
				<span v-if="(todoItem.isCurrent)">{{ todoItem.text }}</span>
				<span v-else><del>{{ todoItem.text }}</del></span>
			</span>
		</li>
		<h3> {{ value }} </h3>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	import { TodoItem } from '../interfaces/todoItem';

	@Component
	export default class Todo extends Vue {
		  @Prop() 
			  private todoItem!: TodoItem;
		  
		  onClick (): void {
			  if(this.todoItem.isCurrent == true){
				this.todoItem.isCurrent = false;
	    	} else {
				this.todoItem.isCurrent = true;
	    	}	  
		  }

		  get value () {
			  return this.$store.state.test;
		  }
	}
</script>
