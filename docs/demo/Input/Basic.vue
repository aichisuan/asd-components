<template>
  <Input v-model="value" placeholder="请输入内容" style="width: 260px" maxlength="10"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/components/Input/Input.vue';

const value = ref('');
</script>