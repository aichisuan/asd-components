<template>
  <i class="as-icon"  :style="customerStyles" :class="{[`as-icon--${type}`]: type}" v-bind="$attrs">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { omit } from "lodash-es";

import type { FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";

interface OIconProps {
  type?: string;
  color?: string;
}

export type IconProps = FontAwesomeIconProps & OIconProps;

library.add(fas);



defineOptions({
  name: 'as-icon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>();

const filteredProps = computed(() => omit(props, ["type", "color"]));

const customerStyles = computed(() =>{
  return props.color ? { color: props.color } : {}
})
</script>

<style scoped>
@import url("./style.css");
</style>
