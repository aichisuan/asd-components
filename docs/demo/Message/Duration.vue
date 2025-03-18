<template>
  <Button type="primary" @click="showShortMessage">短时消息</Button>
  <Button type="primary" @click="showLongMessage">长时消息</Button>
</template>

<script setup>
import  Message  from '@/components/Message';
import Button from '@/components/Button/Button.vue';

const showShortMessage = () => {
  Message({
    message: '这是一条短时消息',
    duration: 1000,
  });
};

const showLongMessage = () => {
  Message({
    message: '这是一条长时消息',
    duration: 5000,
  });
};
</script>