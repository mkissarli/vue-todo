<template>
	<div class="todo">
		<li>
			<span>
				<span v-if="todoItem.id == editId && editHappening">
    				<input
						type="text"
						v-model="text"
						@blur="cancelEdit()"
						@keyup.enter="editItem(todoItem, text)"
						ref="editInput">
				</span>
				<span v-else-if="todoItem.isCurrent">
						<span v-on:click="onClick(todoItem.id)">{{ todoItem.text }}</span>
						<button v-on:click="setEditItem(todoItem)"> Edit </button>	
				</span>
				<span v-else v-on:click="onClick(todoItem.id)"><del>{{ todoItem.text }}</del></span>
				
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
		  		private todoItem!:     TodoItem;
				private deleteId!:     Number;
				private editHappening: Boolean   = false;
				private editId:        Number    = 0;

		  onClick (id: Number): void {
			  this.$store.dispatch('toogleTodo', id);
		  }

		  setEditItem (item: TodoItem): void {
			this.editId = item.id;
			this.editHappening = true;
			this.$nextTick(function(){
				this.$refs.editInput.value = item.text;
        		this.$refs.editInput.focus();
       		});
		  }

		  editItem (item: TodoItem, newText: String): void {
			  this.editHappening = false;
			  this.$store.dispatch('editTodo', {id: item.id, text: newText});
		  }

		  cancelEdit () : void {
			  this.editHappening = false;
		  }

		  startHold(id: Number) {

		  }
	}
</script>
