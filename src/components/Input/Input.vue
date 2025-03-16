<template>
  <div
    class="as-input"
    :class="{
      [`as-input--${props.size}`]: props.size,
      [`as-input--${props.type}`]: props.type,
      'as-input--disabled': props.disabled,
      // 前置 slot
      'as-input--prepend': !!$slots.prepend,
      // 后置 slot
      'as-input--append': !!$slots.append,
      // 前置 prefix
      'as-input--prefix': !!$slots.prefix,
      // 后置 suffix
      'as-input--suffix': !!$slots.suffix,
      'as-input--focus': isFocus,
    }"
  >
    <!-- textarea -->

    <textarea
      v-if="type === 'textarea'"
      class="as-textarea__wrapper"
      v-bind="attrs"
      ref="inputRef"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :form="form"
      v-model="innerCmValue"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <!-- input -->
    <template v-else>
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="as-input__prepend">
        <slot name="prepend" />
      </div>
      <div class="as-input__wrapper">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="as-input__prefix">
          <slot name="prefix" />
        </span>
        <input
          class="as-input__inner"
          :type="showPassword ? (isPasswordVisible ? 'text' : 'password') : type"
          ref="inputRef"
          v-bind="attrs"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-model="innerCmValue"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <!-- suffix slot -->
        <span v-if="$slots.suffix || showClear || showPasswordArea" class="as-input__suffix" @click="keepFocus">
          <slot name="suffix" />
          <Icon icon="circle-xmark" v-if="showClear" class="as-input__clear" @click="handleClear" @mousedown.prevent="() => {}" />
          <Icon icon="eye" v-if="showPasswordArea && isPasswordVisible" class="as-input__password" @click="handleTogglePasswordVisible" />
          <Icon icon="eye-slash" v-if="showPasswordArea && !isPasswordVisible" class="as-input__password" @click="handleTogglePasswordVisible" />
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="as-input__append">
        <slot name="append" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, defineProps, defineEmits, withDefaults, useAttrs, nextTick } from 'vue';
import type { InputProps, InputEmits } from './types';
import Icon from '../Icon/Icon.vue';

defineOptions({
  name: 'asInput',
  inheritAttrs: false,
});

const emits = defineEmits<InputEmits>();

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  autocomplete: 'off',
  placeholder: '请输入',
});

//
const attrs = useAttrs();

const innerCmValue = ref(props.modelValue);
const inputRef = ref<HTMLInputElement | null>(null);

const isFocus = ref(false);
const isPasswordVisible = ref(false);

const showClear = computed(() => {
  return props.clearable && !props.disabled && isFocus.value && !!innerCmValue.value;
});

const showPasswordArea = computed(() => {
  return props.showPassword && !props.disabled && !!innerCmValue.value;
});

const handleTogglePasswordVisible = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

// 保持焦点
const keepFocus = async (e: FocusEvent) => {
  // e.preventDefault();
  await nextTick();
  inputRef.value?.focus();
};

const handleInput = () => {
  emits('update:modelValue', innerCmValue.value);
  emits('input', innerCmValue.value);
};

const handleChange = (e: Event) => {
  emits('change', innerCmValue.value);
};

const handleFocus = (e: FocusEvent) => {
  isFocus.value = true;
  emits('focus', e);
};

const handleBlur = (e: FocusEvent) => {
  isFocus.value = false;
  emits('blur', e);
};

const handleClear = (e: MouseEvent) => {
  innerCmValue.value = '';
  emits('input', innerCmValue.value);
  emits('change', innerCmValue.value);
  emits('update:modelValue', innerCmValue.value);
  emits('clear');
};

watch(
  () => props.modelValue,
  (val) => {
    innerCmValue.value = val;
  }
);

defineExpose({
  ref: inputRef,
});
</script>

<style scoped>
@import url('./style.css');
</style>