<template>
  <div>
    <Button icon="fa-solid fa-magnifying-glass" class="mb2">搜索</Button>
    <Button icon="fa-solid fa-pen-to-square" type="primary" class="mb2">编辑</Button>
    <Button icon="fa-solid fa-share-from-square" type="success" class="mb2">分享</Button>
    <Button icon="fa-solid fa-trash" type="danger" class="mb2">删除</Button>
    <Button class="mb2">
      <div class="flex items-center space-x-2">
        <Icon icon="fa-solid fa-trash" />
         清空
      </div>
    </Button>
  </div>
</template>
<script setup>
import { Button } from 'asd-components';
import { Icon } from 'asd-components';
</script>
