<template>
  <Input v-model="value" placeholder="带前后缀的输入框" style="width: 400px" class="mb2">
    <template #prefix>
      <Icon icon="fa-user" />
    </template>
    <template #suffix>
      <Icon icon="fa-house" />
    </template>
  </Input>
  <br>
  <Input v-model="testInputVal" placeholder="prepend append" style="width: 400px">
    <template #prepend>Https://</template>
    <template #append>.com</template>
  </Input>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/components/Input/Input.vue';
import Icon from '@/components/Icon/Icon.vue';

const value = ref('');
</script>