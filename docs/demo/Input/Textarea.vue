<template>
  <Input v-model="value" type="textarea" placeholder="多行文本输入框" :rows="2"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/components/Input/Input.vue';

const value = ref('');
</script>