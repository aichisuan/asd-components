<!-- filepath: /Users/owenh/code/github-code/as-component-wrap/as-component/docs/demo/Dropdown/Placement.vue -->
<template>
  <div class="placement-demo">
    <!-- Bottom -->
    <Dropdown placement="bottom" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">
        bottom
      </div>
    </Dropdown>

    <!-- Top -->
    <Dropdown placement="top" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">
        top
      </div>
    </Dropdown>

    <!-- Left -->
    <Dropdown placement="left" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">
        left
      </div>
    </Dropdown>

    <!-- Right -->
    <Dropdown placement="right" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">
        right
      </div>
    </Dropdown>

    <!-- Top-Start -->
    <Dropdown placement="top-start" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">
        top-start-top-start
      </div>
    </Dropdown>
    <!-- Top-end -->
    <Dropdown placement="top-end" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">
        top-end-top-end
      </div>
    </Dropdown>
    <br>
    <br>
    <!-- Bottom-Start -->
    <Dropdown placement="bottom-start" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">
        bottom-start-bottom-start
      </div>
    </Dropdown>
    <!-- Bottom-End -->
    <Dropdown placement="bottom-end" trigger="hover" hideAfterClick :menu-options="menuOptions">
      <div class="drop-btn">
        bottom-end-bottom-end
      </div>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { Dropdown } from 'asd-components';
import type { MenuOptionItem } from 'asd-components';

const menuOptions: MenuOptionItem[] = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', },
  { key: 3, label: 'item3', },
  { key: 4, label: 'item4' },
];
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
</style>