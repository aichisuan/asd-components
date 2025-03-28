<template>
  <div class="tooltip-demo">
    <Tooltip content="悬停触发提示" trigger="hover">
      <button>Hover</button>
    </Tooltip>
    <Tooltip content="点击触发提示" trigger="click">
      <button>Click</button>
    </Tooltip>
    <Tooltip content="聚焦触发提示" trigger="focus">
      <input placeholder="Focus me" />
    </Tooltip>
    <Tooltip content="聚焦触发提示" trigger="focus">
      <div>
        <Button id="test" type="primary">1231232</Button>
      </div>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue';
import Button from '@/components/Button/Button.vue'
</script>


<style scoped>
.tooltip-demo {
  display: flex;
  gap: 16px;
}
button, input {
  padding: 8px 12px;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  cursor: pointer;
}
button:hover, input:focus {
  background-color: #f5f5f5;
}
</style>