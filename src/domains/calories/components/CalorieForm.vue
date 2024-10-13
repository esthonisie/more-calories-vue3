<script setup>
import { addCalorie } from '../store';

const createNewCalorie = defineModel();
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label for="product">Product name:</label><br />
    <input id="product" name="product" 
      v-model="createNewCalorie.product"
    ><br />
    <label for="weight_g_ml">Weight in g/ml:</label><br />
    <input id="weight_g_ml" name="weight_g_ml" 
      v-model.number="createNewCalorie.weight_g_ml"
    ><br />
    <label for="kcal_per_100">Calories per 100 g/ml:</label><br />
    <input id="kcal_per_100" name="kcal_per_100" 
      v-model.number="createNewCalorie.kcal_per_100"
    ><br />
    <button @click="addCalorie(createNewCalorie)">Submit</button>
  </form>
</template>

<style scoped>
  form {
    color: #fff7e9;
    padding: 10px;
  }

  button {
    margin-top: 10px;
  }
</style>