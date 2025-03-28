<template>
  <div :style="numberStyle">
    {{ formatShowNumber }}
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '@/common/number';
import { type CSSProperties, ref, watchEffect, watch, onMounted, computed } from 'vue';
import { useTransition, TransitionPresets } from '@vueuse/core';
import type { NumberAnimationProps, NumberAnimationEvent, NumberAnimationExports} from './types';

const props = withDefaults(defineProps<NumberAnimationProps>(), {
  from: 0,
  to: 10000,
  duration: 20000,
  autoPlay: true,
  fixed: 0,
  prefix: '',
  suffix: '',
  thousandsSeparator: ',',
  decimalSeparator: '.',
  numberStyle: () =>
    ({
      color: 'red',
    } as CSSProperties),
  transition: 'easeInOutCubic',
});

const emits = defineEmits<NumberAnimationEvent>();

const sourceNumber = ref(props.from);

watchEffect(() => (sourceNumber.value = props.from));

watch(
  () => [props.from, props.to],
  () => {
    if (props.autoPlay) {
      startPlay()
    }
  },
  {
    deep: true
  }
)

const startPlay = () => {
  sourceNumber.value = props.to;
};

onMounted(() => {
  if (props.autoPlay) {
    startPlay();
  }
});

const showValue = useTransition(sourceNumber, {
  duration: props.duration,
  transition: TransitionPresets[props.transition],
  onFinished: () => {
    emits('onStart');
  },
  onStarted: () => {
    emits('onEnd');
  },
});

const formatShowNumber = computed(() => {
  return formatNumber(showValue.value, props.fixed, props.decimalSeparator, props.thousandsSeparator, props.prefix, props.suffix);
});

defineExpose<NumberAnimationExports>({
  startPlay,
});
</script>

<style scoped></style>
