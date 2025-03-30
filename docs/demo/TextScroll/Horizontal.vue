<template>
  <TextScroll :textScrollList="list" />
</template>

<script setup>
import { ref } from 'vue';
import TextScroll from '@/components/TextScroll/TextScroll.vue';

const list = ref([
  { id: '1', text: '这是第一条公告信息这是第一条公告信息' },
  { id: '2', text: '这是第二条较长的公告信息，可以展示更多内容' },
  { id: '3', text: '点击查看更多点击查看更多', href: 'https://www.baidu.com', target: '_blank' }
]);
</script>