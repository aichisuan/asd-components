<template>
  <Avatar src="https://p2.itc.cn/images01/20230923/8f1d0da9533e40b8aece2a8e73161d53.jpeg" class="mr4 mb2" />
  <Avatar src="https://p1.itc.cn/images01/20231211/a23f4bdcca7f4304ac0ec43b1c7ca834.jpeg" class="mb2 mr4" />
  <Avatar bgColor="#f56c6c" animatedRotate style="cursor: pointer;" class="mr4 mb2">A</Avatar>
  <Avatar bgColor="#f56c6c" animatedRotate style="cursor: pointer;" href="https://www.baidu.com" target="_blank" class="mr4 mb2">Bai</Avatar>
</template>

<script setup>
import { Avatar } from 'asd-components';
console.log(Avatar.name)
</script>
