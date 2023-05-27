<script setup lang="ts">
import { useTodosStore } from "./store/todos";
import Controls from "./Components/Controls.vue";
import TodoList from "./Components/TodoList.vue";

const todos = useTodosStore();
</script>

<template>
  <div class="app__container container">
    <Controls />
    <TodoList :todos="todos.todos" />
  </div>
</template>

<style scoped lang="scss"></style>
