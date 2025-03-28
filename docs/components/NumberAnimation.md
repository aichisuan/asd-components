---
title: NumberAnimation | as-components
description: NumberAnimation 组件的文档
---

# NumberAnimation 数字动画

`NumberAnimation` 组件用于实现数字的动态变化效果，常用于数据展示、统计等场景。

---

## 基础用法

通过简单的 `NumberAnimation` 组件即可实现数字的动态变化。

<preview path="../demo/NumberAnimation/Basic.vue" language="vue"></preview>

---

---

## NumberAnimation API

### Attributes

| 属性名       | 描述                           | 类型                       | 默认值       |
| ------------ | ------------------------------ | -------------------------- | ------------ |
| value        | 动画结束时的目标值             | `number`                   | `0`          |
| duration     | 动画持续时间（毫秒）           | `number`                   | `1000`       |
| formatter    | 自定义格式化函数               | `(value: number) => string` | `undefined` |
| easing       | 动画缓动函数                   | `string`                   | `'linear'`   |

---

### Events

| 事件名       | 描述                           | 参数                       |
| ------------ | ------------------------------ | -------------------------- |
| start        | 动画开始时触发                 | —                          |
| end          | 动画结束时触发                 | —                          |

---

### Slots

| 插槽名       | 描述                           |
| ------------ | ------------------------------ |
| default      | 自定义数字内容的显示           |

---

## 示例代码

### 基础用法

```vue
<template>
  <NumberAnimation :value="1000" />
</template>

<script setup>
import NumberAnimation from '@/components/NumberAnimation/NumberAnimation.vue';
</script>