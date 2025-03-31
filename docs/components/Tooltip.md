---
title: Tooltip | asd-components
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
| offset         | 提示框与触发元素的偏移量,[水平偏移值向右为正数，垂直偏移值向下为正数]，   | `[number, number]`                   | `[0, 8]`      |
| isManual         | 是否手动触发   | `boolean`                   | false      |
| popperOptions         | Popper 参数，详细可以产看，[Popper.js Options 文档](https://popper.js.org/docs/v2/constructors/#options)   | `Object`        | -     |
| transitionName         | Tooltip 显示动画，暂时只支持fade,后期会增加支持   | `string`        | `fade`     |
| delayOpen         | 延迟打开时间   | `number`        | `-`     |
| delayClose         | 延迟关闭时间   | `number`        | `-`     |



### Tooltip Exposes

| 属性名         | 描述                       | 类型                       |
| -------------- | -------------------------- | -------------------------- |
| TooltipRef           | Tooltip组件Ref           |     Ref<HTMLElement | null>      |
| show           | 提示框显示主动操作           | Function                         |
| hide           | 提示框隐藏主动操作         | Function                         |

### Tooltip Events 
| 事件名         | 描述                       | 参数                       |
| -------------- | -------------------------- | -------------------------- |
| visible-change           | 显示状态发生改变,true 打开，false隐藏           |     boolean                    |
| click-outside          | 点击外部，true打开，flase隐藏           | boolean                         |