<template>
  <div
    class="as-collapse-item"
    :class="{
      'is-disabled': props.disabled,
      // <<<< 预留样式
      'is-active-wrap': isActive,
    }"
  >
    <!-- title -->
    <div
      class="as-collapse-item__header"
      @click="handleClick"
      :class="{
        'is-active': isActive,
        'is-disabled': props.disabled,
      }"
      :id="`item-header-${props.name}`"
    >
      <slot name="title">{{ title }}</slot>
      <!-- Icon -->
      <div class="as-collapse-item__icon">
        <Icon icon="angle-right" class="header-angle" />
      </div>
    </div>
    <!-- content -->
    <Transition name="slide" v-on="transitionListeners">
      <div class="as-collapse-item__wrapper" v-show="isActive">
        <div class="as-collapse-item__content" :id="`item-content-${props.name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { collapseInjectionKey } from './types';
import type { CollapseItemProps } from './types';
import Icon from '../Icon/Icon.vue';

defineOptions({
  name: 'CollapseItem',
});

const props = defineProps<CollapseItemProps>();

const CollapseContext = inject(collapseInjectionKey);

const isActive = computed(() => {
  return CollapseContext?.activeNames.value.includes(props.name);
});

const handleClick = () => {
  if (props.disabled) return;
  CollapseContext?.handleItemClick(props.name);
};

const transitionListeners: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0';
    el.style.overflow = 'hidden';
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.height = '';
    el.style.overflow = '';
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },
  leave(el) {
    el.style.height = '0';
  },
  afterLeave(el) {
    el.style.height = '';
    el.style.overflow = '';
  },
};
</script>

<style scoped>
@import url("./style.css");
</style>
