<template>
  <Switch v-model="checked" activeText="开" inactiveText="关" class="mr1"/>
  <Switch v-model="checked2" activeText="开开开开开开" inactiveText="关关关关" />
</template>

<script setup>
import { ref } from 'vue';
import Switch from '@/components/Switch/Switch.vue';

const checked = ref(false);
const checked2 = ref(false);
</script>