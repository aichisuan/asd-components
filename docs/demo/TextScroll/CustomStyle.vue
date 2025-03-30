<template>
  <TextScroll 
    :textScrollList="list" 
    :textStyle="{ color: '#FF5733', backgroundColor: 'skyblue' }"
    :height="100"
    :gapDistance="30"
  />
</template>

<script setup>
import TextScroll from '@/components/TextScroll/TextScroll.vue';
import { ref } from 'vue';

const list = ref([
  { id: '1', text: '自定义颜色和背景色自定义颜色和背景色' },
  { id: '2', text: '支持自定义文本样式支持自定义文本样式', disabled: true },
  { id: '3', text: '点击查看更多点击查看更多', href: 'https://jujin.com', target: '_blank' }
]);
</script>