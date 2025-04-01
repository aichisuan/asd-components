<template>
  <!-- 水平滚动 -->
  <div
    v-if="!isVertical"
    class="as-text-scroll"
    ref="horizontalRef"
    :style="[
      scrollWrapStyle,
      `
    --text-color: ${textStyle.color || '#000'};
    --text-href-hover-color: ${textStyle.hoverColor || '#1677ff'};
    --text-bg-color: ${textStyle.backgroundColor || '#fff'};
    --text-gap-distance: ${props.gapDistance}px;
    --text-duration: ${horizontalAnimationDuration}s;
    --text-play-state: ${horizontalPlayState};
    --text-delay: 100ms;
    --text-shadow-color: #d3d3d3;
    --text-iteration-count: infinite;
    --text-disabled-color: #d3d3d3;
    `,
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      @animationiteration="onAnimationIteration"
      ref="horizontalContentRef"
      class="as-text-scroll__items-wrap"
      :class="{ 'as-text-scroll__items-wrap--reset': isReset }"
    >
      <component
        v-for="(item, index) in scrollList"
        :key="index"
        :is="item.href ? 'a' : 'div'"
        :href="item.href"
        :target="item.target"
        class="as-text-scroll__item"
        :class="{ 'as-text-scroll__item--a': item.href, 'as-text-scroll__item--disabled': item.disabled }"
        :style="[item.itemTextStyle, { width: itemWidth }]"
        @click="handleClick(item)"
      >
        {{ item.text }}
      </component>
    </div>
    <div class="as-text-scroll__items-wrap" :class="{ 'as-text-scroll__items-wrap--reset': isReset }">
      <component
        v-for="(item, index) in scrollList"
        :key="index"
        :is="item.href ? 'a' : 'div'"
        :href="item.href"
        :target="item.target"
        :style="[item.itemTextStyle, { width: itemWidth }]"
        class="as-text-scroll__item"
        :class="{ 'as-text-scroll__item--a': item.href, 'as-text-scroll__item--disabled': item.disabled  }"
        @click="handleClick(item)"
      >
        {{ item.text }}
      </component>
    </div>
  </div>
  <!-- 垂直滚动 -->
  <div
    v-else
    ref="verticalRef"
    class="as-text-scroll-vertical"
    :style="[
      scrollWrapStyle,
      `
      --text-color: ${textStyle.color || '#000'};
      --text-href-hover-color: ${textStyle.hoverColor || '#1677ff'};
      --text-bg-color: ${textStyle.backgroundColor || '#fff'};
      --text-gap-distance: ${props.gapDistance}px;
      --text-duration: ${verticalDuration}ms;
      --text-delay: 100ms;
      --text-scale-state: 0.6;
      --text-shadow-color: #d3d3d3;
      --text-iteration-count: infinite;
      --text-disabled-color: #d3d3d3;
      `,
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <TransitionGroup name="slide">
      <div
        v-for="(item, index) in scrollList"
        :key="item.id"
        class="as-text-scroll-vertical__items-wrap"
        v-show="verticalActiveIndex === index"
      >
        <component
          :is="item.href ? 'a' : 'div'"
          class="as-text-scroll-vertical__item"
          :class="{ 'as-text-scroll-vertical__item--a': item.href, 'as-text-scroll-vertical__item--disabled': item.disabled }"
          :style="[item.itemTextStyle, { width: itemWidth }]"
          :href="item.href"
          :title="item.text"
          :target="item.target"
          @click="handleClick(item)"
        >
          {{ item.text }}
        </component>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onUnmounted, onMounted } from 'vue';
import type { TextScrollProps, Item } from './types';
import { clearAf, requestAf } from '../../common/util';

defineOptions({
  name: 'ATextScroll',
});

const props = withDefaults(defineProps<TextScrollProps>(), {
  textScrollList: () => [],
  width: '100%',
  height: 60, // height 默认60px
  textStyle: () => ({}),
  gapDistance: 25, // 间距 默认18px
  isSingle: false, //  是否单行滚动 水平每行只展示一个，垂直每列只展示一个
  horizontalSpeed: 40, // 水平滚动速度
  isVertical: false, // 是否垂直滚动
  horizontalShowNum: 0, // 水平滚动展示的文本数量 为 0时不限制

  verticalDuration: 1200, // 垂直滚动时间
  verticalInterval: 3000, // 垂直滚动间隔时间

  isMouseHoverPause: false, // 鼠标悬停是否暂停
});

const emits = defineEmits<{
  click: [item: Item];
}>();

const scrollList = ref<Item[]>([]); // 滚动列表

// 文本滚动列表 包括两个
const horizontalRef = ref<HTMLElement | null>(null);
// 水平滚动列表 内容单个
const horizontalContentRef = ref<HTMLElement | null>(null);
const horizontalRefWidth = ref(0);
const horizontalPlayState = ref<'running' | 'paused'>('paused'); // 水平滚动状态
const horizontalAmount = ref(0); // 水平滚动数量
const isReset = ref(false); // 水平滚动是否重置

const verticalRef = ref<HTMLElement | null>(null);
const verticalRafTimer = ref<{ id: number | null }>({ id: null }); // 垂直滚动定时器
const verticalActiveIndex = ref<number>(0); // 垂直滚动当前索引
const verticalOriginFirstAm = ref<boolean>(true); // 垂直滚动初始状态

const scrollWrapStyle = computed(() => {
  return {
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  };
});

watch(
  () => props.textScrollList,
  (val) => {
    if (props.isSingle) {
      // 只有一项且不滚动
      scrollList.value = [val[0]];
      return;
    }
    if (props.isVertical && val.length === 1) {
      // 垂直滚动 且为1 复制一项 让其滚动
      const copyItem = {
        ...val[0],
        id: `${val[0].id}_copy_${Date.now()}`,
      };
      scrollList.value = [val[0], copyItem];
    } else {
      scrollList.value = [...val];
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

// 水平滚动战术数量
const horizontalDisplayNum = computed(() => {
  if (props.isSingle) {
    return 1;
  }
  if (props.horizontalShowNum) {
    return props.horizontalShowNum;
  }
  return 0;
});

// 每个item的width
const itemWidth = computed(() => {
  if (horizontalDisplayNum.value && horizontalRefWidth.value) {
    return `${parseFloat((horizontalRefWidth.value / horizontalDisplayNum.value).toFixed(2))}px`;
  }
  return 'auto';
});

// 水平动画持续时间
const horizontalAnimationDuration = computed(() => {
  return `${(horizontalRefWidth.value / props.horizontalSpeed).toFixed(2)}`;
});

const onAnimationIteration = () => {
  resetHorizontalState();
};

const delayTime = computed(() => {
  return verticalOriginFirstAm.value
    ? props.verticalDuration
    : props.verticalInterval + props.verticalDuration;
});

const startVerticalAnimation = () => {
  verticalRafTimer.value = requestAf(
    () => {
      if (verticalOriginFirstAm.value) {
        verticalOriginFirstAm.value = false;
      }
      const originalLength = props.textScrollList.length;
      verticalActiveIndex.value = (verticalActiveIndex.value + 1) % originalLength;
    },
    // 初始滚动状态不需要等待
    delayTime,
    true
  );
};

const startAnimation = () => {
  if (props.isVertical) {
    if (scrollList.value.length > 1) {
      startVerticalAnimation();
    }
  } else {
    // 水平滚动 如果数量大于展示数量，才开始动画
    if (horizontalAmount.value > horizontalDisplayNum.value || horizontalDisplayNum.value === 0) {
      isReset.value = false;
      horizontalPlayState.value = 'running';
    }
  }
};

const stopAnimation = () => {
  if (props.isVertical) {
    verticalOriginFirstAm.value = true;
    verticalRafTimer.value && clearAf(verticalRafTimer.value);
    verticalRafTimer.value.id = null;
  } else {
    horizontalPlayState.value = 'paused';
  }
};

const resetAnimation = () => {
  if (props.isVertical) {
    verticalRafTimer.value && clearAf(verticalRafTimer.value);
    if (verticalActiveIndex.value === 0) {
      verticalOriginFirstAm.value = true;
    } else {
      verticalActiveIndex.value = 0;
      verticalOriginFirstAm.value = false;
    }
    startAnimation();
  } else {
    horizontalPlayState.value = 'paused';
    isReset.value = true;
    nextTick(() => {
      horizontalRef.value?.offsetWidth; // 强制重排
      startAnimation();
    });
  }
};

const handleMouseEnter = () => {
  if (props.isMouseHoverPause) {
    stopAnimation();
  }
};
const handleMouseLeave = () => {
  if (props.isMouseHoverPause) {
    startAnimation();
  }
};

const handleClick = (item: any) => {
  if (item.href) {
    emits('click', item);
  }
};

const initScroll = () => {
  // 清除 垂直滚动raf
  if (verticalRafTimer.value) {
    clearAf(verticalRafTimer.value);
  }

  if (!verticalOriginFirstAm.value) {
    verticalOriginFirstAm.value = true;
  }

  startAnimation();
};

watch(
  () => [props.isVertical, props.verticalDuration, props.verticalInterval],
  () => {
    initScroll();
  },
  {
    immediate: true,
    deep: true,
  }
);

watch(
  scrollList,
  () => {
    resetAnimation();
  },
  {
    immediate: true,
    deep: true,
  }
);

const resetHorizontalState = () => {
  horizontalPlayState.value = 'paused';
  nextTick(() => {
    // 获取值， 强制浏览器重排
    horizontalRef.value?.offsetWidth;
    horizontalPlayState.value = 'running';
  });
};

onMounted(() => {
  if (!props.isVertical) {
    horizontalRefWidth.value = horizontalRef.value?.offsetWidth ?? 0;
  }
});

onUnmounted(() => {
  // 清除 垂直滚动raf
  if (verticalRafTimer.value) {
    clearAf(verticalRafTimer.value);
  }
});

const isAnimating = computed(() => {
  if (props.isVertical) {
    return verticalRafTimer.value.id !== null;
  }else {
    return horizontalPlayState.value === 'running';
  }
});

defineExpose({
  startAnimation,
  stopAnimation,
  resetAnimation,
  isAnimating
});
</script>

<style>
@import url('./style.css');
</style>
