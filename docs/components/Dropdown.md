---
title: Dropdown | as-components
description: Dropdown 组件的文档
---
# Dropdown 下拉菜单

用于显示一组操作的下拉菜单。

## 基础用法

悬停到下拉菜单上展示更多的操作。

通过组件 slot 来设置下拉触发的元素以及需要通过设置 `menuOptions` 传入选项来设置 Dropdown 的下拉菜单，默认 `trigger` 的方式是鼠标悬停，无需点击就会显示下拉菜单。

<preview path="../demo/Dropdown/Basic.vue" language="vue"></preview>

## 触发位置

支持 12 个位置触发，设置 `placement` 属性, 使得下拉菜单出现在不同的位置，以下例举触常用的八个位置。

<preview path="../demo/Dropdown/Placement.vue" language="vue"></preview>

## 触发方式

支持触发方式有 `hover`、`click` 和外部调用触发，默认为 `hover`。

<preview path="../demo/Dropdown/Trigger.vue" language="vue"></preview>

## 触发事件

点击菜单选项之后，用户可以通过 `@select` 事件得到点击不同的 `key` 进行操作。同时用户可以通过 `@visible-change` 获取下拉菜单的显示和隐藏状态。

<preview path="../demo/Dropdown/Event.vue" language="vue"></preview>

## Dropdown API

### Dropdown Attributes

| 属性名          | 描述                                                                 | 类型                   | 默认值      |
| --------------- | -------------------------------------------------------------------- | ---------------------- | ----------- |
| menu-options    | 下拉菜单的选项列表                                                 | `MenuOptionItem[]`     | `[]`        |
| trigger         | 触发方式，可选值为 `hover` 或 `click`                               | `string`               | `hover`     |
| placement       | 菜单弹出位置，可选值见 [placement 参数](#placement-参数)            | `string`               | `bottom`    |
| hide-after-click | 点击菜单项后是否隐藏菜单                                           | `boolean`              | `true`      |
| disabled        | 是否禁用下拉菜单                                                   | `boolean`              | `false`     |
| popper-options  | 自定义 Popper.js 的配置                                            | `object`               | `{}`        |

---

### menuOptions 参数

`menuOptions` 是一个数组，每个选项的类型为 `MenuOptionItem`，其属性如下：

| 属性名        | 描述                     | 类型                   | 默认值  |
| ------------- | ------------------------ | ---------------------- | ------- |
| key           | 菜单项的唯一标识         | `string \| number`     | 必填    |
| label         | 菜单项的显示内容         | `string \| VNode`      | 必填    |
| disabled      | 是否禁用该菜单项         | `boolean`              | `false` |
| dividedLine   | 是否显示分割线           | `boolean`              | `false` |

---

### Dropdown Slots

| 插槽名    | 描述                     |
| --------- | ------------------------ |
| default   | 自定义下拉菜单内容       |
| trigger   | 自定义触发器内容         |

---

### Dropdown Events

| 事件名           | 描述                                   | 回调参数                     |
| ---------------- | -------------------------------------- | --------------------------- |
| select           | 点击菜单项时触发                      | `(item: MenuOptionItem)`    |
| visible-change   | 菜单显示状态变化时触发                | `(visible: boolean)`        |

---

### placement 参数

`placement` 参数用于控制下拉菜单的弹出位置，支持以下值：

- `top`
- `top-start`
- `top-end`
- `bottom`
- `bottom-start`
- `bottom-end`
- `left`
- `left-start`
- `left-end`
- `right`
- `right-start`
- `right-end`