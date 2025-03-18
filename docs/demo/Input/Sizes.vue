<template>
  <div>
    <Input v-model="value" size="small" placeholder="小尺寸输入框" class="mb2" style="width: 260px;" />
    <br>
    <Input v-model="value" size="medium" placeholder="中尺寸输入框" class="mb2" style="width: 260px;" />
    <br>
    <Input v-model="value" size="large" placeholder="大尺寸输入框" class="mb2" style="width: 260px;" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/components/Input/Input.vue';

const value = ref('');
</script>
