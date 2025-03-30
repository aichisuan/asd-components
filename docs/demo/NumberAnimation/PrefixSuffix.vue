<template>
  <NumberAnimation :to="1000" prefix="$ " suffix="" :autoplay="false" ref="ref1"/>
  <NumberAnimation :to="10000" suffix=" 元" :autoplay="false" ref="ref2"/>
  <Button @click="handlePlay" type="primary">开始</Button>
</template>

<script setup>
import { ref } from 'vue';
import NumberAnimation from '@/components/NumberAnimation/NumberAnimation.vue';
import Button from '@/components/Button/Button.vue';

const ref1 = ref(null)
const ref2 = ref(null)

const handlePlay = () => {
  ref1.value?.startPlay()
  ref2.value?.startPlay()
};

</script>