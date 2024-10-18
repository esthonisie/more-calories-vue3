<script setup>
import { RouterView } from 'vue-router'
import Navigation from './domains/calories/components/Navigation.vue';
</script>

<template>
  <div class="main-container">
    <Navigation />
    <RouterView /> 
  </div>
</template>

<style scoped>
  .main-container {
    min-width: 360px;
    max-width: 360px;
    margin: 40px auto;
    border: 1px solid #58c3ca;
    border-radius: 8px;
  }
</style>