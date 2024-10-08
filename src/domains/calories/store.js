import { ref, computed } from 'vue'

const calories = ref([
  { product: "Rozijnen", kcal_per_100: 324, weight_g_ml: 5 },
  { product: "Pompoenpitten", kcal_per_100: 605, weight_g_ml: 10 },
  { product: "Notenmix", kcal_per_100: 668, weight_g_ml: 15 },
  { product: "Gepofte spelt", kcal_per_100: 364, weight_g_ml: 5 },
  { product: "Jordans granola", kcal_per_100: 446, weight_g_ml: 25 },
]);

export const getAllCalories = computed(() => calories.value);

export const addCalorie = (calorie) => calories.value.push(calorie);