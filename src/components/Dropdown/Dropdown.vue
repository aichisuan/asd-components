<template>
  <div class="as-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :delay-close="delayClose"
      :delay-open="delayOpen"
      :is-manual="isManual"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot />
      <template #content>
        <ul class="as-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <!-- dividedLine -->
            <li v-if="item.dividedLine" role="separator" class="as-dropdown__item-separator"></li>
            <!-- item -->
             <li
              class="as-dropdown__item"
              @click="handleItemClick(item)"
              :class="{'is-disabled': item.disabled, 'is-divided': item.dividedLine}"
              :id="`dropdown-item-${item.key}`"
             >
             <RenderVNode :VNode="item.label"/>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tooltip from '../Tooltip/Tooltip.vue';
import type { DropdownProps, DropdownEmits } from './types';
import type { TooltipInstance } from '../Tooltip/types';
import RenderVNode from '../../common/renderVNode';
import type { MenuOptionItem } from './types';


const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'hover',
  hideAfterClick: true,
  placement: 'bottom',
});

const emits = defineEmits<DropdownEmits>();

const tooltipRef = ref<TooltipInstance | null>(null);


const visibleChange = (visible: boolean) => {
  emits('visible-change', visible);
};

const handleItemClick = (item: MenuOptionItem) => {
  if (item.disabled) return;
  emits('select', item);
  if (props.hideAfterClick) {
    tooltipRef.value?.hide();
  }
};

defineExpose({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide(),
});

</script>

<style scoped>
@import url('./style.css');
</style>
