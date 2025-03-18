<template>
  <div>
    <Button icon="fa-solid fa-magnifying-glass">搜索</Button>
    <Button icon="fa-solid fa-pen-to-square" type="primary">编辑</Button>
    <Button icon="fa-solid fa-share-from-square" type="success">分享</Button>
    <Button icon="fa-solid fa-trash" type="danger">删除</Button>
    <Button>
      <div class="flex items-center space-x-2">
        <Icon icon="fa-solid fa-trash" />
         清空
      </div>
    </Button>
  </div>
</template>
<script setup>
import Button from '@/components/Button/Button.vue';
import Icon from '@/components/Icon/Icon.vue';
</script>
