<template>
  <transition name="fade">
    <div class="img-pv" v-show="visible">
      <div class="img-pv__mask" @click.stop="handleMask"></div>

      <!-- 图片区域 -->
      <img
        class="img-pv__img"
        :src="currentImg"
        ref="imgBox"
        @mousedown.stop="mousedown"
        @mousewheel.stop="mouseWheel"
        :style="imgStyle"
      />

      <!-- 按钮区域 -->
      <!-- 关闭按钮 -->
      <div class="img-pv__close-btn" @click.stop="handleClose" v-if="imgOp.closeIcon">
        <Icon icon="fa-solid fa-xmark" class="iconfont"></Icon>
      </div>

      <!-- 下一张 -->
      <div
        :class="[
          'img-pv__checked-btn',
          'img-pv__checked-btn--next',
          index === imgsData.length - 1 && 'img-pv__checked-btn--disabled'
        ]"
        @click="handleChecked('next')"
      >
        <Icon icon="fa-solid fa-arrow-right" class="iconfont" />
      </div>

      <!-- 上一张 -->
      <div
        :class="[
          'img-pv__checked-btn',
          'img-pv__checked-btn--prev',
          index <= 0 && 'img-pv__checked-btn--disabled'
        ]"
        @click="handleChecked('prev')"
      >
        <Icon icon="fa-solid fa-arrow-left" class="iconfont" />
      </div>

      <!-- 工具类 放大 缩小 旋转 下载 -->
      <div class="img-pv__bottom" v-if="imgsData.length > 0">
        <Icon v-if="imgOp.scale" class="iconfont" icon="fa-solid fa-circle-plus" @click="handleNarrow" />
        <Icon v-if="imgOp.scale" class="iconfont" icon="fa-solid fa-circle-minus" @click="handleEnlarge" />
        <Icon v-if="imgOp.rotateLeftIcon" class="iconfont" icon="fa-solid fa-rotate-left" @click="handleRotate('left')" />
        <Icon v-if="imgOp.rotateRightIcon" class="iconfont" icon="fa-solid fa-rotate-right" @click="handleRotate('right')" />
        <Icon v-if="imgOp.download" class="iconfont" icon="fa-solid fa-download" @click="handleDownload" />
        <slot name="previewEdit" :index="index"></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue';
import { downloadFileByURL, getInitOptions, getInitActiveImgStatus } from './method';
import type { ImgPreviewEmits, RotateType } from './types';
import type { ImgPreviewProps } from './types';
import { Icon } from 'asd-components';

defineOptions({
  name: 'AImgPreview',
});

// Props 和 Emits
const props = withDefaults(defineProps<ImgPreviewProps>(), {
  visible: false,
  imgsData: () => [],
  showIndex: 0,
  options: () => getInitOptions(),
});
const emit = defineEmits<ImgPreviewEmits>();

// 响应式状态
const activeImgStatus = reactive(getInitActiveImgStatus());
const imgOp = reactive({ ...getInitOptions(), ...props.options });
const index = ref(0);
const openAnimate = ref(true);
const backDocumentScroll = ref('auto');
const imgBox = ref<HTMLImageElement | null>();

// 监听 visible 属性
watch(
  () => props.visible,
  (val) => {
    if (val) {
      index.value = props.showIndex;
      Object.assign(imgOp, { ...getInitOptions(), ...props.options });
      backDocumentScroll.value = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = backDocumentScroll.value;
    }
  }
);

// 计算属性
const currentImg = computed(() => props.imgsData[index.value] || '');
const imgStyle = computed(() => ({
  transform: `translateX(${activeImgStatus.x}px) translateY(${activeImgStatus.y}px) scale(${activeImgStatus.scale}) rotate(${activeImgStatus.rotate}deg)`,
  transition: `${openAnimate.value && imgOp.isAnimation ? 'all 0.3s linear' : 'none'}`,
  width: `${imgOp.width}px`,
}));

// 工具函数
const resetActiveImgStatus = () => {
  Object.assign(activeImgStatus, getInitActiveImgStatus());
};

// 事件处理函数
const handleMask = () => imgOp.clickMaskClose && close();
const handleClose = () => imgOp.closeIcon && close();
const close = () => {
  emit('update:visible', false);
  resetActiveImgStatus();
};

const handleChecked = (type: 'next' | 'prev') => {
  if (type === 'next' && index.value < props.imgsData.length - 1) {
    index.value += 1;
    resetActiveImgStatus();
  } else if (type === 'prev' && index.value > 0) {
    index.value -= 1;
    resetActiveImgStatus();
  }
};

const mousedown = (e: MouseEvent) => {
  if (imgBox.value) imgBox.value.ondragstart = () => false;

  const { pageX: downX, pageY: downY } = e;
  const { x: prevDix, y: prevDiy } = activeImgStatus;

  const handleMove = (e: MouseEvent) => {
    activeImgStatus.x = +(e.pageX - downX + prevDix).toFixed(2);
    activeImgStatus.y = +(e.pageY - downY + prevDiy).toFixed(2);
  };

  const handleMouseup = () => {
    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleMouseup);
  };

  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', handleMouseup);
};

const handleNarrow = () => {
  activeImgStatus.scale = Math.min(activeImgStatus.scale + imgOp.stepScale!, imgOp.maxScale!);
};

const handleEnlarge = () => {
  activeImgStatus.scale = Math.max(activeImgStatus.scale - imgOp.stepScale!, imgOp.minScale!);
};

const handleRotate = (direction: RotateType) => {
  activeImgStatus.rotate += direction === 'right' ? 90 : -90;
  openAnimate.value = true;
};

const handleDownload = () => {
  const url = currentImg.value;
  if (url) downloadFileByURL(url, `${index.value}${imgOp.downloadName}`);
};

const mouseWheel = (e: WheelEvent) => {
  e.deltaY > 0 ? handleNarrow() : handleEnlarge();
};
</script>

<style scoped>
@import url('./style.css');
</style>