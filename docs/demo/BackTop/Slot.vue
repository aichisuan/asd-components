<template>
  自定义Slot 🚀
  <BackTop :bottom="160" :right="100" bgColor=""  @onProgress="updatePregress">
    <div class="progress-wrapper">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path ref="progressPathRef" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <img src="./ar.png" alt="" class="backtop-icon" />
  </BackTop>
</template>

<script setup lang="ts">
import { ref, h, onMounted } from 'vue';
import BackTop from '@/components/BackTop/BackTop.vue';
const progressPathRef = ref<SVGPathElement | null>(null);
const pathLength = ref<number>(0);
const updatePregress = (progress: number) => {
  console.log('当前滚动进度：', progress/100);
  if (progressPathRef.value) {
    console.log(pathLength.value - progress / 100)
    progressPathRef.value.style.strokeDashoffset = pathLength.value - progress / 100 * pathLength.value;
  }
};

onMounted(() => {
  if (progressPathRef.value) {
    pathLength.value = progressPathRef.value.getTotalLength();
    progressPathRef.value.style.strokeDasharray = `${pathLength.value} ${pathLength.value}`;
    progressPathRef.value.style.strokeDashoffset = `${pathLength.value}`;
  }
});

</script>

<style scoped>
.progress-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}

.progress-wrapper svg path {
  fill: none;
}

.progress-wrapper svg.progress-circle path {
  stroke: #f54325;
  stroke-width: 4;
  box-sizing: border-box;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.backtop-icon {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>