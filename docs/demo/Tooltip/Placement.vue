<template>
  <div class="tooltip-demo">
    <div class="row">
      <Tooltip content="顶部提示" placement="top">
        <Button>top</Button>
      </Tooltip>
      <Tooltip content="顶部左侧提示" placement="top-start">
        <Button>top-start</Button>
      </Tooltip>
      <Tooltip content="顶部右侧提示" placement="top-end">
        <Button>top-end</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip content="底部提示" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
      <Tooltip content="底部左侧提示" placement="bottom-start">
        <Button>bottom-start</Button>
      </Tooltip>
      <Tooltip content="底部右侧提示" placement="bottom-end">
        <Button>bottom-end</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip content="左侧提示" placement="left">
        <Button>left</Button>
      </Tooltip>
      <Tooltip content="左侧顶部提示" placement="left-start">
        <Button>left-start</Button>
      </Tooltip>
      <Tooltip content="左侧底部提示" placement="left-end">
        <Button>left-end</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip content="右侧提示" placement="right">
        <Button>right</Button>
      </Tooltip>
      <Tooltip content="右侧顶部提示" placement="right-start">
        <Button>right-start</Button>
      </Tooltip>
      <Tooltip content="右侧底部提示" placement="right-end">
        <Button>right-end</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Tooltip } from 'asd-components';
import Button from '@/components/Button/Button.vue'
</script>

<style scoped>
.tooltip-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.row {
  display: flex;
  gap: 16px;
}
Button {
  padding: 8px 12px;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  cursor: pointer;
}
Button:hover {
  background-color: #f5f5f5;
}
</style>