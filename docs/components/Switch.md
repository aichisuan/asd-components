---
title: Switch | asd-components
description: Switch 组件的文档
---

# Switch 开关

用于在开/关状态之间切换，支持自定义激活值和未激活值。

## 基础用法

通过绑定 `v-model` 来控制开关的状态。

<preview path="../demo/Switch/Basic.vue" language="vue"></preview>

## 禁用状态

通过 `disabled` 属性设置开关为禁用状态。

<preview path="../demo/Switch/Disabled.vue" language="vue"></preview>

## 自定义颜色

通过 `activeColor` 和 `inactiveColor` 属性设置开关的自定义颜色。

<preview path="../demo/Switch/CustomColor.vue" language="vue"></preview>

## 带文字的开关

通过 `activeText` 和 `inactiveText` 属性为开关添加文字描述。

<preview path="../demo/Switch/WithText.vue" language="vue"></preview>

## 自定义激活值和未激活值

通过 `activeValue` 和 `inactiveValue` 属性设置开关的自定义值。

<preview path="../demo/Switch/CustomValue.vue" language="vue"></preview>

## Switch API

### Switch Attributes

| 属性名         | 描述                       | 类型                       | 默认值    |
| -------------- | -------------------------- | -------------------------- | --------- |
| v-model        | 开关的绑定值               | `number \| string \| boolean` | `false`   |
| disabled       | 是否禁用开关               | `boolean`                  | `false`   |
| activeText     | 开启状态的文字描述         | `string`                   | —         |
| inactiveText   | 关闭状态的文字描述         | `string`                   | —         |
| activeValue    | 开启状态的值               | `number \| string \| boolean` | `true`    |
| inactiveValue  | 关闭状态的值               | `number \| string \| boolean` | `false`   |
| activeColor    | 开启状态的背景色           | `string`                   | `#409EFF` |
| inactiveColor  | 关闭状态的背景色           | `string`                   | `#C0C4CC` |
| name           | 原生 `name` 属性           | `string`                   | —         |
| id             | 原生 `id` 属性             | `string`                   | —         |
| size           | 开关的尺寸                 | `'small' \| 'medium' \| 'large'` | `medium` |

### Switch Events

| 事件名         | 描述                       | 参数                       |
| -------------- | -------------------------- | -------------------------- |
| change         | 开关状态改变时触发         | `(value: SwitchValue)`     |
| update:modelValue | 开关绑定值更新时触发     | `(value: SwitchValue)`     |

