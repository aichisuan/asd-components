<template>
  设置悬浮提示文字
  <BackTop tooltipText="回到顶部"  :bottom="100" :right="100" :tooltipProps="{ popperOptions, }" />
</template>

<script setup>
import BackTop from '@/components/BackTop/BackTop.vue';

const popperOptions = {
  modifiers: [
    {
      name: 'customWidth',
      enabled: true,
      phase: 'beforeWrite',
      fn({ state }) {
        state.styles.popper.width = '90px';
      },
    },
    {
      name: 'offset',
      options: {
        // 偏移量
        offset: [0, 8],
      },
    },
  ],
};
</script>

<style lang="less" scoped></style>
