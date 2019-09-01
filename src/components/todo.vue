<template>
  <div class="todo flex mb-4 justify-center">
    <li class="list-none w-full md:w-1/2 lg:w-1/3">
      <div class="bg-gray-400 rounded-lg">
        <div v-if="todoItem.id == editId && editHappening">
          <input
            class="font-bold py-2 w-full h-12 px-2 focus:shadow-outline focus:bg-blue-100"
            type="text"
            v-model="text"
            @blur="cancelEdit()"
            @keyup.enter="editItem(todoItem, text)"
            ref="editInput"
          />
        </div>
        <div class="flex mb-4" v-else-if="todoItem.isCurrent">
          <div
            class="font-bold w-4/6 h-12 py-3 px-8 text-left"
            v-on:click="onClick(todoItem.id)"
          >{{ todoItem.text }}</div>
          <button class="btn btn-blue w-1/6 h-12" v-on:click="setEditItem(todoItem)">Edit</button>
          <button class="btn btn-red w-1/6 h-12" v-on:click="confirmDelete(todoItem)">Delete</button>
        </div>
        <div
          class="font-bold py-3 px-8 w-5/6 h-12 line-through text-left"
          v-on:click="onClick(todoItem.id)"
          v-else
        >{{ todoItem.text }}</div>
      </div>
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { TodoItem } from "../interfaces/todoItem";
import Confirm from "../components/confirm.vue";

@Component({
  components: {
    Confirm
  }
})
export default class Todo extends Vue {
  @Prop()
  private todoItem!: TodoItem;
  private editHappening: Boolean = false;
  private editId: Number = 0;

  onClick(id: Number): void {
    this.$store.dispatch("toogleTodo", id);
  }

  confirmDelete(todo: TodoItem): void {
    this.$store.dispatch('addTodoForDelete', todo)
  }

  setEditItem(item: TodoItem): void {
    this.editId = item.id;
    this.editHappening = true;
    this.$nextTick(function() {
      this.$refs.editInput.value = item.text;
      this.$refs.editInput.focus();
    });
  }

  editItem(item: TodoItem, newText: String): void {
    this.editHappening = false;
    this.$store.dispatch("editTodo", { id: item.id, text: newText });
  }

  cancelEdit(): void {
    this.editHappening = false;
  }

  startHold(id: Number) {}
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
.btn-red {
  @apply bg-red-500 text-white;
}
.btn-red:hover {
  @apply bg-red-700;
}
</style>
