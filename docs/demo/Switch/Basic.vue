<template>
  <div class="switch-wrap">
    <Switch v-model="checked"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Switch } from 'asd-components';

const checked = ref(false);
</script>