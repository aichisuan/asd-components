<template>
  <Tooltip>
    <template #content>
      <div>
        <h4>自定义标题</h4>
        <p>这是自定义内容。</p>
      </div>
    </template>
    <Button type="info">悬停查看提示</Button>
  </Tooltip>
</template>

<script lang="ts" setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue';
import Button from '@/components/Button/Button.vue'
</script>

<style scoped>
</style>