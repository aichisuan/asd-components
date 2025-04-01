<template>
  <TextScroll 
    :textScrollList="list" 
    :isMouseHoverPause="true"
    :horizontalSpeed="50"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TextScroll } from 'asd-components';

const list = ref([
  { id: '1', text: '鼠标悬停时滚动会暂停鼠标悬停时滚动会暂停' },
  { id: '2', text: '支持动态控制滚动行为支持动态控制滚动行为' },
  { id: '3', text: '点击查看更多点击查看更多',  }
]);
</script>