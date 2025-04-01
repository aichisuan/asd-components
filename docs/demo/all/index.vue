<template>
  <div class="demo-container">
    <div v-for="component in components" :key="component.name" class="demo-card">
      <h3>{{ component.title }}</h3>
      <div class="component-preview">
        <component :is="component.component" style="width: 100%" />
      </div>
      <div class="demo-link" @click="navigateTo(component.link)">查看详情</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vitepress';

// 获取 VitePress 的路由实例
const router = useRouter();

// 跳转函数
const navigateTo = (link: string) => {
  router.go(link); // 使用 VitePress 的路由跳转
};

// 定义组件信息
const components = [
  {
    name: 'Avatar',
    title: 'Avatar 头像',
    component: defineAsyncComponent(() => import('../../demo/Avatar/Basic2.vue')),
    link: '/components/Avatar',
  },
  {
    name: 'BackTop',
    title: 'BackTop 回到顶部',
    component: defineAsyncComponent(() => import('../../demo/BackTop/Slot.vue')),
    link: '/components/BackTop',
  },
  {
    name: 'Button',
    title: 'Button 按钮',
    component: defineAsyncComponent(() => import('../../demo/Button/IconButton.vue')),
    link: '/components/Button',
  },
  {
    name: 'Collapse',
    title: 'Collapse 折叠面板',
    component: defineAsyncComponent(() => import('../../demo/Collapse/Basic.vue')),
    link: '/components/Collapse',
  },
  {
    name: 'Dropdown',
    title: 'Dropdown 下拉菜单',
    component: defineAsyncComponent(() => import('../../demo/Dropdown/Basic.vue')),
    link: '/components/Dropdown',
  },
  {
    name: 'Icon',
    title: 'Icon 图标',
    component: defineAsyncComponent(() => import('../../demo/Icon/Basic2.vue')),
    link: '/components/Icon',
  },
  {
    name: 'Input',
    title: 'Input 输入框',
    component: defineAsyncComponent(() => import('../../demo/Input/Basic.vue')),
    link: '/components/Input',
  },
  {
    name: 'ImgPreview',
    title: 'ImgPreview 图片预览',
    component: defineAsyncComponent(() => import('../../demo/ImgPreview/Basic.vue')),
    link: '/components/ImgPreview',
  },
  {
    name: 'NumberAnimation',
    title: 'NumberAnimation 数字动画',
    component: defineAsyncComponent(() => import('../../demo/NumberAnimation/Basic.vue')),
    link: '/components/NumberAnimation',
  },
  {
    name: 'Message',
    title: 'Message 消息弹窗',
    component: defineAsyncComponent(() => import('../../demo/Message/Basic.vue')),
    link: '/components/Message',
  },
  {
    name: 'Switch',
    title: 'Switch 开关',
    component: defineAsyncComponent(() => import('../../demo/Switch/Basic.vue')),
    link: '/components/Switch',
  },
  {
    name: 'Select',
    title: 'Select 下拉选择',
    component: defineAsyncComponent(() => import('../../demo/Select/Basic.vue')),
    link: '/components/Select',
  },
  {
    name: 'TextScroll',
    title: 'TextScroll 文字滚动',
    component: defineAsyncComponent(() => import('../../demo/TextScroll/Horizontal.vue')),
    link: '/components/TextScroll',
  },
  {
    name: 'Tooltip',
    title: 'Tooltip 提示',
    component: defineAsyncComponent(() => import('../../demo/Tooltip/Basic.vue')),
    link: '/components/Tooltip',
  },
];
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 30px;
}

.demo-card {
  width: 260px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.demo-card h3 {
  font-size: 18px;
  margin-bottom: 12px;
}

.component-preview {
  width: 100%;
  align-items: center;
}

.demo-link {
  margin-top: 12px;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.demo-link:hover {
  text-decoration: underline;
}
</style>
