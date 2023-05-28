<script setup lang="ts">
import { useTodosStore } from "@/store/todos";
import { useField, useForm } from "vee-validate";
import { useI18n } from "vue-i18n";
import * as yup from "yup";

const todosStore = useTodosStore();

interface Form {
  text: string;
}

const { t } = useI18n();

const schema = yup.object({
  text: yup.string().required(t("requiredValue"))
});

const { errors, values, meta } = useForm<Form>({
  validationSchema: schema
});

const { value: textValue } = useField("text");

function addTodo() {
  todosStore.addTodo({ title: values.text });
  textValue.value = "";
}
</script>

<template>
  <form class="controls" @submit.prevent="addTodo">
    <input
      class="input"
      type="text"
      :placeholder="$t('description')"
      name="text"
      v-model="textValue"
    />
    <p class="error-message" v-if="errors.text">{{ errors.text }}</p>
    <button class="button" type="submit" :disabled="!meta.valid">{{ $t("add") }}</button>
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
  background: #e8c084;
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
.error-message {
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
