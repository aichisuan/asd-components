<template>
  <TextScroll 
    :textScrollList="list" 
    :isVertical="true" 
    :verticalDuration="2000"
    :verticalInterval="3000"
  />
</template>

<script setup>

import { ref } from 'vue';
import TextScroll from '@/components/TextScroll/TextScroll.vue';

const list = ref([
  { id: '1', text: '系统公告: 本周六维护升级' },
  { id: '2', text: '新功能上线: 支持多种动画效果' },
  { id: '3', text: '企业公告: 第一季度报告发布' },
  { id: '4', text: '查看更多：点击查看更多内容', href: 'https://www.example.com', target: '_blank' },
  { id: '5', text: '系统公告: 本周六维护升级' },
  { id: '6', text: '新功能上线: 支持多种动画效果' },
  { id: '7', text: '企业公告: 第一季度报告发布' },
  { id: '8', text: '查看更多：点击查看更多内容', href: 'https://www.example.com', target: '_blank' }
]);
</script>