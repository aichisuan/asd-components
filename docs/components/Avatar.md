---
title: Avatar | asd-components
description: Avatar 组件的文档
---

# Avatar 头像

用于展示用户头像，支持图片、图标或字符形式。

## 基础用法

* 通过 `src` 属性设置头像图片地址。 
* animateRotate 属性可以悬浮avatar的时候自动旋转。
* 通过bgColor 可以设置头像的背景色。
* 通过设置属性 href 可以设置点击跳转链接，同时设置 href 之后 avatar 相当于 a 标签，拥有了 target 属性。

<preview path="../demo/Avatar/Basic.vue" language="vue"></preview>

## 不同尺寸

通过 `size` 属性设置头像的大小，支持 `small`、`default` 和 `large`，也可以传入具体的数值。

<preview path="../demo/Avatar/Sizes.vue" language="vue"></preview>

## 不同形状

通过 `shape` 属性设置头像的形状，支持 `circle` 和 `square`。

<preview path="../demo/Avatar/Shapes.vue" language="vue"></preview>

## 自定义内容

通过插槽自定义头像内容，例如图标或文字。

<preview path="../demo/Avatar/CustomContent.vue" language="vue"></preview>

## Avatar API

### Avatar Attributes

| 属性名          | 描述                       | 类型                                   | 默认值       |
| --------------- | -------------------------- | -------------------------------------- | ------------ |
| src             | 头像图片地址               | `string`                               | —            |
| size            | 头像大小                   | `'small' \| 'default' \| 'large' \| number` | `default`    |
| shape           | 头像形状                   | `'circle' \| 'square'`                 | `circle`     |
| icon            | 头像图标                   | `VNode \| Slot`                        | —            |
| bgColor         | 头像背景色                 | `string`                               | `rgba(0, 0, 0, 0.15)` |
| alt             | 图片无法显示时的替代文本   | `string`                               | `avatar`     |
| bordered        | 是否有边框                 | `boolean`                              | `false`      |
| animatedRotate  | 是否有悬浮旋转动画         | `boolean`                              | `false`      |
| target          | 跳转链接的目标             | `'_blank' \| '_self'`                  | `_self`      |
| href            | 跳转链接地址               | `string`                               | —            |

### Avatar Slots

| 插槽名   | 描述           |
| -------- | -------------- |
| default  | 自定义头像内容 |
| icon     | 自定义图标内容 |