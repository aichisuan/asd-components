<template>
  <div class="as-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import type { NameType, CollapseProps, CollapseEmits } from './types';
import { collapseInjectionKey } from './types';

defineOptions({name: 'ACollapse'});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

const activeNames = ref<NameType[]>(props.modelValue || []);

watch(() => props.modelValue, (val: NameType[]) => {
  activeNames.value = val;
});

if (props.accordion && activeNames.value.length > 1) {
  console.warn('[as-component] Collapse: accordion mode activeNames length should be 1');
}

const handleItemClick = (name: NameType) => {
  // 此处重新赋值的写法是为了方便后续的watch监听，不会导致相同对象地址值引用的问题
  let _activeNames = [...activeNames.value ]
  if (props.accordion) {
    _activeNames = [ activeNames.value[0] === name ? '' : name ]
    activeNames.value = _activeNames
  } else {
    const index = _activeNames.indexOf(name)
    if (index > -1) {
      // 存在，删除数组对应的一项
      _activeNames.splice(index, 1)
    } else {
      // 不存在，插入对应的name
      _activeNames.push(name)
    }
    activeNames.value = _activeNames
  }
  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
};

provide(collapseInjectionKey, {
  activeNames,
  handleItemClick,
});
</script>

<style scoped>
@import url("./style.css");
</style>
