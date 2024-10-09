<script setup>
import CaloriesList from '../components/CaloriesList.vue'
import { getAllCalories } from '../store.js'
</script>

<template>
  <CaloriesList v-model="getAllCalories" />
</template>