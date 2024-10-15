import { ref, computed } from 'vue'

// state
const calories = ref([
  { id: 1, product: "Rozijnen", weight_g_ml: 5, kcal_per_100: 324 },
  { id: 2, product: "Pompoenpitten", weight_g_ml: 10, kcal_per_100: 605 },
  { id: 3, product: "Notenmix", weight_g_ml: 15, kcal_per_100: 668 },
  { id: 4, product: "Gepofte spelt", weight_g_ml: 5, kcal_per_100: 364 },
  { id: 5, product: "Jordans granola", weight_g_ml: 25, kcal_per_100: 446 },
]);

// getters
export const getAllCalories = computed(() => calories.value);
export const getCalorieById = (id) => computed(
  () => calories.value.find(calorie => calorie.id === id)
);
export const getIndexOfCalorie = (id) => computed(
  () => calories.value.findIndex((calorie) => calorie.id === id)
);

// actions
export const addCalorie = (calorie) => calories.value.push(calorie);
export const updateCalorie = (index, calorieUpdated) => calories.value[index] = calorieUpdated;

      