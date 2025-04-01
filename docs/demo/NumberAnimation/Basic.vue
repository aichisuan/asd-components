<template>
  <NumberAnimation :to="value1"/>
  <NumberAnimation :to="value2" thousandsSeparator=""/>
  <Button @click="handlePlay" type="primary">开始</Button>
</template>

<script setup>
import { ref } from 'vue';
import { NumberAnimation } from 'asd-components';
import { Button } from 'asd-components';

const value1 = ref(100000);
const value2 = ref(100000.123456789);

const handlePlay = () => {
  if (value1.value || value2.value) {
    value1.value = 0;
    value2.value = 0;
  } else {
    value1.value = 10000000.123456789;
    value2.value = 10000000.123456789;
  }
};


</script>