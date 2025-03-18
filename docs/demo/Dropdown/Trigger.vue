<!-- filepath: /Users/owenh/code/github-code/as-component-wrap/as-component/docs/demo/Dropdown/Placement.vue -->
<template>
  <div class="placement-demo">
    <!-- Trigger hover -->
    <Dropdown placement="bottom" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">hover</div>
    </Dropdown>
    <!-- Trigger click -->
    <Dropdown placement="bottom" trigger="click" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">click</div>
    </Dropdown>
    <br>
    <br>
    <!-- 外部出发 -->
    <Button type="primary" class="select-btn" @click="handleToShowDropdown">点击按钮出发</Button>
    <Dropdown placement="bottom" hideAfterClick :menu-options="menuOptions" ref="dropDownRef">
      <div class="drop-btn">click</div>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from '@/components/Dropdown/Dropdown.vue';
import type { MenuOptionItem } from '@/components/Dropdown/types';
import Button from '@/components/Button/Button.vue';
import { TooltipInstance } from '@/components/Tooltip/types';

const menuOptions: MenuOptionItem[] = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2' },
  { key: 3, label: 'item3' },
  { key: 4, label: 'item4' },
];

const dropDownRef = ref<TooltipInstance | null>(null);

const handleToShowDropdown = () => {
  // console.log('handleToShowDropdown');
  dropDownRef.value?.show();
};

</script>

<style scoped>
.drop-btn {
  margin-right: 20px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #409eff;
  user-select: none;
}
.select-btn {
  margin-right: 20px;
}
</style>
