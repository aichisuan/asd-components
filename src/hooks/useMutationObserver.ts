
import { useSupportedCan } from "./commonHooks";
import { computed, watch, onBeforeUnmount, ref, toValue, type Ref } from "vue";

const useMutationObserver = (target: Ref | Ref[] | HTMLElement | HTMLElement[], callback: MutationCallback, options: MutationObserverInit = {}) => {
  const isSupport = useSupportedCan(() => window && 'MutationObserver' in window);

  const stopObserverVal = ref<boolean>(false)

  let observer: MutationObserver | null = null

  // 清除所有观察者
  const cleanAll = () => {
    if (observer) {
      observer.disconnect();
      observer = null
    }
  }

  // 获取目标元素 集合
  const observeTargets = computed(() => {
    const targetsValue = toValue(target)
    if (!targetsValue) return []
    if (Array.isArray(targetsValue)) {
      return targetsValue.map((item) => {
        return toValue(item)
      }).filter(x => !!x);
    }else {
      return [targetsValue]
    }
  })

  // 监听元素集合
  const observerElements = () => {
    if (stopObserverVal.value || !isSupport.value) return
    if (observeTargets.value.length) {
      observer = new MutationObserver(callback);
      observeTargets.value.forEach((item) => {
        if (item instanceof HTMLElement) {
          observer!.observe(item, options);
        }
      })
    }
  }


  const startObserver = () => {
    stopObserverVal.value = false
    observerElements()
  }

  const stopObserver = () => {
    stopObserverVal.value = true
    cleanAll()
  }

  watch(() => observeTargets.value, (newVal) => {
    cleanAll()
    observerElements()
  }, {
    // 立即触发
    immediate: true,
    flush: 'post', // DOM更新完了之后运行
  })

  onBeforeUnmount(() => {
    cleanAll()
  })


  return {
    stopObserver,
    startObserver,
  }
}


export default useMutationObserver;