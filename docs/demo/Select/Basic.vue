<template>
  <Select v-model="selected" :options="options" placeholder="请选择" />
</template>

<script setup>
import { ref } from 'vue';
import { Select } from 'asd-components';

const selected = ref('');
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
];
</script>