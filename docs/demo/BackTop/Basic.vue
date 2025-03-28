
<template>
  <BackTop :bottom="100" :right="200" @on-progress="updatePregress"/>
  基础用法 滑动到底部显示
</template>

<script setup lang="ts">
import BackTop from '@/components/BackTop/BackTop.vue';
const updatePregress = (progress: number) => {
  console.log('当前滚动进度：', progress);
};
</script>