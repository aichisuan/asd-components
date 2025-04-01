<template>
  <Button @click="showMessage" type="primary" class="mb2">展示消息弹窗</Button>
  <Button @click="showMessageShowVNode" type="primary">showVNode</Button>
</template>

<script setup>
import { h } from 'vue';
import { Message } from 'asd-components';
import { Button } from 'asd-components';

const showMessage = () => {
  Message({
    message: '这是一条普通消息',
  });
};

const showMessageShowVNode = () => {
  Message({
    message: h('p', null, '这是一条使用 h 函数的消息'),
  });
};

</script>
