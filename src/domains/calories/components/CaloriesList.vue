<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const showCalories = defineModel();

const calcTotal = computed(
  () => showCalories.value.reduce(
    (acc, item) => acc + ((item.kcal_per_100 / 100) * item.weight_g_ml), 0 
  ) 
);
</script>

<template>
  <div class="calories-main-container">
    <template v-for="calorie in showCalories" :key="calorie.id">
      <div class="calories-product-container">
        <div class="calories-name-edit-container">
          <p>{{ calorie.product }}</p>
          <RouterLink :to="`/edit/${calorie.id}`" class="calorie-edit-link">edit</RouterLink>
          <p class="calorie-delete-link">x</p>
        </div>
        <p>{{ Math.round((calorie.kcal_per_100 / 100) * calorie.weight_g_ml) }} kcal</p>
      </div>
      <div class="calories-info-container">
        <p>weight in g/ml: {{ calorie.weight_g_ml }}</p>
        <p>calories per 100 g/ml: {{ calorie.kcal_per_100 }}</p>
      </div>
    </template>
  </div>
  <div class="total-calories-main-container">
    <div class="total-calories-text-container">
      <p>Total of Calories:</p>
      <p>{{ Math.round(calcTotal) }} kcal</p>
    </div>  
  </div>
</template>

<style scoped>
  .calories-main-container {
    padding: 5px 0 8px;
  }

  .calories-product-container,
  .calories-name-edit-container,
  .total-calories-text-container {
    color: #fff7e9;
    display: flex;
    justify-content: space-between;
  }

  .calorie-edit-link {
    color: #58c3ca;
    margin: 0 10px;
  }

  .calorie-delete-link {
    color: #d41717;
    font-weight: 900;
    margin-right: 10px;
  }

  .calories-product-container {
    background-color: #303030;
    padding: 0 10px;
    margin-top: 4px;
  }

  .calories-info-container {
    color: #a09c95;
    font-size: 12px;
    text-transform: uppercase;
    padding: 0 10px;
  }

  .total-calories-main-container {
    border-top: 1px solid #58c3ca;
  }

  .total-calories-text-container {
    font-weight: 700;
    padding: 5px 10px 8px;
  }

  input {
    max-width: 75px;
    color: #fff7e9;
    background-color: transparent;
    border: 1px solid #fff7e9;
  }
</style>