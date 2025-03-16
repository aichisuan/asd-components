<template>
  <i class="as-icon"  :style="customerStyles" :class="{[`as-icon--${type}`]: type}" v-bind="$attrs">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { omit } from "lodash-es";

library.add(fas);

interface OIconProps {
  type?: string;
  color?: string;
}

defineOptions({
  name: 'as-icon',
  inheritAttrs: false,
})

const props = defineProps<FontAwesomeIconProps & OIconProps>();

const filteredProps = computed(() => omit(props, ["type", "color"]));

const customerStyles = computed(() =>{
  return props.color ? { color: props.color } : {}
})
</script>

<style scoped>
@import url("./style.css");
</style>
