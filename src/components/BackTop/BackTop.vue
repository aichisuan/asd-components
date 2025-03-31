<template>
  <Transition name="fade-backtop">
    <div v-show="isVisible" class="as-back-top"ref="backTopRef" :style="backTopStyle" @click="handleClick">
      <Tooltip v-if="tooltipText" :content="tooltipText" v-bind="tooltipProps">
        <div class="as-back-top__content">
          <slot>
            <Icon icon="arrow-up"></Icon>
          </slot>
        </div>
      </Tooltip>
      <div v-else class="as-back-top__content">
        <slot>
          <Icon icon="arrow-up"></Icon>
        </slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import Tooltip from '../Tooltip/Tooltip.vue';
import type { BackTopProps, BackTopEmits } from './types';
import { getScrollParent, throttleLast } from '../../common/util';
import Icon from '../Icon/Icon.vue';

const props = withDefaults(defineProps<BackTopProps>(), {
  right: '30px',
  bottom: '30px',
  visibilityHeight: 100,
  bgColor: '#000',
  color: '#fff',
  zIndex: 1000,
  shape: 'circle',
  listenEl: null,
  isInListenEl: false,
});

type Position = 'relative' | 'absolute' | 'fixed';

const emits = defineEmits<BackTopEmits>();

const backTopRef = ref<HTMLElement | null>(null);

const scrollTarget = ref<HTMLElement | null>(null);
// scrollTarget 的滚动距离
const scrollTop = ref<number>(0);

const isVisible = computed(() => {
  if (scrollTarget.value) {
    return scrollTop.value > props.visibilityHeight;
  }
  return false;
});

watch(isVisible, (newVal) => {
  emits('visible-change', newVal);
});
const backTopStyle = computed(() => ({
  right: typeof props.right === 'number' ? `${props.right}px` : props.right,
  bottom: typeof props.bottom === 'number' ? `${props.bottom}px` : props.bottom,
  backgroundColor: props.bgColor,
  color: props.color,
  zIndex: props.zIndex,
  borderRadius: props.shape === 'circle' ? '50%' : props.shape === 'rect' ? '0' : '8px',
  position: props.listenEl && props.isInListenEl ? ('absolute') as Position : ('fixed') as Position,
}));

const handleClick = (e: Event) => {
  if (scrollTarget.value) {
    scrollTarget.value.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  // 触发点击事件
  emits('click', e);
};

const handleScrollEl = (e: Event) => {
  scrollTop.value = (e.target as HTMLElement).scrollTop;
  updateProgress();
};
const handleScrollWindow = () => {
  scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
  updateProgress();
};

const updateProgress = () => {
  if (!scrollTarget.value) return;
  let scrollPercent;
  // 获取滚动比例
  if (scrollTarget.value === document.documentElement) {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrollTopValue = document.documentElement.scrollTop || document.body.scrollTop;
    scrollPercent = (scrollTopValue / (scrollHeight - clientHeight)) * 100;
  } else {
    const scrollHeight = scrollTarget.value.scrollHeight;
    const clientHeight = scrollTarget.value.clientHeight;
    const scrollTopValue = scrollTarget.value.scrollTop;
    scrollPercent = (scrollTopValue / (scrollHeight - clientHeight)) * 100;
  }
  emits('on-progress', scrollPercent);
};

const throttleScrollWindow = throttleLast(handleScrollWindow, 100);
const throttleScrollEl = throttleLast(handleScrollEl, 100);

const startObserver = () => {
  if (!scrollTarget.value) return;
  if (scrollTarget.value === document.documentElement) {
    window.addEventListener('scroll', throttleScrollWindow);
  } else {
    scrollTarget.value.addEventListener('scroll', throttleScrollEl);
  }
};

const stopOberserver = () => {
  if (!scrollTarget.value) return;
  if (scrollTarget.value === document.documentElement) {
    window.removeEventListener('scroll', throttleScrollWindow);
  } else {
    scrollTarget.value.removeEventListener('scroll', throttleScrollEl);
  }
};

// 找到最近的一个滚动元素 并监听
const observerScroll = () => {
  stopOberserver();
  if (!props.listenEl) {
    // 获取最近的滚动元素
    scrollTarget.value = getScrollParent(backTopRef.value);
  } else if (typeof props.listenEl === 'string') {
    scrollTarget.value = document.querySelector(props.listenEl) as unknown as HTMLElement;
  } else if (props.listenEl instanceof HTMLElement) {
    scrollTarget.value = props.listenEl as HTMLElement;
  }
  if (!scrollTarget.value) {
    console.warn('BackTop: listenEl is not a valid element');
    return;
  }
  startObserver();
};

watch(
  () => props.listenEl,
  (newVal) => {
    if (newVal) {
      observerScroll();
    }
  }
);

onMounted(() => {
  observerScroll();
});

onUnmounted(() => {
  // 卸载监听
  stopOberserver();
});
</script>

<style scoped>
@import url('./style.css');
</style>
