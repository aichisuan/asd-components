
<template>
  <Collapse v-model="openedValue">
    <CollapseItem name="a" >
      <template #title>
          自定义title
          &nbsp;
          <Icon icon="fa-house" circle />
        </template>

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
import { Icon } from 'asd-components';

const openedValue = ref<string[]>(['c']);
</script>