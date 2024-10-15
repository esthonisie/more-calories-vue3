<script setup>
const calorieData = defineModel("data");
</script>

<template>
  <form @submit.prevent="submitForm">
    <label for="product">Product name:</label><br />
    <input 
      id="product" 
      name="product"
      placeholder="e.g. Dark chocolate" 
      v-model="calorieData.product"
    ><br />
    <label for="weight_g_ml">Weight in g/ml:</label><br />
    <input 
      id="weight_g_ml" 
      name="weight_g_ml" 
      placeholder="e.g. 7 or 7.2"
      v-model.number="calorieData.weight_g_ml"
    ><br />
    <label for="kcal_per_100">Calories per 100 g/ml:</label><br />
    <input 
      id="kcal_per_100" 
      name="kcal_per_100" 
      placeholder="e.g. 543"
      v-model.number="calorieData.kcal_per_100"
    ><br />
    <button type="submit">Submit</button>
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