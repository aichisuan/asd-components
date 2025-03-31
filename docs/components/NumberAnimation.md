---
title: NumberAnimation | asd-components
description: NumberAnimation 组件的文档
---

# NumberAnimation 数字动画

`NumberAnimation` 组件用于实现数字的动态变化效果，常用于数据展示、统计等场景。

---

## 基础用法

通过简单的 `NumberAnimation` 组件即可实现数字的动态变化。

<preview path="../demo/NumberAnimation/Basic.vue" language="vue"></preview>

---

## 精度

通过设置`fixed` 的 number 数值 可以实现精度的控制
<preview path="../demo/NumberAnimation/Precision.vue" language="vue"></preview>

## 前缀后缀

通过 `prefix` 和 `suffix` 属性，可以为数字添加前缀或后缀，例如货币符号或单位。

<preview path="../demo/NumberAnimation/PrefixSuffix.vue" language="vue"></preview>

---

## 自定义样式、动画时间

通过设置`numberStyle` 自定义样式、通过设置`duration`设置动画时间。

<preview path="../demo/NumberAnimation/Custom.vue" language="vue"></preview>

---

## NumberAnimation API

### Attributes

| 属性名      | 描述                 | 类型                 | 默认值  |
| ----------- | -------------------- | -------------------- | ------- |
| from        | 动画的起始值         | `number` \| `string` | `0`     |
| to          | 动画的结束值         | `number` \| `string` | `10000` |
| duration    | 动画持续时间（毫秒） | `number`             | `3000`  |
| autoplay    | 自定播放             | `boolean`            | `true`  |
| fixed       | 小数点后保留的位数   | `number`             | `0`     |
| prefix      | 数字的前缀           | `string`             | `''`    |
| suffix      | 数字的后缀           | `string`             | `''`    |
| numberStyle | 自定义数字样式       | `CSSProperties`      | `{ fontSize: '20px',color: '#000',fontWeight: 'normal',} `        |
| transition       | 动画的缓动函数                 | [动画效果](#transition)   |`easeInOutCubic`

---

### Events

| 事件名  | 描述           | 参数 |
| ------- | -------------- | ---- |
| onStart | 动画开始时触发 | —    |
| onEnd   | 动画结束时触发 | —    |

---

### transition

以下是支持的动画缓动函数：

| 动画效果名称     | 描述               |
| ---------------- | ------------------ |
| `linear`         | 线性动画           |
| `easeOutSine`    | 缓出正弦动画       |
| `easeInOutSine`  | 缓入缓出正弦动画   |
| `easeInQuad`     | 缓入二次方动画     |
| `easeOutQuad`    | 缓出二次方动画     |
| `easeInOutQuad`  | 缓入缓出二次方动画 |
| `easeInCubic`    | 缓入三次方动画     |
| `easeOutCubic`   | 缓出三次方动画     |
| `easeInOutCubic` | 缓入缓出三次方动画 |
| `easeInQuart`    | 缓入四次方动画     |
| `easeOutQuart`   | 缓出四次方动画     |
| `easeInOutQuart` | 缓入缓出四次方动画 |
| `easeInQuint`    | 缓入五次方动画     |
| `easeOutQuint`   | 缓出五次方动画     |
| `easeInOutQuint` | 缓入缓出五次方动画 |
| `easeInExpo`     | 缓入指数动画       |
| `easeOutExpo`    | 缓出指数动画       |
| `easeInOutExpo`  | 缓入缓出指数动画   |
| `easeInCirc`     | 缓入圆形动画       |
| `easeOutCirc`    | 缓出圆形动画       |
| `easeInOutCirc`  | 缓入缓出圆形动画   |
| `easeInBack`     | 缓入回弹动画       |
| `easeOutBack`    | 缓出回弹动画       |
| `easeInOutBack`  | 缓入缓出回弹动画   |
