<template>
  <Button @click="showMessageWithCloseEvent" type="primary">带关闭事件的消息</Button>
</template>

<script setup>
import { Button } from 'asd-components';
import { Message } from 'asd-components';

const showMessageWithCloseEvent = () => {
  Message({
    message: '这是一条带关闭事件的消息',
    showClose: true,
    type: 'success',
    onClose: () => {
      console.log('消息已关闭');
    },
  });
};
</script>