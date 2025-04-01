<template>
  <Button type="primary" @click="showGlobalMessage">全局调用消息</Button>
</template>

<script setup>
import { Message } from 'asd-components';
import { Button } from 'asd-components';

const showGlobalMessage = () => {
  Message.success('全局调用成功消息');
};
</script>