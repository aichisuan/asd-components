<template>
  <div
    class="as-switch"
    :class="[
      'as-switch--' + props.size,
      {
        'is-disabled': props.disabled,
        'is-checked': isChecked,
      },
    ]"
    @click="handleSwitchValue"
  >
    <input type="checkbox" class="as-switch__input" role="switch" ref="checkInput" :name="name" :disabled="disabled" @keydown.enter="handleSwitchValue" /> 
    <div class="as-switch__core" :style="{ 
      backgroundColor: isChecked ? props.activeColor : props.inactiveColor,
      borderColor: isChecked ? props.activeColor : props.inactiveColor,  
    }">

      <div class="as-switch__core-inner">
        <span v-if="activeText || inactiveText" class="as-switch__core-inner-text">
          {{ isChecked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="as-switch__core-action">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

import type { SwitchProps, SwitchEmits } from './types';

defineOptions({
  name: 'Switch',
});

const emits = defineEmits<SwitchEmits>();

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  activeColor: '#409EFF',
  inactiveColor: '#C0CCDA',
  activeValue: true,
  inactiveValue: false,
  size: 'medium',
});

const innerCmValue = ref(props.modelValue);
const checkInput = ref<HTMLInputElement | null>(null);

const isChecked = computed(() => {
  return innerCmValue.value === props.activeValue;
});

const handleSwitchValue = () => {
  if (props.disabled) return;
  innerCmValue.value = isChecked.value ? props.inactiveValue : props.activeValue;
  emits('update:modelValue', innerCmValue.value);
  emits('change', innerCmValue.value);
};

onMounted(() => {
  checkInput.value!.checked = isChecked.value;
});

// 监听内部的值的变化 更新 input 的值
watch(isChecked, (val) => {
  checkInput.value!.checked = val;
});

// 监听外部传入的 modelValue 的变化 更新内部的值
watch(
  () => props.modelValue,
  (val) => {
    innerCmValue.value = val;
  }
);
</script>

<style scoped>
@import url('./style.css');
</style>
