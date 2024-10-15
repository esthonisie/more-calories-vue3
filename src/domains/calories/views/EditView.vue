<script setup>
import { useRoute } from 'vue-router'
import { getCalorieById } from '../store'
import { getIndexOfCalorie } from '../store'
import { updateCalorie } from '../store'
import CalorieForm from '../components/CalorieForm.vue'

const route = useRoute();

const id = parseInt(route.params.id);

const getCalorieData = getCalorieById(id);

const calorie = Object.assign({}, getCalorieData.value);

const submitForm = () => {
  const index = getIndexOfCalorie(id);
  updateCalorie(index.value, calorie);
};
</script>

<template>
  <CalorieForm v-model:data="calorie" @submit="submitForm()" />
</template>