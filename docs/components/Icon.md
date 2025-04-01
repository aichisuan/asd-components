---
title: Dropdown | asd-components
description: Dropdown 组件的文档
---
# Icon图标

as-compoents Icon图标采用了[fontawesome图标库](https://fontawesome.com/search?o=r&s=solid) 完成图标功能, 您可以从[fontawesome图标库](https://fontawesome.com/search?o=r&s=solid) 查找到您想要的图标，然后填写对应的Icon属性，设置图标样式。

## 基本使用1

<preview path="../demo/Icon/Basic.vue" language="vue"></preview>

## 基本使用2

<preview path="../demo/Icon/Basic2.vue" language="vue"></preview>

## Icon API

### Icon Attributes

**具体属性可以前往 [fontawesome](https://docs.fontawesome.com/) 官网查看 **

| 属性名      | 描述                       | 类型                                                                                 | 默认值    |
| ----------- | -------------------------- | ------------------------------------------------------------------------------------ | --------- |
| border      | 是否显示边框               | `boolean`                                                                          | `false` |
| fixedWidth  | 是否固定宽度               | `boolean`                                                                          | `false` |
| flip        | 翻转方向                   | `'horizontal' \| 'vertical' \| 'both'`                                               | —        |
| icon        | 图标名称或定义             | `object \| string[] \| string \| IconDefinition`                                      | 必填      |
| mask        | 遮罩图标                   | `object \| string[] \| string`                                                       | —        |
| maskId      | 遮罩 ID                    | `object \| string[] \| string`                                                       | —        |
| listItem    | 是否作为列表项             | `boolean`                                                                          | `false` |
| pull        | 图标的浮动方向             | `'right' \| 'left'`                                                                 | —        |
| pulse       | 是否以脉冲动画显示         | `boolean`                                                                          | `false` |
| rotation    | 图标旋转角度               | `90 \| 180 \| 270 \| '90' \| '180' \| '270'`                                            | —        |
| size        | 图标大小                   | `2xs \| xs \| sm \| lg \| xl \| 2xl \| 1x \| 2x \| 3x \| 4x \| 5x \| 6x \| 7x \| 8x \| 9x \| 10x` | —        |
| spin        | 是否以旋转动画显示         | `boolean`                                                                          | `false` |
| transform   | 图标的变换属性             | `object \| string`                                                                  | —        |
| title       | 图标的标题                 | `string`                                                                           | —        |
| titleId     | 图标标题的 ID              | `string`                                                                           | —        |
| inverse     | 是否反转颜色               | `boolean`                                                                          | `false` |
| bounce      | 是否以弹跳动画显示         | `boolean`                                                                          | `false` |
| shake       | 是否以抖动动画显示         | `boolean`                                                                          | `false` |
| beat        | 是否以心跳动画显示         | `boolean`                                                                          | `false` |
| fade        | 是否以淡入淡出动画显示     | `boolean`                                                                          | `false` |
| beatFade    | 是否以心跳淡入淡出动画显示 | `boolean`                                                                          | `false` |
| spinPulse   | 是否以脉冲旋转动画显示     | `boolean`                                                                          | `false` |
| spinReverse | 是否以反向旋转动画显示     | `boolean`                                                                          | `false` |
| type        | 图标的类型（颜色风格）     | `'primary' \| 'info' \| 'success' \| 'warning' \| 'danger'`                            | —        |
| color       | 图标的颜色                 | `string`                                                                           | —        |
