<template>
  <Input v-model="value" placeholder="请输入内容" maxlength="10"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'asd-components';

const value = ref('');
</script>