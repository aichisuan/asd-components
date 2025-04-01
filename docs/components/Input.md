---
title: Input | asd-components
description: Input 组件的文档
---
# Input 输入框

用于用户输入文本的基础组件，支持多种类型和功能。

## 基础用法

通过 `v-model` 绑定输入框的值。

<preview path="../demo/Input/Basic.vue" language="vue"></preview>

## 不同尺寸

通过 `size` 属性设置输入框的大小，支持 `small`、`medium` 和 `large`。

<preview path="../demo/Input/Sizes.vue" language="vue"></preview>

## 带 前后缀\前后置文案  的输入框

通过 `prefix` 和 `suffix` 插槽自定义输入框的前缀和后缀内容。 
通过 `prepend` 和 `append` 插槽自定义输入框前置后置文案

<preview path="../demo/Input/PrefixSuffix.vue" language="vue"></preview>

## 可清空输入框

通过 `clearable` 属性支持一键清空输入框内容。

<preview path="../demo/Input/Clearable.vue" language="vue"></preview>

## 密码框

通过 `showPassword` 属性支持密码框的显示和隐藏切换。

<preview path="../demo/Input/Password.vue" language="vue"></preview>

## 文本域

通过设置 `type="textarea"` 使用多行文本输入框。
文本域高度可以通过 rows 属性控制。

<preview path="../demo/Input/Textarea.vue" language="vue"></preview>

## Input API

### Input Attributes

| 属性名         | 描述                       | 类型                | 默认值    |
| -------------- | -------------------------- | ------------------- | --------- |
| v-model        | 输入框的绑定值             | `string`            | —         |
| size           | 输入框的尺寸               | `'small' \| 'medium' \| 'large'` | `medium` |
| type           | 输入框类型                 | `'text' \| 'textarea' \| 'password'` | `text` |
| placeholder    | 输入框占位文本             | `string`            | —         |
| clearable      | 是否支持清空               | `boolean`           | `false`   |
| showPassword   | 是否支持密码显示切换       | `boolean`           | `false`   |
| disabled       | 是否禁用输入框             | `boolean`           | `false`   |
| readonly       | 输入框是否只读             | `boolean`           | `false`   |
| autofocus       |  原生属性是否自动补全             | `boolean`           | `false`   |
| form       |  form 表单预留字段             |          |    |

### Input Slots

| 插槽名         | 描述                       |
| -------------- | -------------------------- |
| prefix         | 输入框前缀内容             |
| suffix         | 输入框后缀内容             |
| prepend        | 输入框前置内容             |
| append         | 输入框后置内容             |

### Input Events

| 事件名              | 描述                              | 回调参数            |
| ------------------- | --------------------------------- | ------------------- |
| input               | 输入框内容变化时触发              | `(value: string)`   |
| clear               | 点击清空按钮时触发                | —                   |
| change              | 输入框内容改变且失去焦点时触发    | `(value: string)`   |
| focus               | 输入框获得焦点时触发              | `(event: FocusEvent)` |
| blur                | 输入框失去焦点时触发              | `(event: FocusEvent)` |
| update:modelValue   | 双向绑定值更新时触发              | `(value: string)`   |

### Input defineExpose
| 属性名 | 描述                       | 类型   |
| ------ | -------------------------- | ------ |
| ref    | HTML 元素 input 或 textarea | Object |