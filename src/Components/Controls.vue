<script setup lang="ts">
import { useTodosStore } from "@/store/todos";
import { useField } from "vee-validate";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const todosStore = useTodosStore();
const { value, errorMessage, meta, resetField } = useField<string>("text", isValid);

function isValid(value: string): string | boolean {
  return value.trim() ? true : t("requiredValue");
}

const addTodo = () => {
  if (!value.value.trim() && !meta.valid) return;

  todosStore.addTodo({
    title: value.value
  });

  value.value = "";
};
</script>

<template>
  <form class="controls" @submit.prevent="addTodo">
    <input
      class="input"
      type="text"
      @blur="resetField()"
      :placeholder="t('description')"
      v-model.trim="value"
    />
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <button class="button" :disabled="!meta.valid">{{ t("add") }}</button>
  </form>
</template>

<style scoped>
.controls {
  background: #5f6367;
  color: #ffffff;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  margin: 20px 0;
  gap: 16px;
}
.input {
  background: #dcb47a;
  font-weight: 700;
  outline: none;
  color: #ffffff;
  border: none;
  width: 70%;
  padding: 10px 15px;
  border-radius: 15px;
}

.input::placeholder {
  color: #ffffff;
}

.button {
  background: #dcb47a;
  font-weight: 700;
  border: none;
  color: #ffffff;
  cursor: pointer;
  width: 30%;
  padding: 10px 15px;
  border-radius: 15px;
}
</style>
