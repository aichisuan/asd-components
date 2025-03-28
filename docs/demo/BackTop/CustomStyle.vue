
<template>
  bgColor color shape
  <BackTop bgColor="blue" :right="100"/>
  <BackTop color="#fff" :right="160" bgColor="#1677ff" shape="shape">
    <span>回到顶部</span>
  </BackTop>
  <BackTop shape="rect" :right="240"></BackTop>
</template>

<script setup>
import BackTop from '@/components/BackTop/BackTop.vue';
</script>