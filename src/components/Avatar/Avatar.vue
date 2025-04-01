<template>
  <component
    :is="href ? 'a' : 'div'"
    class="as-avatar"
    :class="[
      `as-avatar--${shape}`,
      {
        'as-avatar--link': href,
        'as-avatar--image': src,
        'as-avatar--icon': isShowIcon,
        [`as-avatar--${size}`]: isSizeString,
        'as-avatar--rotate': animatedRotate,
      },
    ]"
    :href="href"
    :target="target"
    :style="avatarStyle"
  >
    <img v-if="src" :src="src" :alt="alt" class="as-avatar__image" />
    <slot name="icon">
      <component :is="icon"/>
    </slot>
    <span class="as-avatar__default" v-if="isShowDefault">
      <slot></slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { AvatarProps } from './types';
import useSlotsNamesExits from '../../hooks/useSlotsNamesExits';

defineOptions({
  name: 'Avatar',
});

const props = withDefaults(defineProps<AvatarProps>(), {
  bgColor: 'rgba(0, 0, 0, 0.15)',
  size: 40,
  shape: 'circle',
  src: '',
  alt: 'avatar',
  icon: undefined,
  target: '_self',
});

const isSizeString = computed(() => typeof props.size === 'string' && ['small', 'default', 'large'].includes(props.size));

const avatarStyle = computed(() => {
  if (!isSizeString.value) {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`,
      lineHeight: `${props.size}px`,
      fontSize: `${props.size as number / 2}px`,
      backgroundColor: props.bgColor,
    };
  }else {
    return {
      backgroundColor: props.bgColor,
    };
  }
})

const slotsExits = useSlotsNamesExits(['default', 'icon']);

const isShowIcon = computed(() => {
  if (!props.src) {
    // 有icon插槽或者props.icon存在
    return slotsExits.icon || props.icon;
  }
  return false;
});


const isShowDefault = computed(() => {
  if (!props.src && !isShowIcon.value) {
    return slotsExits.default;
  }
  return false;
});

</script>

<style scoped>
@import url('./style.css');
</style>
