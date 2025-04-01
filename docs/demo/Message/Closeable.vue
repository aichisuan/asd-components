<template>
  <Button type="primary" @click="showClosableMessage">可关闭的消息</Button>
</template>

<script setup>
import { Message } from 'asd-components';
import { Button } from 'asd-components';

const showClosableMessage = () => {
  Message({
    message: '这是一条可关闭的消息',
    type: 'success',
    showClose: true,
  });
};
</script>