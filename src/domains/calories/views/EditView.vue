<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { getCalorieById } from "../store";
import { getIndexOfCalorie } from "../store";
import { updateCalorie } from "../store";
import CalorieForm from "../components/CalorieForm.vue";

const route = useRoute();
const router = useRouter();

// TODO: "caloryId" beschrijft inhoud nog iets specifieker dan id
const id = parseInt(route.params.id);

const getCalorieData = getCalorieById(id);

const calorie = Object.assign({}, getCalorieData.value);

const submitForm = () => {
  const index = getIndexOfCalorie(id);
  updateCalorie(index.value, calorie);
  router.push({ name: "home" });
};

const btnText = ref("edit");
</script>

<template>
  <CalorieForm v-model:data="calorie" @submit="submitForm()"
    >{{ btnText }}
  </CalorieForm>
</template>
