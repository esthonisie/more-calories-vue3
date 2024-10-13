<script setup>
import { ref } from 'vue'
import CalorieForm from '../components/CalorieForm.vue'

const newCalorie = ref(
  { 
    product: "",
    weight_g_ml: 0, 
    kcal_per_100: 0,
  },
);
</script>

<template>
  <CalorieForm v-model="newCalorie" />
</template>