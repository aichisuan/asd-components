---
title: Message | as-components
description: Message 组件的文档
---
# Message 消息提示

用于在页面中显示全局的消息提示，支持多种类型和功能。

## 基础用法

通过调用 `Message` 方法显示消息提示。

<preview path="../demo/Message/Basic.vue" language="vue"></preview>

## 不同类型

通过 `type` 属性设置消息的类型，支持 `success`、`info`、`warning` 和 `danger`。

<preview path="../demo/Message/Types.vue" language="vue"></preview>

## 可关闭的消息

通过 `showClose` 属性设置消息是否可关闭。

<preview path="../demo/Message/Closeable.vue" language="vue"></preview>

## 自定义时长

通过 `duration` 属性设置消息的显示时长，单位为毫秒。设置为 `0` 时，消息不会自动关闭。

<preview path="../demo/Message/Duration.vue" language="vue"></preview>

## 手动关闭

通过 `onClose` 回调函数监听消息关闭事件。

<preview path="../demo/Message/CloseEvent.vue" language="vue"></preview>

## 直接调用的方式

<preview path="../demo/Message/Global.vue" language="vue"></preview>

## Message API

### Message Attributes

| 属性名      | 描述                       | 类型                       | 默认值    |
| ----------- | -------------------------- | -------------------------- | --------- |
| message     | 消息内容                   | `string \| VNode`          | 必填      |
| type        | 消息类型                   | `'success' \| 'info' \| 'warning' \| 'danger'` | `info`    |
| duration    | 显示时长，单位为毫秒       | `number`                   | `3000`    |
| showClose   | 是否显示关闭按钮           | `boolean`                  | `false`   |
| onClose     | 消息关闭时的回调函数       | `function`                 | —         |
| offset        | 每个消息之间的距离   | `number`                   | `20`      |
| transitionName | 消息动画的过渡名称         | `string`                   | `fade`    |

### Message Methods

| 方法名      | 描述                       | 参数                       |
| ----------- | -------------------------- | -------------------------- |
| Message     | 显示一条消息提示           | `(options: MessageOptions)` |
| Message.success | 显示成功类型的消息提示   | `(options: MessageOptions)` |
| Message.info    | 显示信息类型的消息提示   | `(options: MessageOptions)` |
| Message.warning | 显示警告类型的消息提示   | `(options: MessageOptions)` |
| Message.danger   | 显示错误类型的消息提示   | `(options: MessageOptions)` |

### Message Options

| 属性名      | 描述                       | 类型                       | 默认值    |
| ----------- | -------------------------- | -------------------------- | --------- |
| message     | 消息内容                   | `string \| VNode`          | 必填      |
| type        | 消息类型                   | `'success' \| 'info' \| 'warning' \| 'danger'` | `info`    |
| duration    | 显示时长，单位为毫秒       | `number`                   | `3000`    |
| showClose   | 是否显示关闭按钮           | `boolean`                  | `false`   |
| onClose     | 消息关闭时的回调函数       | `function`                 | —         |