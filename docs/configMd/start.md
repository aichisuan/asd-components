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
