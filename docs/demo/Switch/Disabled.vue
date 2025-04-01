<template>
  <Switch v-model="checked" :disabled="true" />
</template>

<script setup>
import { ref } from 'vue';
import { Switch } from 'asd-components';

const checked = ref(false);
</script>