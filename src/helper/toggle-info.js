import { ref, computed } from 'vue'

const extraInfo = ref(true);

export const getExtraInfo = computed(() => extraInfo.value);

export function toggleInfo() {
  return extraInfo.value = !extraInfo.value;
}

