<script setup>
  import { ref, computed } from 'vue'
  
  const calories = ref([
    { product: "Rozijnen", kcal_per_100: 324, weight_g_ml: 5 },
    { product: "Pompoenpitten", kcal_per_100: 605, weight_g_ml: 10 },
    { product: "Notenmix", kcal_per_100: 668, weight_g_ml: 15 },
    { product: "Gepofte spelt", kcal_per_100: 364, weight_g_ml: 5 },
    { product: "Jordans Granola", kcal_per_100: 446, weight_g_ml: 25 },
  ]);

  const calcTotal = computed(
    () => calories.value.reduce(
      (acc, item) => acc + ((item.kcal_per_100 / 100) * item.weight_g_ml), 0 
    ) 
  );
</script>

<template>
  <div class="mainContainer">
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Kcal per 100 g/ml</th>
          <th>Weight in g/ml</th>
          <th>Kcal subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="calorie in calories">
          <td>{{ calorie.product }}</td>
          <td>{{ calorie.kcal_per_100 }}</td>
          <td>{{ calorie.weight_g_ml }}</td>
          <td>
            {{ Math.round((calorie.kcal_per_100 / 100) * calorie.weight_g_ml) }}
          </td>
        </tr>
        <tr>
          <th colspan="3">Kcal total</th>
          <td>{{ Math.round(calcTotal) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .mainContainer {
    width: 768px;
    height: 481px;
    margin: 40px auto;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    text-align: left;
  }
</style>