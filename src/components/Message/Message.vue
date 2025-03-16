<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { type MessageProps } from './types';
import { getLastBottomOffset } from './method';
import useEventListener from '../../hooks/useEventListener';
import Icon from '../Icon/Icon.vue';
import RenderVNode from '../../common/renderVNode';

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  message: '',
  duration: 3000,
  offset: 20,
  transitionName: 'fade-up',
});

const visible = ref(false);

const messageRef = ref<HTMLElement | null>(null);

const height = ref(0);

// 上一个实例的最上面的坐标偏移量
const lastOffset = computed(() => {
  console.log('这里是1')
  return getLastBottomOffset(props.id)
});

// 当前元素的偏移量
const topOffset = computed(() => {
  return lastOffset.value + props.offset;
});

// 当前元素的底部坐标
const bottomOffset = computed(() => {
  return topOffset.value + height.value;
});

// 当前元素的样式
const styles = computed(() => {
  return {
    top: `${topOffset.value}px`,
    zIndex: props.zIndex,
  };
});

let timer: unknown;

const startTimer = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
};

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer as number);
  }
};

onMounted(() => {
  console.log(props.duration, 'props.duration');
  visible.value = true;
  startTimer();
});

// 键盘事件 键盘按下退出
const keydown = (e: Event) => {
  if ((e as KeyboardEvent).code === 'Escape') {
    visible.value = false;
  }
};

useEventListener(document, 'keydown', keydown);

const destoryComponent = () => {
  props.onDestory?.();
  // 调用此处
  // const index = instances.findIndex((instance) => instance.id === id);
  // if (index === -1) return;
  // instances.splice(index, 1);
  // render(null, container);
};

// 进入的时候将高度设置为 具体高度
const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height;
};

defineExpose({
  bottomOffset,
  visible,
});
</script>

<template>
  <Transition :name="transitionName" @after-leave="destoryComponent" @enter="updateHeight">
    <div
      class="as-message"
      v-show="visible"
      :style="styles"
      ref="messageRef"
      role="alert"
      @onmouseenter="clearTimer"
      @onmouseleave="startTimer"
      :class="{
        'is-close': showClose,
        // 弹窗的类型
        [`as-message--${type}`]: true,
      }"
    >
      <div class="as-message__content">
        <slot>
          <RenderVNode :VNode="message" v-if="message" />
        </slot>
      </div>
      <div class="as-message__close" v-if="showClose">
        <Icon icon="xmark" @click.stop="visible = false" />
      </div>
    </div>
  </Transition>
</template>
<style scoped>
@import url('./style.css');
</style>
