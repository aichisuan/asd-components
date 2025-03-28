import { onMounted, ref, getCurrentInstance, computed } from "vue";

type anyFunction = () => unknown;

// 判断组件是否已经挂载
export const useMounted = () => {
  const isMounted = ref(false);
  const instance = getCurrentInstance();
  onMounted(() => {
    isMounted.value = true;
  }, instance);
  return isMounted;
}


// 检查API 是否支持
export const useSupportedCan = (apiCb: anyFunction) => {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return apiCb();
  })
}
