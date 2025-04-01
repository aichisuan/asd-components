<template>
  <BackTop :listenEl="scrollRef" />

  <ul class="scroll" ref="scrollRef" style="height: 300px; overflow: auto">
    <li v-for="item in 100" :key="item">周杰伦的歌曲有增无减</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BackTop } from 'asd-components';

const scrollRef = ref<HTMLElement | null>(null);
</script>


<style scoped>
.scroll-wrap {
  position: relative;
}

/* 清除 ul 和 li 的默认样式 */
.scroll {
  list-style: none; /* 去掉默认的列表样式 */
  margin: 0;
  padding: 0;
  height: 300px;
  overflow: auto;
  border: 1px solid #ccc;
  border-radius: 8px;

}

/* li 样式 */
.scroll li {
  padding: 10px;
  /* border-bottom: 1px solid #eaeaea; */
  font-size: 14px;
  color: #333;
}

/* 最后一项去掉边框 */
.scroll li:last-child {
  border-bottom: none;
}

/* 自定义滚动条样式 */
.scroll::-webkit-scrollbar {
  width: 8px; /* 滚动条宽度 */
}

.scroll::-webkit-scrollbar-thumb {
  background: #3498db; /* 滚动条颜色 */
  border-radius: 4px; /* 滚动条圆角 */
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: #2980b9; /* 滚动条悬浮颜色 */
}

.scroll::-webkit-scrollbar-track {
  background: #f0f0f0; /* 滚动条轨道颜色 */
  border-radius: 4px;
}
</style>
