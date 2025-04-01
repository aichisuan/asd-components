import { onMounted, onUnmounted, type Ref } from "vue";

const userClickOutside = (elementRef: Ref<HTMLElement | null>, handler: (e: MouseEvent) => void) => {
  const listener = (e: MouseEvent) => {
    if (!elementRef.value || !(e.target) || elementRef.value.contains(e.target as Node)) {
      return;
    }
    handler(e);
  }

  onMounted(() => {
    document.addEventListener("click", listener);
  });

  onUnmounted(() => {
    document.removeEventListener("click", listener);
  });
};

export default userClickOutside;