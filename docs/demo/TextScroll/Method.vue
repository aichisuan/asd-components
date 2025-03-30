<template>
  <div class="method-demo">
    <h3>TextScroll 方法调用示例</h3>
    <TextScroll
      ref="textScrollRef"
      :textScrollList="list"
      :isVertical="false"
      :horizontalSpeed="50"
      :gapDistance="20"
      :height="60"
      class="mb-4"
    />
    <TextScroll
      ref="textScrollRefVertical"
      :textScrollList="list"
      :isVertical="true"
      :horizontalSpeed="50"
      :gapDistance="20"
      :height="60"
      class="mb-4"
    />
    <div class="controls">
      <Button type="primary" @click="startScroll">播放</Button>
      <Button type="danger" @click="pauseScroll">暂停</Button>
      <Button type="info" @click="resetScroll">重置</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TextScroll from '@/components/TextScroll/TextScroll.vue';
import Button from '@/components/Button/Button.vue';

const textScrollRef = ref(null);
const textScrollRefVertical = ref(null);

const list = ref([
  { id: '1', text: '欢迎使用 TextScroll 组件欢迎使用 TextScroll 组件' },
  { id: '2', text: '支持水平滚动和垂直滚动支持水平滚动和垂直滚动' },
  { id: '3', text: '点击查看更多信息从而点击查看更多信息从而', href: 'https://example.com', target: '_blank' }
]);

const startScroll = () => {
  textScrollRef.value?.startAnimation();
  textScrollRefVertical.value?.startAnimation();
  console.log(textScrollRef.value.isAnimating);
  console.log(textScrollRefVertical.value.isAnimating);
};

const pauseScroll = () => {
  textScrollRef.value?.stopAnimation();
  textScrollRefVertical.value?.stopAnimation();
  console.log(textScrollRef.value.isAnimating);
  console.log(textScrollRefVertical.value.isAnimating);
};

const resetScroll = () => {
  textScrollRef.value?.resetAnimation();
  textScrollRefVertical.value?.resetAnimation();
};
</script>

<style scoped>
.method-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.controls {
  display: flex;
  gap: 8px;
}

Button {
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

Button:hover {
  background-color: #e6f7ff;
}
</style>