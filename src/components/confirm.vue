<template id="confirm">
  <div class="confirm-model w-full md:w-2/5 lg:w-1/3">
    <div class="confirm-window">
      <p>This will delete the todo. Is this okay?</p>
      <div class="actions">
        <button class="cancel" @click="onCancel">Cancel</button>
        <button class="confirm" @click="onConfirm">Delete</button>
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
.confirm-model {
  @apply absolute left-0 bg-green-700 text-white rounded-lg text-center content-center;
  height: 10vh;
  top: 35vh;
}
</style>