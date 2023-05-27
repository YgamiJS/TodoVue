<script setup lang="ts">
import { computed } from "vue";
import type { ITodo } from "@/types";
import TodoItem from "./TodoItem.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps<{ todos: ITodo[] }>();
const reversed = computed(() => props.todos.slice().reverse());
</script>

<template>
  <div class="todo-list">
    <p class="no-todos" v-if="!props.todos.length">{{ t("no-todo") }}</p>
    <TransitionGroup v-else tag="ul" class="todos" name="todos">
      <TodoItem v-for="todo in reversed" v-bind="todo" :key="todo.id" />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.todos {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
}

.no-todos {
  background: #ff0000;
  font-weight: 600;
  padding: 15px;
  border-radius: 15px;
  color: #ffffff;
}

.todos-move,
.todos-enter-active,
.todos-leave-active {
  transition: all 0.5s ease;
}

.todos-enter-from,
.todos-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.todos-leave-active {
  position: absolute;
}
</style>
