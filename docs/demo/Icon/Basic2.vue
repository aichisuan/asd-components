
<template>
  <div class="icon-demo">
    <!-- 基础图标 -->
    <Icon icon="arrow-up" border size="3x" color="#0e7a0d" class="mr2 ml2"/>
    <Icon icon="fa-house" beat size="3x" color="#ff0000" class="mr2"/>
    <Icon icon="eye-slash" fade size="3x" color="#0000ff" class="mr2 ml2"/>
    <Icon icon="eye-slash" spinPulse size="3x" color="#0000ff" class="mr2"/>
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