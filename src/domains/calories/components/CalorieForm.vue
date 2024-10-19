<script setup>
const calorieData = defineModel('data');
const btnText = defineModel('btnText');
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="labelContainer">
      <label for="product">Product name:</label>
    </div><br />
    <input 
      id="product" 
      name="product"
      placeholder="e.g. Dark chocolate" 
      v-model="calorieData.product"
    ><br />
    <div class="labelContainer">
      <label for="weight_g_ml">Weight in g/ml:</label>
    </div><br />
    <input 
      id="weight_g_ml" 
      name="weight_g_ml" 
      placeholder="e.g. 7 or 7.2"
      v-model.number="calorieData.weight_g_ml"
    ><br />
    <div class="labelContainer">
      <label for="kcal_per_100">Calories per 100 g/ml:</label>
    </div><br />
    <input 
      id="kcal_per_100" 
      name="kcal_per_100" 
      placeholder="e.g. 543"
      v-model.number="calorieData.kcal_per_100"
    ><br />
    <div class="btnContainer">
      <button type="submit">{{ btnText }}</button>
    </div>
  </form>
</template>

<style scoped>
  form {
    color: #fff7e9;
    padding: 9px 10px 18px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .labelContainer {
    background-color: #303030;
    margin: 0 -10px;
    padding: 0 10px 2px;
  }

  input {
    border: 0;
    z-index: 10;
    color: #afaba3;
    font-size: 12px;
    text-transform: uppercase;
    background-color: transparent;
    border-left: 2px solid #fb9f93; 
    padding: 4px 12px;
  }

  input:focus {
    outline: 0;
    border-left-color: #fb9f93;
    color: #fb9f93;
  }

  ::placeholder {
    color: #afaba3;
    opacity: 1;
  }

  button {
    color: #afaba3;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    border: 1px solid #afaba3;
    border-radius: 12px;
    width: 68px;
    height: 38px;
    transition: 
      color 0.1s ease-in-out, 
      border 0.1s ease-in-out
    ;
  }

  button:hover {
    color: #fb9f93;
    border: 1px solid #fff7e9;
  }

  .btnContainer {
    border-top: 4px dashed #404040;
    margin: 0 -10px;
    padding: 14px 10px 0;
  }
</style>