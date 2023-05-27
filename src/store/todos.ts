import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import { useStorage } from "@vueuse/core";
import type { ITodo } from "@/types";

export const useTodosStore = defineStore("todos", () => {
  const todos = useStorage<ITodo[]>("todos", []);

  function addTodo(data: Omit<ITodo, "id" | "complited">) {
    todos.value.push({
      id: uuid(),
      complited: false,
      ...data
    });
  }

  function removeTodo(id: string) {
    todos.value = todos.value.filter((e) => e.id !== id);
  }

  function toggleTodo(id: string) {
    const todo = todos.value.findIndex((e) => e.id === id);
    todos.value[todo].complited = !todos.value[todo].complited;
  }

  return { todos, addTodo, removeTodo, toggleTodo };
});
