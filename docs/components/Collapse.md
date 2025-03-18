---
title: Collapse | as-components
description: Collapse 组件的文档
---
# Collapse 折叠面板

用于折叠和展开内容区域。

## 基础用法

使用 `v-model` 绑定当前激活的面板。

<preview path="../demo/Collapse/Basic.vue" language="vue"></preview>

## 手风琴模式

通过设置 `accordion` 属性可以让面板互斥展开。

<preview path="../demo/Collapse/Accordion.vue" language="vue"></preview>

## 自定义面板标题

除了可以直接使用title属性之外，也可以通过具名slot来实现自定义面板的标题内容

<preview path="../demo/Collapse/CustomTitle.vue" language="vue"></preview>

## Collapse API

### Collapse Attributes

| 属性名                | 描述                       | 类型                                                             | 默认值 |
| --------------------- | -------------------------- | ---------------------------------------------------------------- | ------ |
| model-value / v-model | 当前激活的面板             | `string[] \| number[]`                                           | —      |
| accordion             | 是否手风琴模式             | `boolean`                                                        | false  |

### Collapse Slots

| 插槽名                | 说明                     |
| --------------------- | ----------------------- |
| default               | 自定义默认插槽内容       |

## Collapse Item API

### Collapse Item Attributes

| 属性名                | 描述                       | 类型                                                             | 默认值 |
| --------------------- | -------------------------- | ---------------------------------------------------------------- | ------ |
| name                  | 面板唯一标识               | `string \| number`                                               | —      |
| title                 | 面板标题                   | `string`                                                         | —      |
| disabled              | 是否禁用                   | `boolean`                                                        | false  |

### Collapse Item Slot

| 插槽名                | 说明                     |
| --------------------- | ----------------------- |
| default               | 面板内容插槽             |
| title                 | 自定义面板标题插槽       |