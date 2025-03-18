<template>
  <button
    :type="nativeType"
    :autofocus="autofocus"
    ref="elRef"
    class="as-button"
    :disabled="disabled || loading"
    :class="{
      [`as-button--${type}`]: type,
      [`as-button--${size}`]: size,
      'is-round': round,
      'is-plain': plain,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Icon from '../Icon/Icon.vue';
import type { ButtonInstance, ButtonProps } from './types';

defineOptions({
  name: 'AsButton',
});

const emit = defineEmits(['click']);

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});

const elRef = ref<ButtonInstance | null>(null);

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};

defineExpose({ elRef });

</script>
<style scoped>
@import url('./style.css');
</style>
