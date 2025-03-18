<template>
  <Button type="primary" @click="showGlobalMessage">全局调用消息</Button>
</template>

<script setup>
import  Message  from '@/components/Message';
import Button from '@/components/Button/Button.vue';

const showGlobalMessage = () => {
  Message.success('全局调用成功消息');
};
</script>