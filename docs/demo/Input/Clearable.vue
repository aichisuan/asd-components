<template>
  <Input v-model="value" clearable placeholder="可清空输入框" style="width: 260px"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'asd-components';

const value = ref('');
</script>