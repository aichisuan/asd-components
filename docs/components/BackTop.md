---
title: BackTop | as-components
description: BackTop 组件的文档
---

# BackTop 返回顶部

用于快速返回页面顶部的操作按钮。

## 基础用法

通过简单的 `BackTop` 组件即可实现返回顶部功能。

<preview path="../demo/BackTop/Basic.vue" language="vue"></preview>

## 定义背景色 颜色 以及 shape

通过 `bgColor`、`color` 和 `shape` 属性自定义按钮的样式。

<preview path="../demo/BackTop/CustomStyle.vue" language="vue"></preview>

## 自定义提示

通过 `tooltipText` 属性设置悬浮提示文字。@TODO, 此处样式提示待修改。

<preview path="../demo/BackTop/TipText.vue" language="vue"></preview>

## 自定义监听目标
通过设置 listenEl 来设置监听哪个元素触发BackTop，同时可以设置显示位置是全局还是局部。
<preview path="../demo/BackTop/ListenEl1.vue" language="vue"></preview>

<preview path="../demo/BackTop/ListenEl2.vue" language="vue"></preview>

## 自定义Slot
<preview path="../demo/BackTop/Slot.vue" language="vue"></preview>

## BackTop API

### BackTop Attributes

| 属性名            | 描述                           | 类型                                   | 默认值       |
| ----------------- | ------------------------------ | -------------------------------------- | ------------ |
| right             | 右侧位置                       | `string \| number`                    | `'30px'`     |
| bottom            | 底部位置                       | `string \| number`                    | `'30px'`     |
| visibilityHeight  | 滚动高度达到多少时显示         | `number`                              | `200`        |
| bgColor           | 背景颜色                       | `string`                              | `'#000'`     |
| color             | 文字颜色                       | `string`                              | `'#fff'`     |
| zIndex            | z-index 层级                  | `number`                              | `1000`       |
| shape             | 按钮形状                       | `'circle' \| 'rect' \| 'shape'`       | `'circle'`   |
| tooltipText       | 提示文字                       | `string`                              | —            |
| tooltipProps      | 提示文字的其他属性             | `Omit<TooltipProps, 'content'>`       | —            |
| listenEl          | 监听滚动的元素                 | `HTMLElement \| Window`               | `window`     |
| isInListenEl          | 是否在监听元素内 只有 listenEl 存在时才生效                 | `boolean`               | `false`     |

### BackTop Events

| 事件名           | 描述                     | 参数                     |
| ---------------- | ------------------------ | ------------------------ |
| click            | 点击事件                 | `e: Event`                      |
| visible-change   | 显示或隐藏状态变化事件   | `value: boolean`         |
| on-progress      | 滚动进度事件             | `value: number`          |
### BackTop Slots

| 插槽名   | 描述           |
| -------- | -------------- |
| default  | 自定义按钮内容 |
