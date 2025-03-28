<template>
  <Select v-model="selected1" :options="options1" disabled placeholder="禁用所有" class="mr2"/>
  <Select v-model="selected2" :options="options2" placeholder="禁用选项" />
</template>

<script setup>
import { ref } from 'vue';
import Select from '@/components/Select/Select.vue';
const selected1 = ref('');
const selected2 = ref('');
const options1 = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
];
const options2 = [
  { label: '选项一', value: '1', disabled: true },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
];
</script>