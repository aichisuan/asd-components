<template>
  <Switch v-model="checked" activeColor="#67C23A" inactiveColor="#F56C6C" />
</template>

<script setup>
import { ref } from 'vue';
import { Switch } from 'asd-components';

const checked = ref(false);
</script>