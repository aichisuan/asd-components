import { computed, ref } from "vue";

const zIndex = ref(0);

const useZIndex = (initialV = 2000) => {
  const initialZIndex = ref(initialV);
  const currentZIndex = computed(() => zIndex.value + initialZIndex.value);

  const nextZIndex = () => {
    zIndex.value += 1;
    return currentZIndex.value;
  }
  return {
    currentZIndex,
    nextZIndex,
    initialZIndex
  }
}

export default useZIndex;