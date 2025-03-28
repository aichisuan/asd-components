<template>
  <div class="as-tooltip" ref="tooltipContainerNode" v-on="outerEvents">
    <div class="as-tooltip__trigger" ref="tooltipTriggerNode" v-on="events">
      <slot />
    </div>
    <Transition :name="transitionName">
      <!-- 这里也要加上一个events函数，为了滑入的时候不会立马消失 -->
      <div v-if="isOpen" class="as-tooltip__popper" ref="tooltipPopperNode" v-on="events">
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, computed, onUnmounted, onMounted, useSlots } from 'vue';
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types.ts';
import { createPopper } from '@popperjs/core';
import type { Instance as PopperInstance } from '@popperjs/core';
import { debounce } from 'lodash-es';
import userClickOutside from '../../hooks/useClickOutside';

defineOptions({
  name: 'AsTooltip',
});

const isOpen = ref(false);

const props = withDefaults(defineProps<TooltipProps>(), {
  offset: () => [0, 8],
  isManual: false,
  placement: 'top',
  trigger: 'hover',
  transitionName: 'fade',
  delayOpen: 0,
  delayClose: 100,
  
});

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          // 偏移量
          offset: props.offset,
        },
      },
    ],
    ...props.popperOptions,
  };
});

const emits = defineEmits<TooltipEmits>();

// 包裹 tooltip 的容器节点
const tooltipContainerNode = ref<HTMLElement | null>(null);

// 触发 tooltip 的节点
const tooltipTriggerNode = ref<HTMLElement | null>(null);

// tooltip 的内容节点
const tooltipPopperNode = ref<HTMLElement | null>(null);

const popperInstance = ref<PopperInstance | null>(null);

let outerEvents: Record<string, Function> = reactive({});
let events: Record<string, Function> = reactive({});

onMounted(() => {
  if (tooltipTriggerNode.value && props.trigger === 'focus') {
    // 监听 slot 上的 focus 和 blur 事件
    tooltipTriggerNode.value.addEventListener('focusin', openFinal, true);
    tooltipTriggerNode.value.addEventListener('focusout', closeFinal, true);
  }
});

onUnmounted(() => {
  if (tooltipTriggerNode.value && props.trigger === 'focus') {
    // 监听 slot 上的 focus 和 blur 事件
    tooltipTriggerNode.value.removeEventListener('focusin', openFinal, true);
    tooltipTriggerNode.value.removeEventListener('focusout', closeFinal, true);
  }
});

const open = () => {
  isOpen.value = true;
  emits('visible-change', true);
};

const close = () => {
  isOpen.value = false;
  emits('visible-change', false);
};

const openDebounce = debounce(open, props.delayOpen);
const closeDebounce = debounce(close, props.delayClose);

const openFinal = () => {
  closeDebounce.cancel();
  openDebounce();
};

const closeFinal = () => {
  openDebounce.cancel();
  closeDebounce();
};

const togglePopper = () => {
  if (isOpen.value) {
    closeFinal();
  } else {
    openFinal();
  }
};

// 点击外部关闭 以及触发事件
userClickOutside(tooltipContainerNode, () => {
  // 如果是click 触发的 tooltip，点击外部关闭
  if (props.trigger === 'click' && isOpen.value && !props.isManual) {
    closeFinal();
  }

  if (isOpen.value) {
    emits('click-outside', true);
  }
});

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events.mouseenter = openFinal;
    outerEvents.mouseleave = closeFinal;
  } else if (props.trigger === 'click') {
    events.click = togglePopper;
  } else if (props.trigger === 'focus') {
    // 如果是 focus 触发，确保 slotRef 上绑定了事件
    if (tooltipTriggerNode.value) {
      tooltipTriggerNode.value.removeEventListener('focusin', openFinal, true);
      tooltipTriggerNode.value.removeEventListener('focusout', closeFinal, true);
    }
  }
};

// 不是自定义事件绑定事件
if (!props.isManual) {
  attachEvents();
}

// 监听手动触发 isManual 的变化 重置事件
watch(
  () => props.isManual,
  (newManual) => {
    if (newManual) {
      outerEvents = {};
      events = {};
    } else {
      attachEvents();
    }
  }
);

// 监听 trigger 的变化 重置事件
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {};
      outerEvents = {};
      attachEvents();
    }
  }
);

// 监听 isOpen 的变化 创建 popper 实例 或者销毁 在nodeReady 之后
watch(
  isOpen,
  (newIsOpen) => {
    if (!newIsOpen) return;

    if (tooltipTriggerNode.value && tooltipPopperNode.value) {
      popperInstance.value = createPopper(tooltipTriggerNode.value, tooltipPopperNode.value, popperOptions.value);
    } else {
      popperInstance.value?.destroy();
    }
  },
  { flush: 'post' }
);

onUnmounted(() => {
  popperInstance.value?.destroy();
});

defineExpose<TooltipInstance>({
  TooltipRef: tooltipContainerNode,
  show: openFinal,
  hide: closeFinal,
});
</script>

<style scoped>
@import url('./styles.css');
</style>
