import { defineConfig } from 'vitepress';
// import VueMacros from 'unplugin-vue-macros';
// import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/asd-components/',
  title: 'asd-components',
  description: '一个致力于解决前端pc疑难杂症的按需引入组件库',
  lang: 'zh-CN',
  vite: {
    // plugins: [
    //   VueMacros.vite({
    //     setupComponent: false,
    //     setupSFC: false,
    //     plugins: {
    //       vueJsx: vueJsx(),
    //     },
    //   }),
    // ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/components/Button' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      { text: '介绍', link: '/configMd/special' },
      { text: '安装', link: '/configMd/install' },
      { text: '快速开始', link: '/configMd/start' },
      { text: '组件总览', link: '/configMd/all' },
      {
        text: '组件',
        items: [
          {
            text: '',
            items: [
              { text: 'Avatar 头像', link: '/components/Avatar' },
              { text: 'BackTop 回到顶部', link: '/components/BackTop' },
              { text: 'Button 按钮', link: '/components/Button' },
              { text: 'Collapse 折叠面板', link: '/components/Collapse' },
              { text: 'Dropdown 下拉菜单', link: '/components/Dropdown' },
              { text: 'Icon 图标', link: '/components/Icon' },
              { text: 'Input 输入框', link: '/components/Input' },
              { text: 'ImgPreview 图片预览', link: '/components/ImgPreview' },
              { text: 'NumberAnimation 数字动画', link: '/components/NumberAnimation' },
              { text: 'Message 消息弹窗', link: '/components/Message' },
              { text: 'Switch 开关', link: '/components/Switch' },
              { text: 'Select', link: '/components/Select' },
              { text: 'TextScroll', link: '/components/TextScroll' },
              { text: 'Tooltip', link: '/components/Tooltip' },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/aichisuan/asd-components' }],
  },
});
