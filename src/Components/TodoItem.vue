<script setup lang="ts">
import type { ITodo } from "@/types";
import { useTodosStore } from "@/store/todos";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const todo = defineProps<ITodo>();
const todosStore = useTodosStore();
</script>

<template>
  <li class="todo">
    {{ todo.title }}
    <input
      @change="todosStore.toggleTodo(todo.id)"
      class="checkbox"
      type="checkbox"
      :checked="todo.complited"
    />
    <button class="button" @click="todosStore.removeTodo(todo.id)">{{ t("delete") }}</button>
  </li>
</template>

<style scoped>
.todo {
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
  gap: 20px;
  word-wrap: break-word;
  color: #ffffff;
  padding: 15px;
  border-radius: 5px;
}

.todo:first-child {
  border-radius: 24px 24px 0 0;
}
.todo:last-child {
  border-radius: 0 0 24px 24px;
}
.button {
  background: #dcb47a;
  border-radius: 28px;
  padding: 15px;
  outline: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

.button:hover,
.button:active {
  background: #b69461;
}

.checkbox {
  appearance: none;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  transition: background 300ms ease;
  cursor: pointer;
}

.checkbox:hover {
  background: #b5b5b5;
}

.checkbox:checked {
  background: green;
}

.checkbox:checked::after {
  content: "\2713";
}
</style>
