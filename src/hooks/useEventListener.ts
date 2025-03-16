import { onMounted, onBeforeMount, isRef, watch, unref } from "vue";

import type { Ref } from "vue";

const useEventListener = (
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => any,
) => {
  if (isRef(target)) {
    // target变化重新绑定事件
    watch(target, (newEl, prevEl) => {
      prevEl?.removeEventListener(event, handler);
      newEl?.addEventListener(event, handler);
    })
  }else {
    onMounted(() => {
      // target dom元素直接绑定事件
      target.addEventListener(event, handler);
    })
  }

  onBeforeMount(() => {
    // 卸载的时候移除事件
    unref(target)?.removeEventListener(event, handler);
  })

}


export default useEventListener;