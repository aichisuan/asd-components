
<template>
  <div class="icon-demo">
    <!-- 不同大小 -->
    <Icon icon="arrow-down" size="1x" color="#4caf50" class="mr2"/>
    <Icon icon="arrow-left" size="2x" color="#4caf50" class="mr2"/>
    <Icon icon="arrow-right" size="3x" color="#4caf50" class="mr2"/>

    <!-- 不同颜色 -->
    <Icon icon="check-circle" size="3x" color="#4caf50" class="mr2"/>
    <Icon icon="times-circle" size="3x" color="#f44336" class="mr2"/>
    <Icon icon="info-circle" size="3x" color="#2196f3" class="mr2"/>

    <!-- 动画效果 -->
    <Icon icon="fa-sync" size="3x" color="#007bff" spin class="mr2"/>
    <Icon icon="fa-spinner" size="3x" color="#007bff" pulse class="mr2"/>
    <Icon icon="fa-circle-notch" size="3x" color="#007bff" spinPulse class="mr2"/>

    <!-- 翻转和旋转 -->
    <Icon icon="arrow-down" size="3x" color="#ff5722" flip="horizontal" class="mr2"/>
    <Icon icon="arrow-down" size="3x" color="#ff5722" flip="vertical" class="mr2"/>
    <Icon icon="arrow-down" size="3x" color="#ff5722" rotation="90" class="mr2"/>
    <Icon icon="arrow-down" size="3x" color="#ff5722" rotation="270" class="mr2"/>
  </div>
</template>

<script setup>
import { Icon } from 'asd-components';
</script>

<style scoped>
.icon-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.mr2 {
  margin-right: 16px;
}
</style>