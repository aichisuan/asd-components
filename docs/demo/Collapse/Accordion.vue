
<template>
  <Collapse v-model="openedValue" accordion>
    <CollapseItem name="a" title="Title A">
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </CollapseItem>
    <CollapseItem name="b" title="Title B">
      <div>this is bbbbb test</div>
    </CollapseItem>
    <CollapseItem name="c" title="Title C">
      <div>this is cccc test</div>
    </CollapseItem>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Collapse } from 'asd-components';
import { CollapseItem } from 'asd-components';

const openedValue = ref<string[]>(['b']);
</script>