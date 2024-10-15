<script setup>
import { ref } from 'vue'
import CalorieForm from '../components/CalorieForm.vue'
import { addCalorie } from '../store'
import { newId } from '../id-generator.js'

const id = newId();

const newCalorie = ref(
  { 
    id: id,
    product: "",
    weight_g_ml: null,
    kcal_per_100: null,
  },
);

const submitForm = () => {
  const submitCalorie = Object.assign({}, newCalorie.value);
  addCalorie(submitCalorie);
};
</script>

<template>
  <CalorieForm v-model:data="newCalorie" @submit="submitForm()" />
</template>