<template>
  <Avatar size="large" class="mr2">
    <template #icon><Icon icon="fa-user" size="2x" /></template>
  </Avatar>
  <Avatar size="large" class="m2">
    <span style="font-size: 12px">Custom</span>
  </Avatar>
</template>

<script setup>
import Avatar from '@/components/Avatar/Avatar.vue';
import Icon from '@/components/Icon/Icon.vue';
</script>
