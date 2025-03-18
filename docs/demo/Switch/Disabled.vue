<template>
  <Switch v-model="checked" :disabled="true" />
</template>

<script setup>
import { ref } from 'vue';
import Switch from '@/components/Switch/Switch.vue';

const checked = ref(false);
</script>