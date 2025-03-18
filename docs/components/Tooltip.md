---
title: Tooltip | as-components
description: Tooltip 组件的文档
---

# Tooltip 提示

用于为元素提供额外的信息提示。

## 基础用法

通过 `content` 属性设置提示内容。

<preview path="../demo/Tooltip/Basic.vue" language="vue"></preview>

## 不同位置

通过 `placement` 属性设置提示框的显示位置，支持 12 个位置：`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`left`、`left-start`、`left-end`、`right`、`right-start` 和 `right-end`。

<preview path="../demo/Tooltip/Placement.vue" language="vue"></preview>

## 自定义触发方式

通过 `trigger` 属性设置触发方式，支持 `hover`、`click` 和 `focus`。

<preview path="../demo/Tooltip/Trigger.vue" language="vue"></preview>

## 自定义内容

通过插槽自定义提示框的内容。

<preview path="../demo/Tooltip/CustomContent.vue" language="vue"></preview>

## Tooltip API

### Tooltip Attributes

| 属性名         | 描述                       | 类型                       | 默认值    |
| -------------- | -------------------------- | -------------------------- | --------- |
| content        | 提示框的内容               | `string`                   | —         |
| placement      | 提示框的显示位置           | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'top'`   |
| trigger        | 触发方式                   | `'hover' \| 'click' \| 'focus'` | `'hover'` |
| disabled       | 是否禁用提示框             | `boolean`                  | `false`   |
| offset         | 提示框与触发元素的偏移量   | `number`                   | `10`      |
| showArrow      | 是否显示箭头               | `boolean`                  | `true`    |
| delay          | 提示框显示/隐藏的延迟时间  | `number`                   | `0`       |

### Tooltip Events

| 事件名         | 描述                       | 参数                       |
| -------------- | -------------------------- | -------------------------- |
| show           | 提示框显示时触发           | —                         |
| hide           | 提示框隐藏时触发           | —                         |
