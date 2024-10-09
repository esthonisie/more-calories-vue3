<script setup>
  import CaloriesList from '../components/CaloriesList.vue'
  import { getAllCalories } from '../store.js'

  const calories = getAllCalories;
</script>

<template>
  <CaloriesList v-model="calories" />
</template>