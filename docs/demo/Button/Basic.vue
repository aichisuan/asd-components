<script setup>
import Button from '@/components/Button/Button.vue';
</script>
<template>
  <div class="mb2">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </div>
  <div class="mb2">
    <Button plain>plain</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
  </div>
  <div class="mb2">
    <Button plain round>round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
  </div>
  <div class="mb2">
    <Button icon="arrow-up" circle />
    <Button type="primary" icon="fa-solid fa-shirt" circle />
    <Button type="success" icon="fa-solid fa-user-tie" circle />
    <Button type="info" icon="fa-house" circle />
    <Button type="warning" icon="fa-truck" circle />
    <Button type="danger" icon="fa-user" circle />
  </div>
</template>
