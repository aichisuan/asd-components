<template>
  <div
    class="as-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
  >
    <Tooltip
      placement="bottom-start"
      trigger="click"
      ref="tooltilRef"
      :popperOptions="popperOptions"
      @click-outside="controlDropdown(false)"
      manual
    >
      <Input 
        v-model="states.inputVal"
        :disabled="disabled"
        :placeholder="placeholder"
        ref="inputRef"
        readonly
      >
        <template #suffix>
          <Icon icon="angle-down" class="header-angle" :class="{ 'is-active': isDropdownVisible }"/>
        </template>
      </Input>
      <template #content>
        <ul class="as-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li 
              class="as-select__menu-item"
              :class="{ 'is-disabled': item.disabled, 'is-selected': states.selectedOption?.value === item.value }"
              :id="`select-item-${item.value}`"
              @click.stop="handleItemSelect(item)"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>  
</template>

<script setup lang="ts">
import { ref, reactive, type Ref } from 'vue';
import type { SelectProps, SelectEmits, SelectOption } from './types';
import Tooltip from '../Tooltip/Tooltip.vue';
import type { TooltipInstance } from '../Tooltip/types';
import Input from '../Input/Input.vue';
import Icon from '../Icon/Icon.vue';
import type { InputInstance } from '../Input/types';
import { findOption } from './methods';


defineOptions({
  name: 'Select',
});

const props = defineProps<SelectProps>();
const emits = defineEmits<SelectEmits>();

const initialOption = findOption(props.options, props.modelValue);

const tooltilRef = ref<TooltipInstance>();
const inputRef = ref<InputInstance>();

const states = reactive({
  selectedOption: initialOption,
  inputVal: initialOption?.label || '',
});

const isDropdownVisible = ref(false);

const popperOptions: any = {
  placement: 'bottom-start',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    },
  ],
};

const controlDropdown = (visible: boolean) => {
  visible ? tooltilRef.value?.show() : tooltilRef.value?.hide();
  isDropdownVisible.value = visible;
  emits('visible-change', visible);
};

const toggleDropdown = () => {
  if (props.disabled) return;
  controlDropdown(!isDropdownVisible.value);
};

const handleItemSelect = (item: SelectOption) => {
  if (item.disabled) return;
  states.inputVal = item.label;
  states.selectedOption = item;
  controlDropdown(false);

  emits('update:modelValue', item.value);
  emits('change', item.value);
  inputRef.value?.ref.focus();
};
</script>

<style scoped>
@import url('./style.css');
</style>