<template>
  <NumberAnimation :form="0" :to="23091283912.28301" />
  <NumberAnimation :form="0" :to="10000" ref="numberRef" :autoPlay="false"/>
  <Button @click="handlePlay">开始</Button>
</template>

<script setup>
import { ref } from 'vue';
import NumberAnimation from '@/components/NumberAnimation/NumberAnimation.vue';
import Button from '@/components/Button/Button.vue';


const numberRef = ref(null);

const handlePlay = () => {
  numberRef.value?.startPlay();
};

</script>