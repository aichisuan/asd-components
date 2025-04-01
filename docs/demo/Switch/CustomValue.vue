<template>
  <Switch v-model="checked" :activeValue="1" :inactiveValue="0" @change="changeValue"/>
</template>

<script setup>
import { Switch } from 'asd-components';
import { ref } from 'vue';

const checked = ref(1);

const changeValue = (value) => {
  console.log(value, typeof value);
};


</script>