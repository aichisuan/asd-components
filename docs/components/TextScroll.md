---
title: TextScroll | asd-components
description: TextScroll 组件的文档
---
# TextScroll 文字滚动组件

`TextScroll` 是一个支持水平滚动和垂直滚动的 Vue3 组件，适用于公告、新闻、标签等信息的动态展示。


## 水平滚动

默认情况下，`TextScroll` 以水平滚动模式展示文本内容。

<preview path="../demo/TextScroll/Horizontal.vue" language="vue"></preview>

---

## 垂直滚动

通过设置 `isVertical` 属性切换为垂直滚动模式。

<preview path="../demo/TextScroll/Vertical.vue" language="vue"></preview>

---

## 自定义样式

通过 `textStyle` 属性自定义文本样式，例如颜色、背景色等。

<preview path="../demo/TextScroll/CustomStyle.vue" language="vue"></preview>

---

## 鼠标悬停暂停

通过设置 `isMouseHoverPause` 属性，控制鼠标悬停时是否暂停滚动。

<preview path="../demo/TextScroll/HoverPause.vue" language="vue"></preview>

---

## 使用Method
通过调用实例的 `startAnimation`, `stopAnimation`,`resetAnimation` 来实现TextScroll 的开始，暂停，重置

<preview path="../demo/TextScroll/Method.vue" language="vue"></preview>

---

## TextScroll API

### TextScroll Attributes

| 属性名               | 描述                                     | 类型                       | 默认值       |
| -------------------- | ---------------------------------------- | -------------------------- | ------------ |
| `textScrollList`     | 滚动文本数据                             | `Array[TextScroll Options]`                    | `[]`         |
| `width`              | 组件宽度                                 | `string/number`            | `'100%'`     |
| `height`             | 组件高度                                 | `string/number`            | `60`         |
| `textStyle`          | 文本样式                                 | `Object`                   | `{}`         |
| `gapDistance`        | 文本间距                                 | `number`                   | `18`         |
| `isSingle`           | 是否只有一个元素，为true 水平默认不滚动      | `boolean`                  | `false`      |
| `isVertical`         | 是否垂直滚动                             | `boolean`                  | `false`      |
| `isMouseHoverPause`  | 鼠标悬停是否暂停                         | `boolean`                  | `false`       |
| `horizontalSpeed`    | 水平滚动速度(px/s)                       | `number`                   | `40`         |
| `horizontalShowNum`  | 水平滚动显示的文本数量，0为不限制         | `number`                   | `0`          |
| `verticalDuration`   | 垂直滚动动画时间(ms)                     | `number`                   | `1200`       |
| `verticalInterval`   | 垂直滚动间隔时间(ms)                     | `number`                   | `3000`       |

---

### TextScroll Events

| 事件名   | 描述                 | 回调参数           |
| -------- | -------------------- | ------------------ |
| `click`  | 点击文本项时触发     | `item: 当前点击的文本项` |

---

### TextScroll Options

| 属性名          | 描述                 | 类型               | 默认值       |
| --------------- | -------------------- | ------------------ | ------------ |
| `id`            | 唯一标识             | `string/number`    | 必填         |
| `text`          | 显示文本             | `string`           | 必填         |
| `href`          | 链接地址             | `string`           | 可选         |
| `target`        | 链接打开方式         | `_blank/_self`     | 可选         |
| `itemTextStyle` | 单项文本样式         | `Object`           | 可选         |
| `disabled`      | 是否禁用             | `boolean`          | `false`      |

---

### TextScroll Expose

`TextScroll` 组件通过 `ref` 暴露以下方法和属性，供开发者调用：

#### Methods

| 方法名            | 描述                                   | 参数          | 返回值  |
| ----------------- | -------------------------------------- | ------------- | ------- |
| `startAnimation`  | 开始滚动动画                           | 无            | 无      |
| `stopAnimation`   | 停止滚动动画                           | 无            | 无      |
| `resetAnimation`  | 重置滚动动画到初始状态                 | 无            | 无      |

#### Properties

| 属性名            | 描述                                   | 类型          |
| ----------------- | -------------------------------------- | ------------- |
| `isAnimating`     | 当前滚动动画是否正在运行  