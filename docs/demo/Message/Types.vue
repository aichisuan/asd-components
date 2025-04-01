<template>
  <Button type="success" @click="showSuccess">成功消息</Button>
  <Button type="info" @click="showInfo">信息消息</Button>
  <Button type="warning" @click="showWarning">警告消息</Button>
  <Button type="danger" @click="showError">错误消息</Button>
</template>



<script setup>
import { Message } from 'asd-components';
import { Button } from 'asd-components';

const showSuccess = () => {
  Message.success({
    message: '操作成功！',
  });
};

const showInfo = () => {
  Message.info({
    message: '这是信息提示。',
  });
};

const showWarning = () => {
  Message.warning({
    message: '警告：请注意！',
  });
};

const showError = () => {
  Message.danger({
    message: '发生错误，请重试。',
  });
};
</script>