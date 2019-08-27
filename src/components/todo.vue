
<template>
	<div class="todo">
		<li>
			<span @click="onClick">
				<span v-if="(todoItem.isCurrent)">{{ todoItem.text }}</span>
				<span v-else><del>{{ todoItem.text }}</del></span>
			</span>
		</li>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	export interface TodoItem {
		text:    String;
		isCurrent: Boolean;
	}

	@Component
	export default class Todo extends Vue {
		  @Prop() 
			  private todoItem!: TodoItem;
			  //text!: 	  String;
			  //isCurrent!: Boolean;
		  
		  
		  onClick (): void {
			//alert(this.todoItem.isCurrent);
			if(this.todoItem.isCurrent == true){
				this.todoItem.isCurrent = false;
	    	} else {
				this.todoItem.isCurrent = true;
	    	}	  
		  }
	}
</script>
