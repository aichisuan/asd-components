// 定义ts 引入.vue文件的类型
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  name: string;
  export default component;
}