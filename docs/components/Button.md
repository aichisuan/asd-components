---
title: Button | asd-components
description: Button 组件的文档
---
# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" language="vue"></preview>

## 禁用状态

您可以使用disabled属性来定义按钮禁用属性，disable属性控制是否禁用状态。该属性接受一个Boolean类型值。

<preview path="../demo/Button/Disabled.vue" language="vue"></preview>

## 调整尺寸

您可以使用size 属性 额外配置尺寸，可使用large 、medium、 small, 其中medium是默认值

<preview path="../demo/Button/Size.vue" language="vue"></preview>

## loading状态按钮

通过设置loading属性为true来给按钮加上加载中状态

<preview path="../demo/Button/Loading.vue" language="vue"></preview>

## 图标按钮

可以使用icon属性为按钮添加图标，您也可以自定义图标, 内置图标请查看 [fontawesome图标库](https://fontawesome.com/search?o=r&s=solid), 选择使用。

<preview path="../demo/Button/IconButton.vue" language="vue"></preview>

## Button  API

### Button Attributes

| 属性名      | 描述                       | 类型                                                             | 默认值 |
| ----------- | -------------------------- | ---------------------------------------------------------------- | ------ |
| size        | 按钮尺寸                   | `enum` - `'large'\| 'small'`                                  | —     |
| type        | 按钮类型                   | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —     |
| plain       | 是否为朴素按钮             | `boolean`                                                      | false  |
| round       | 是否为圆角按钮             | `boolean`                                                      | false  |
| circle      | 是否为圆形按钮             | `boolean`                                                      | false  |
| loading     | 是否为加载中状态           | `boolean`                                                      | false  |
| disabled    | 是否禁用按钮               | `boolean`                                                      | false  |
| icon        | 图标组件                   | `string`                                                       | —     |
| autofocus   | 同原生按钮的 `autofocus` | `boolean`                                                      | false  |
| native-type | 同原生按钮的 `type`      | `enum` - `'button'\| 'submit'\| 'reset'`                       | button |

### Button Slots

| 插槽名                 | 说明                     |
| --------------------- | ----------------------- |
|  default   |  自定义默认插槽内容    |

### Button Exposes

|属性名           | 说明                      | 类型              |
| -------------- | -----------------------  | ---------------- |
| elRef | 按钮html元素 | Ref `<HTMLButtonElement>` |
