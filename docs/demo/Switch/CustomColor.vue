<template>
  <Switch v-model="checked" activeColor="#67C23A" inactiveColor="#F56C6C" />
</template>

<script setup>
import { ref } from 'vue';
import Switch from '@/components/Switch/Switch.vue';

const checked = ref(false);
</script>