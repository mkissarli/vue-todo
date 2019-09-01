<template id="confirm">
  <div class="confirm-model">
    <div class="confirm-window w-full md:w-2/3 lg:w-2/5 md:rounded-lg">
      <p>This will delete the todo. Is this okay?</p>
      <div class="actions">
        <button class="cancel btn btn-blue" @click="onCancel">Cancel</button>
        <button class="confirm btn btn-red" @click="onConfirm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Confrim extends Vue {
  @Prop()
  private deleteHappening: boolean = false;
  private deleteId!: Number;

  deleteItem(): void {}

  onCancel(): void {
    this.$store.dispatch("removeTodoDelete");
  }

  onConfirm(): void {
    this.$store.dispatch("deleteTodo", this.deleteId);
    this.$store.dispatch("removeTodoDelete");
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
.btn-red {
  @apply bg-red-500 text-white;
}
.btn-red:hover {
  @apply bg-red-700;
}
.confirm-model {
  @apply fixed left-0 top-0 w-full h-full overflow-auto;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.confirm-window {
  @apply bg-green-300 p-8 border border-solid border-green-700;
  margin: 15% auto; /* 15% from the top and centered */
}
</style>