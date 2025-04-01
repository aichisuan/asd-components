<template>
  <Dropdown placement="bottom" trigger="hover" hide-after-click :menu-options="menuOptions" @select="handleSelect" @visible-change="visibleChange">
    <div class="drop-btn">
      下拉菜单
      <Icon icon="angle-down" class="icon"></Icon>
    </div>
  </Dropdown>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { Dropdown } from 'asd-components';
import type { MenuOptionItem } from 'asd-components';
import { Icon } from 'asd-components';

const menuOptions: MenuOptionItem[] = [
  { key: 1, label: h('b', 'item1') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', dividedLine: true },
  { key: 4, label: 'item4' },
];


const handleSelect = (item: MenuOptionItem) => {
  console.log('handleSelect event',item);
};

const visibleChange = (visible: boolean) => {
  console.log('visibleChange event',visible);
};

</script>
<style scoped>
.drop-btn {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #409eff;
  user-select: none;
}
.icon {
  margin-left: 4px;
}
</style>