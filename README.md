## 组件库文档地址
[docs](https://github.com/aichisuan/asd-components)

## 介绍

`asd-components` 是一个基于 Vue 3 的个人开发的组件库，致力于解决前端开发中的常见问题，提供高效、灵活的组件解决方案。**在后续的开发中不再支持简单组件的实现，而是致力于解决前端各种特性问题的一个组件库。**

以下为 `asd-components` 组件库的部分特性：

### 🌟 Vue 3 支持
- 组件库采用 Vue@3.5.13 + Vite@6.0.1 + Typescript@5.6.3 实现。
- 目前组件库包含十多个组件，并在持续的探索更新中......
- 按需加载支持，减少不必要的代码引入，优化性能。

### 🧪 测试覆盖
- 使用 Vitest 和 Vue Test Utils 进行单元测试，确保组件的稳定性和可靠性。
- 测试覆盖率达到90%以上。

### 🛠️ 丰富的组件
- 提供多种常用组件，如 `Button`、`Input`、`Select`、`Tooltip`、`BackTop` 等，满足日常开发需求。
- 支持高级组件，如 `NumberAnimation`、`TextScroll`、`ImgPreview` 等，适用于复杂场景。

### 🎨 灵活的样式定制
- 使用 CSS 变量和 BEM 命名规范，方便样式覆盖和定制。
- 提供组件级样式文件，支持按需引入。

### 🔄 动画与交互
- 支持多种动画效果，如数字动画、滚动动画等，提升用户体验。
- 提供灵活的事件和插槽支持，方便自定义交互逻辑。

### 📚 文档完善
- 提供详细的组件文档和示例，帮助开发者快速上手。
- 支持 VitePress 文档生成，实时预览组件效果。

### 🚀 持续更新
- 持续开发和维护，定期发布新功能和优化。
- 开源社区支持，欢迎贡献和反馈。

`asd-components` 是一个不断成长个人开发的组件库，旨在为开发者提供高效、优雅的解决方案。如果你有任何建议或问题，欢迎在 [GitHub](https://github.com/aichisuan/asd-components) 提交 Issue 或 Pull Request！

# 快速开始

## 引入组件库
在你的 Vue 项目中引入 asd-components：

### 全局引入
在 `main.ts` 或 `main.js` 中引入组件库和样式：

```js
import { createApp } from 'vue';
import App from './App.vue';
import AsdComponents from 'asd-components';
import 'asd-components/dist/index.css';

const app = createApp(App);

app.use(AsdComponents); // 注册组件库
app.mount('#app');
```

### 按需引入

如果你希望按需引入组件，可以使用以下方式：

#### 1. 手动 按需引入组件

```ts
// main.ts 引入样式
import { createApp } from 'vue'
import App from './App.vue'
import 'asd-components/dist/index.css';

const app = createApp(App);
app.mount('#app');
```

```ts
// 组件中引入组件
imoprt { Button } from 'asd-components';
```

#### 2. 安装按需加载工具(正在支持中)
