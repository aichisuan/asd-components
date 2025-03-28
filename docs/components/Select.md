---
title: Select | as-components
description: Select 组件的文档
---

# Select 下拉选择器

用于从多个选项中选择一个或多个。

## 基础用法

通过 `v-model` 绑定选择的值。

<preview path="../demo/Select/Basic.vue" language="vue"></preview>

## 禁用状态

通过设置 `disabled` 属性禁用选择器。

<preview path="../demo/Select/Disabled.vue" language="vue"></preview>


## Select API

### Select Attributes

| 属性名      | 描述           | 类型                         | 默认值     |
| ----------- | -------------- | ---------------------------- | ---------- |
| v-model     | 绑定值         | `string \| number `          | —          |
| options     | 下拉选项列表   | [options 参数](#options参数) | -          |
| placeholder | 占位符文本     | `string`                     | `'请选择'` |
| disabled    | 是否禁用选择器 | `boolean`                    | `false`    |

### Select Events

| 事件名            | 描述             | 参数            |
| ----------------- | ---------------- | --------------- | ------ |
| change            | 选中值改变时触发 | 改变的值 string | number |
| update:modelValue | 选中值改变时触发 | 改变的值 string | number |
| visible-change    | 显示状态改变触发 | 展示状态 string | number |

### options 参数

| 参数名   | 描述           | 类型      | 是否必填 | 默认值  |
| -------- | -------------- | --------- | -------- | ------- |
| label    | 选项的显示文本 | `string`  | 是       | —       |
| value    | 选项的绑定值   | `string`  | 是       | —       |
| disabled | 是否禁用该选项 | `boolean` | 否       | `false` |
