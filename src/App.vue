<script setup>
  import { ref, computed } from 'vue'
  
  const calories = ref([
    { product: "Rozijnen", kcal_per_100: 324, weight_g_ml: 5 },
    { product: "Pompoenpitten", kcal_per_100: 605, weight_g_ml: 10 },
    { product: "Notenmix", kcal_per_100: 668, weight_g_ml: 15 },
    { product: "Gepofte spelt", kcal_per_100: 364, weight_g_ml: 5 },
    { product: "Jordans granola", kcal_per_100: 446, weight_g_ml: 25 },
  ]);

  const calcTotal = computed(
    () => calories.value.reduce(
      (acc, item) => acc + ((item.kcal_per_100 / 100) * item.weight_g_ml), 0 
    ) 
  );
</script>

<template>
  <div class="main-container">
    <div class="calories-main-container">
      <template v-for="calorie in calories">
        <div class="calories-product-container">
          <p>{{ calorie.product }}</p>
          <p>{{ Math.round((calorie.kcal_per_100 / 100) * calorie.weight_g_ml) }} kcal</p>
        </div>
        <div class="calories-info-container">
          <p>weight in g/ml: 
            <input type="number" v-model="calorie.weight_g_ml">
          </p>
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

  .calories-main-container {
    padding: 5px 0 8px;
  }

  .calories-product-container,
  .total-calories-text-container {
    color: #fff7e9;
    display: flex;
    justify-content: space-between;
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