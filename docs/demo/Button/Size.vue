<template>
  <div class="flex flex-wrap items-center mb2">
    <Button size="large">Large</Button>
    <Button>Default</Button>
    <Button size="small">Small</Button>
    <Button size="large" icon="fa-solid fa-magnifying-glass">Search</Button>
    <Button icon="fa-solid fa-magnifying-glass">Search</Button>
    <Button size="small" icon="fa-solid fa-magnifying-glass">Search</Button>
  </div>
  <div class="flex flex-wrap items-center mb2">
    <Button size="large" round>Large</Button>
    <Button round>Default</Button>
    <Button size="small" round>Small</Button>
    <Button size="large" icon="fa-solid fa-magnifying-glass" round>Search</Button>
    <Button icon="fa-solid fa-magnifying-glass" round>Search</Button>
    <Button size="small" icon="fa-solid fa-magnifying-glass" round>Search</Button>
  </div>
  <div class="flex flex-wrap items-center">
    <Button icon="fa-solid fa-magnifying-glass" size="large" circle />
    <Button icon="fa-solid fa-magnifying-glass" circle />
    <Button icon="fa-solid fa-magnifying-glass" size="small" circle />
  </div>
</template>

<script setup>
import Button from '@/components/Button/Button.vue';
</script>
