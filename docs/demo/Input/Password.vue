<template>
  <Input v-model="value" type="password" showPassword placeholder="密码框" style="width: 260px"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'asd-components';

const value = ref('');
</script>