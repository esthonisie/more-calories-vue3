import { ref, computed } from 'vue'

// state
const calories = ref([
  { product: "Rozijnen", weight_g_ml: 5, kcal_per_100: 324 },
  { product: "Pompoenpitten", weight_g_ml: 10, kcal_per_100: 605 },
  { product: "Notenmix", weight_g_ml: 15, kcal_per_100: 668 },
  { product: "Gepofte spelt", weight_g_ml: 5, kcal_per_100: 364 },
  { product: "Jordans granola", weight_g_ml: 25, kcal_per_100: 446 },
]);

// getters
export const getAllCalories = computed(() => calories.value);

// actions
export const addCalorie = (calorie) => calories.value.push(calorie);